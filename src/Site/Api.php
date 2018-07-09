<?php
/**
 * @file
 * The system application programming interface. Used for all
 * post pages and AJAX calls.
 */

namespace CL\Site;

use CL\Site\Api\APIException;
use CL\Site\System\Server;
use CL\Site\Api\JsonAPI;


/**
 * The system application programming interface. Used for all
 * post pages and AJAX calls.
 *
 * Notice: This is an open page call. Authenticated users are not
 * assumed.
 */
class Api {
	public function __construct(Site $site, Server $server=null) {
		if ($server === null) {
			$server = new Server();
		}

		$this->site = $site;
		$this->server = $server;
	}

	public function dispatch($time = null) {
		if($time == null) {
			$time = time();
		}

		try {
			return $this->internal_dispatch($time);
		} catch(APIException $exception) {
			$json = new JsonAPI();
			$json->addError($exception->getMessage(), $exception->getCode());
			return $json->encode();
		}
	}

	private function internal_dispatch($time) {
		//
		// Parse the input path
		//
		$uri = $this->server->server['REQUEST_URI'];
		$path = explode('/', parse_url($uri, PHP_URL_PATH));

		for($i=0; $i<(count($path) - 1); $i++) {
			if($path[$i] === 'api') {
				$i++;
				break;
			}
		}

		if($i >= count($path) || $path[$i] === '') {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		$cmd = $path[$i];
		$rest = array_slice($path, $i+1);

		//
		// Standard API paths??
		//


		//
		// Handle API paths
		//
		$ret = $this->site->apiDispatch($this->site, $this->server, $cmd, $rest, $time);
		if($ret == null) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		if($ret instanceof JsonAPI) {
			return $ret->encode();
		}

		return $ret;
	}

	private $site;      ///< The Site object
	private $server;    ///< The Server object
}