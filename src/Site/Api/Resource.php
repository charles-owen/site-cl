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
use CL\Tables\TableMaker;

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
	 * @param int $time The current time
	 * @return mixed Result of the API operation.
	 */
	public function apiDispatch(Site $site, Server $server, array $path, array $properties, $time) {
		$site->start(['open'=>true]);

		try {
			return $this->internal_dispatch($site, $server, $path, $properties, $time);
		} catch(APIException $exception) {
			$json = new JsonAPI();
			$json->addError($exception->getMessage(), $exception->getCode());
			$enc = $json->encode();
			if($enc === '[]') {
				return '{}';
			}
			return $enc;
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
			$enc = $ret->encode();
			if($enc === '[]') {
				// PHP always thinks of JSON as an array, so switch
				// the empty case to be the standard empty object.
				return '{}';
			}
			return $enc;
		}

		return $ret;
	}

	/**
	 * Concrete API resources implement this function to handle an actual router dispatch.
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 * @param array $path The path beyond the page that invoked this call
	 * @param array $properties Properties determined from the page options like :id
	 * @param int $time The current time
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

    /**
     * The target for /tables API calls. Provides for the creation and optional dropping of tables.
     *
     * Since most subsystems have some tables, all that is needed is a tablemaker class
     * with each table specified in it and this dispatching in the API resource:
     *
     * \code
     * 			case 'tables':
     *              return $this->tables($site, $server, new UserTables($site->db));
     * \endcode
     *
     * This API call will only work if the Console and Users subsystems are installed.
     *
     * @param Site $site The Site object
     * @param Server $server The Server object
     * @param TableMaker $maker A table maker object for a subsystem.
     * @return JsonAPI On success an empty message is returned.
     * @throws APIException Thrown if not authorized or there is a database error.
     */
    protected function tables(Site $site, Server $server, TableMaker $maker) {
        $user = $site->users->user;
        if($user === null || !$user->atLeast(\CL\Users\User::ADMIN)) {
            throw new APIException("Not authorized", APIException::NOT_AUTHORIZED);
        }

        $post = $server->post;
        if(!empty($post['clean']) && $post['clean'] === 'yes') {
            $json = new JsonAPI();
            $json->addData('table-clean', 0, $maker->clean());
            return $json;
        }

        if(!isset($post['drop'])) {
            throw new APIException("Invalid API Usage", APIException::INVALID_API_USAGE);
        }

        $drop = $post['drop'] === 'yes';

        if(!$maker->create($drop)) {
            throw new APIException("Table creation failed", APIException::UNABLE_TO_WRITE_DATABASE);
        }

        return new JsonAPI();
    }
}