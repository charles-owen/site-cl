<?php
/**
 * @file
 * Table maker for site tables
 */

namespace CL\Site;

use CL\Tables\Config;

/**
 * Table maker for Site subsystem tables
 */
class SiteTables extends \CL\Tables\TableMaker {
	/**
	 * UserTables constructor.
	 * @param Config $config
	 */
	public function __construct(Config $config) {
		parent::__construct($config);

		$this->add(new \CL\Site\Logger\LoggerTable($config));
	}
}