<?php
/**
 * @file
 * The router for the /cl root site path.
 */

namespace CL\Site;

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
			return $this->invalid($site);
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
		}

		// Dispatch the route
		return $this->routeDispatch($site, $server, $path, $time);
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

	/// Installed top-level routes
	private $routes = [];
}