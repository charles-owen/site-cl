<?php
/**
 * @file
 * The Site logging component
 */

namespace CL\Site\Logger;

use CL\Site\Site;
// use MySQLHandler\MySQLHandler;

/**
 * The Site logging component
 *
 * FIXME: Logger is disabled because the package wazaari/monolog-mysql was not maintained
 *
 * A new solution will be needed for this.
 *
 * The Site object owns one object of this type that
 * provides the handlers for all loggers.
 */
class SiteLogger {
	/**
	 * SiteLogger constructor.
	 * @param Site $site The site object
	 */
	public function __construct(Site $site) {
		$this->site = $site;

		if($site->db->dbname === null || $site->db->dbname === '') {
			// Database is not configured, so no logging support
			return;
		}

		// Create the logging handler
		$this->handler = new LoggerHandler($site);
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'site':
				return $this->site;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}


	/**
	 * Get a logger for a plugin subsystem.
	 * @param string $pluginName Plugin id we get the logger for
	 * @return Logger logger for the plugin
	 */
	public function get($pluginName) {
		if(isset($this->loggers[$pluginName])) {
			return $this->loggers[$pluginName];
		}

		if($this->handler !== null) {
			$logger = new Logger($this, $pluginName);
			$monoLogger = $logger->getMonologLogger();
			$monoLogger->pushHandler($this->handler);
		} else {
			// Create a dummy logger that does nothing
			$logger = new Logger($this, $pluginName);
		}

		$this->loggers[$pluginName] = $logger;
		return $logger;
	}


	private $handler = null;
	private $loggers = [];
}