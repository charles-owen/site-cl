<?php
/** @file
 * Unit tests for the class Site
 * @cond 
 */

require_once __DIR__ . '/init.php';

use CL\Site\Site;

class SiteTest extends \PHPUnit_Framework_TestCase
{
	public function test1() {
		$site = new Site(__DIR__ . '/..');
		$filename = __DIR__ . '/site.php';
		if(!file_exists($filename)) {
			throw new Exception('Configuration file tests/site.php does not exist.');
		}
		$configure = require($filename);
		if(!is_callable($configure)) {
			throw new Exception('Database configuration file tests/site.php does not contain a configuration function.');
		}

		$configure($site);

		// Can we connect to PDO? (no exception!)
		$pdo = $site->db->pdo;
		$this->assertNotNull($pdo);
	}
}

/// @endcond
