<?php
/** @file
 * Unit tests for the class Rubrics
 * @cond 
 */
require_once __DIR__ . '/../init.php';
require_once __DIR__ . '/cls/GradesDatabaseTestBase.php';

use CL\Course\Member;
use CL\Course\Members;
use CL\Grades\Rubrics;
use CL\Grades\Grade;
use CL\Course\Test\DummyMember;

class RubricsTest extends GradesDatabaseTestBase {
	/**
	 * @return PHPUnit_Extensions_Database_DataSet_IDataSet
	 */
	public function getDataSet() {
		return $this->dataSets(['rubric.xml']);
	}

	public function ensureTables() {
		$this->ensureTable(new Rubrics($this->site->db));
	}

	public function test() {
		$table = new Rubrics($this->site->db);

		$r = $table->get('FS18', '799', 'step1');
		$this->assertCount(0, $r);

		$table->post('FS18', '799', 'step1', 'grade1', 'rubric1');
		$r = $table->get('FS18', '799', 'step1');
		$this->assertCount(1, $r);
	}
}

/// @endcond
