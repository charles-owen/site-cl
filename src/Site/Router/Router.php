<?php
/**
 * @file
 * Router for PHP pages.
 */

namespace CL\Site\Router;

use CL\Site\Site;
use CL\Site\System\Server;



/**
 * Class Router
 */
class Router {

	public function __construct(Site $site, Server $server=null) {
		$this->site = $site;

		if ($server === null) {
			$server = new Server();
		}

		$this->path = $server->parseRequestURI('filesystem');
	}

	public function add($path, $viewMaker) {
		$this->routes[] = [
			'path' => $path,
			'viewMaker' => $viewMaker
		];
	}

	public function go() {
		if($this->path === null) {
			return new InvalidPathView($this->site);
		}

		$pathCnt = count($this->path);

		foreach($this->routes as $route) {
			$path = explode('/', $route['path']);
			if(count($path) !== $pathCnt) {
				continue;
			}

			// See if they match
			$vars = [];
			for($i=0; $i<$pathCnt; $i++) {
				$actual = $this->path[$i];
				$pattern = $path[$i];
				if(substr($pattern, 0, 1) === ':') {
					$vars[substr($pattern, 1)] = $actual;
				} else {
					if($actual !== $pattern) {
						break;   // Not a match
					}
				}
			}

			if($i >= $pathCnt) {
				// We found it.
				$function = $route['viewMaker'];
				return $function($vars);
			}
		}

		return new InvalidPathView($this->site);
	}

	private $site;
	private $path;

	private $routes = [];
}