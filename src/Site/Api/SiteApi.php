<?php
/**
 * @file
 * API Resource for /api/site
 */

namespace CL\Site\Api;

use CL\Site\Logger\LoggerTable;
use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\SiteTables;
use CL\Users\User;

/**
 * API Resource for /api/site
 */
class SiteApi extends Resource {
	/// Limit of number of log entries returned
	const LOG_LIMIT = 50;

	/**
	 * ApiUsers constructor.
	 */
	public function __construct() {
		parent::__construct();
	}

	/**
	 * Concrete API resources dispatcher.
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 * @param array $params The path beyond the page that invoked this call
	 * @param array $properties Properties determined from the page options like :id
	 * @param int $time The current time
	 * @return mixed Result of the API operation.
	 * @throws APIException
	 */
	protected function dispatch(Site $site, Server $server, array $params, array $properties, $time) {

		switch($params[0]) {
			case 'logs':
				return $this->logs($site, $server);
				break;

			case 'tables':
				return $this->tables($site, $server, new SiteTables($site->db));
		}

		throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
	}

	private function logs(Site $site, Server $server) {
		if($site->users === null) {
			throw new APIException('Invalid API usage', APIException::INVALID_API_USAGE);
		}

		$user = $site->users->user;
		if(!$user->atLeast($site->users->atLeast('site-log', User::ADMIN))) {
			throw new APIException("Not authorized", APIException::NOT_AUTHORIZED);
		}

		$logger = new LoggerTable($site->db);
		$get = $server->get;
		$params = [];

		$limit = isset($get['limit']) ? +$get['limit'] : self::LOG_LIMIT;
		$params['limit'] = $limit + 1;

		// Copy over only valid keys
		foreach(['id', 'before', 'after', 'channel', 'level', 'name', 'message'] as $key) {
			if(isset($get[$key])) {
				$params[$key] = $get[$key];
			}
		}

		$results = $logger->query($params);

		$more = false;
		if(count($results) > $limit) {
			array_pop($results);
			$more = true;
		}

		$json = new JsonAPI();
		$json->addData('site-log', 0, ['results'=>$results, 'more'=>$more]);
		return $json;
	}
}