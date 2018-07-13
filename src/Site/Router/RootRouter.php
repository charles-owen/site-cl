<?php
/**
 * @file
 * The router for the /cl root site path.
 */

namespace CL\Site\Router;

use CL\Site\Site;
use CL\Site\System\Server;

/**
 * The router for the /cl root site path.
 */
class RootRouter {

	/**
	 * Dispatch to the correct route.
	 * @param Site $site
	 * @param Server $server
	 * @param $time
	 * @return string Page response
	 */
	public function dispatch(Site $site, Server $server, $time) {
		// Determine the URI path, everything after /cl
		$path = $server->parseRequestURI('cl');
		if($path === null || empty($path)) {
			$view = new \CL\Site\Views\InvalidPathView($site);
			return $view->whole();
		}

		//
		// Standard paths
		//
		switch($path[0]) {
			case 'notauthorized':
				$view = new \CL\Site\Views\NotAuthorizedView($site, $server, $path);
				return $view->whole();
		}

		// Dispatch the route
		return $site->routeDispatch($site, $server, $path, $time);
	}
}