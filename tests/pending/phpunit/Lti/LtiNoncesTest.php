<?php
/** @file
 * Unit tests for the class LtiNonces
 * @cond 
 */

require_once __DIR__ . '/../init.php';
require_once __DIR__ . '/cls/LtiDatabaseTestBase.php';

use CL\Lti\LtiNonces;


class LtiNoncesTest extends LtiDatabaseTestBase {
	/**
	 * @return PHPUnit_Extensions_Database_DataSet_IDataSet
	 */
	public function getDataSet() {
		return $this->dataSets(['lti_nonce.xml']);
	}

	public function ensureTables() {
		$this->ensureTable(new LtiNonces($this->site->db));
	}

	public function test_add() {
		$nonces = new LtiNonces($this->site->db);

		$time = time() + 101;

		$nonce1 = '288f1d3c-1ad9-40bf-aaf3-c7193b2bebc8';
		$nonce2 = '288f1d3c-x1bz-40bf-aaf3-c7193b2bebc8';
		$this->assertTrue($nonces->add(12, $nonce1, $time));
		$this->assertFalse($nonces->add(12, $nonce1, $time));
	}

	public function test_expire() {
		$nonces = new LtiNonces($this->site->db);

		$time = time() + 101;

		$nonce1 = '288f1d3c-1ad9-40bf-aaf3-c7193b2bebc8';
		$nonce2 = '288f1d3c-x1bz-40bf-aaf3-c7193b2bebc8';
		$this->assertTrue($nonces->add(12, $nonce1, $time));
		$this->assertTrue($nonces->add(12, $nonce2, $time));

		$pdo = $this->site->db->pdo;

		$time2 = $time + 30 * 60 + 1;
		$nonces->expire($time2);

		// If the records were removed, we should be able to add them back gain
		$this->assertTrue($nonces->add(12, $nonce1, $time2));
		$this->assertTrue($nonces->add(12, $nonce2, $time2));
	}


}

/// @endcond
