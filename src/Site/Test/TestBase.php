<?php
/** @file
 * Base class for normal (non-database) tests.
 */

namespace CL\Site\Test;

/**
 * Base class for normal (non-database) database tests.
 *
 * Mainly abstracts away the PHPUnit base class for now.
 */
abstract class TestBase extends \PHPUnit\Framework\TestCase {

	private $dir;

	public function __construct($dir) {
		parent::__construct();
		$this->dir = $dir;
	}

	/**
	 * Create a valid Site object, loading the database configuration.
	 *
	 * Override to load additional configurations.
	 * @return \CL\Site\Site
	 * @throws \Exception
	 */
	protected function createSite() {
		$site = new \CL\Site\Site($this->dir);
		$filename = $this->dir . '/site.php';
		if(!file_exists($filename)) {
			throw new \Exception('Database configuration file tests/site.php does not exist.');
		}
		$configure = require($filename);
		if(!is_callable($configure)) {
			throw new \Exception('Database configuration file tests/site.php does not contain a configuration function.');
		}

		$configure($site);
		return $site;
	}
}
