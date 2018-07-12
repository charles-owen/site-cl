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
		$path = $this->server->parseRequestURI('api');
		if($path === null || count($path) === 0) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		$cmd = $path[0];
		$rest = array_slice($path, 1);

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