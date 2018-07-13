<?php
/**
 * @file
 * Base class for API resources
 */

namespace CL\Site\Api;

use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Api\JsonAPI;
use CL\Site\Api\APIException;

/**
 * Base class for API resources
 *
 * This is a base class for API resources.
 */
abstract class Resource {

	public function __construct() {
	}

	public function apiDispatch(Site $site, Server $server, array $path, array $properties, $time) {
		$site->start(['open']);

		try {
			return $this->internal_dispatch($site, $server, $path, $properties, $time);
		} catch(APIException $exception) {
			$json = new JsonAPI();
			$json->addError($exception->getMessage(), $exception->getCode());
			return $json->encode();
		}
	}

	private function internal_dispatch(Site $site, Server $server, array $path, array $properties, $time) {
		//
		// Handle API paths
		//
		$ret = $this->dispatch($site, $server, $path, $properties, $time);
		if($ret == null) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		if($ret instanceof JsonAPI) {
			return $ret->encode();
		}

		return $ret;
	}

	protected abstract function dispatch(Site $site, Server $server, array $path, array $properties, $time);

	protected static function sanitize($value) {
		return trim(strip_tags($value));
	}
}