<?php
/**
 * @file
 * The router for the /cl root site path.
 */

namespace CL\Site;

use CL\Site\Api\APIException;
use CL\Site\Api\JsonAPI;
use CL\Site\System\Server;

/**
 * The router for the /cl root site path.
 */
class Router {
	/**
	 * Add a route
	 * @param array $path Array of path values, like ['login'] or ['api', '*']
	 * '*' indicates anything can follow.
	 * @param callable $function Function to call to create the route handler.
	 */
	public function addRoute($path, $function) {
		$root = $path[0];
		$rest = array_slice($path, 1);
		if(!isset($this->routes[$root])) {
			$this->routes[$root] = [];
		}

		$this->routes[$root][] = [
			'path' => $path,
			'function' => $function
		];
	}


	/**
	 * Dispatch to the correct route.
	 * @param Site $site
	 * @param Server $server
	 * @param $time
	 * @return string Page response
	 */
	public function dispatch(Site $site, Server $server, $time) {
		// Allow for added routes as specified by plugin
		$site->amend($this);

		// Determine the URI path, everything after /cl
		$path = $server->parseRequestURI('cl');
		if($path === null || empty($path)) {
			if(isset($server->server['REDIRECT_URL'])) {
				// Try REDIRECT_URL as well
				$path = $server->parseRequestURI('cl', 'REDIRECT_URL');

				if ($path === null || empty($path)) {
					return $this->invalid($site);
				}
			} else {
				return $this->invalid($site);
			}
		}


		//
		// Standard paths
		//
		switch($path[0]) {
			case 'notauthorized':
				$view = new \CL\Site\Views\NotAuthorizedView($site, $server, $path);
				return $view->whole();

			case 'setup':
				return $this->setup($site, $server, $path, $time);

			case 'api':
				if(count($path) > 1) {
					if($path[1] === 'poll') {
						return $this->poll($site, $server, $time);
					}
				}
				break;
		}

		// Dispatch the route
		return $this->routeDispatch($site, $server, $path, $time);
	}

	private function routeDispatch(Site $site, Server $server, array $path, $time) {
		$path0 = $path[0];

		if(isset($this->routes[$path0])) {
			foreach($this->routes[$path0] as $route) {
				$routePath = $route['path'];
				$properties = [];
				for($i=1;  ; $i++) {
					if($i >= count($routePath) && ($i >= count($path) || $path[$i] === '')) {
						// Both reached the end, so this is a valid path
						return $route['function']($site, $server, [], $properties, $time);
					}

					if($i >= count($path)) {
						// We reached the end of the path. If we
						// are not at the end of the route path,
						// it is not a match unless it has an '*'
						if($routePath[$i] === '*') {
							return $route['function']($site, $server, [], $properties, $time);
						}

						// Path was not long enough
						break;
					}

					if($i >= count($routePath)) {
						// Route is not as long as the path
						break;
					}

					if($routePath[$i] === '*') {
						// This is a valid path
						$path1 = array_slice($path, $i);
						return $route['function']($site, $server, $path1, $properties, $time);
					}

					if($path[$i] === $routePath[$i]) {
						// We have a partial match
						continue;
					}

					if($routePath[$i][0] === ':') {
						// We have a property
						$properties[substr($routePath[$i], 1)] = $path[$i];
					} else {
						// This is not a match!
						break;
					}
				}
			}
		}

		$view = new \CL\Site\Views\InvalidPathView($site);
		return $view->whole();
	}

	/**
	 * Handle poll requests
	 * @param Site $site The Site object
	 * @param Server $server Abstraction of the server
	 * @param int $time Current time
	 * @return string Json API result
	 * @throws APIException
	 */
	private function poll(Site $site, Server $server, $time) {
		$site->start(['open'=>true]);
		if($server->requestMethod === 'GET') {
			$json = new JsonAPI();
			return $json->encode();
		}

		if($server->requestMethod !== 'POST') {
			throw new APIException("Invalid API Usage", APIException::INVALID_API_USAGE);
		}

		$post = $server->post;
		$json = new JsonAPI();

		foreach($this->polling as $polling) {
			$polling($site, $server, $post, $json, $time);
		}

		return $json->encode();
	}

	private function invalid(Site $site) {
		$view = new \CL\Site\Views\InvalidPathView($site);
		return $view->whole();
	}

	private function setup(Site $site, Server $server, array $path, $time) {
		if(count($path) < 2) {
			return $this->invalid($site);
		}

		switch($path[1]) {
			case 'tables':
				$view = new \CL\Site\Views\TableMakerView($site, $server, $time);
				return $view->whole();
		}

		return $this->invalid($site);
	}

	/**
	 * Add a polling user.
	 * @param \Closure $closure Function to call
	 *
	 */
	public function addPolling($closure) {
		$this->polling[] = $closure;
	}

	/// Installed top-level routes
	private $routes = [];

	/// Installed polling users
	private $polling = [];
}