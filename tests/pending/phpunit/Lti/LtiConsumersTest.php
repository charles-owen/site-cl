<?php
/** @file
 * Unit tests for the class LtiConsumers
 * @cond 
 */

require_once __DIR__ . '/../init.php';
require_once __DIR__ . '/cls/LtiDatabaseTestBase.php';

use CL\Lti\LtiConsumer;
use CL\Lti\LtiConsumers;


class LtiConsumersTest extends LtiDatabaseTestBase {
	/**
	 * @return PHPUnit_Extensions_Database_DataSet_IDataSet
	 */
	public function getDataSet() {
		return $this->dataSets(['lti_consumer.xml']);
	}

	public function ensureTables() {
		$this->ensureTable(new LtiConsumers($this->site->db));
	}

	public function test_add() {
		$table = new LtiConsumers($this->site->db);

		$time = time() + 101;

		// Should not exist, yet.
		$consumer = $table->get();
		$this->assertNull($consumer);

		$consumer = new LtiConsumer();
		$consumer->ltiVersion = 'LTI-1p0';
		$consumer->productFamily = 'desire2learn';
		$consumer->productVersion = '10.8.1.11281';
		$consumer->created = $time;

		$id = $table->add($consumer);

		$c = $table->get();
		$this->assertNotNull($c);
		$this->assertEquals($id, $c->id);
		$this->assertEquals('LTI-1p0', $c->ltiVersion);
		$this->assertEquals('desire2learn', $c->productFamily);
		$this->assertEquals('10.8.1.11281', $c->productVersion);
		$this->assertEquals( $time, $c->created);

		$consumer->productVersion = '10.8.2.10177';
		$table->update($consumer);

		$c = $table->get();
		$this->assertNotNull($c);
		$this->assertEquals('10.8.2.10177', $c->productVersion);
	}
}

/// @endcond
