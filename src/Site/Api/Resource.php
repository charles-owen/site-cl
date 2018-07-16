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

	/**
	 * Resource constructor.
	 */
	public function __construct() {
	}

	/**
	 * Top-level dispatching by the API. This is called by the router for an API call
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 * @param array $path The path beyond the page that invoked this call
	 * @param array $properties Properties determined from the page options like :id
	 * @param $time The crurent time
	 * @return mixed Result of the API operation.
	 */
	public function apiDispatch(Site $site, Server $server, array $path, array $properties, $time) {
		$site->start(['open'=>true]);

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

	/**
	 * Concrete API resources implement this function to handle an actual router dispatch.
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 * @param array $path The path beyond the page that invoked this call
	 * @param array $properties Properties determined from the page options like :id
	 * @param $time The crurent time
	 * @return mixed Result of the API operation.
	 */
	protected abstract function dispatch(Site $site, Server $server, array $path, array $properties, $time);

	/**
	 * Basic sanitization of values. Does a strip_tags and a trim.
	 * @param string $value Value to be sanitized
	 * @return string Sanitized result.
	 */
	protected static function sanitize($value) {
		return trim(strip_tags($value));
	}
}