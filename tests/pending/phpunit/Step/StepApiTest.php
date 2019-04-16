<?php
/** @file
 * Unit tests for the class ApiMembers
 * @cond 
 */

require_once __DIR__ . '/../init.php';
require_once __DIR__ . '/cls/StepDatabaseTestBase.php';

use CL\Site\Test\ServerMock;
use CL\Course\Member;
use CL\Course\Members;
use CL\Users\Users;
use CL\Course\Api\ApiMembers;
use CL\Course\SectionStatus;
use CL\Step\StepApi;

class StepApiTest extends StepDatabaseTestBase {
	/**
	 * @return PHPUnit_Extensions_Database_DataSet_IDataSet
	 */
	public function getDataSet() {
		return $this->dataSets(['user-many.xml', 'member.xml', 'sectionstatus.xml']);
	}

	public function ensureTables() {
		$this->ensureTable(new Members($this->site->db));
		$this->ensureTable(new Users($this->site->db));
		$this->ensureTable(new SectionStatus($this->site->db));
	}

	public function test_delete() {

		$server = new ServerMock();
		$api = new StepApi();

		$members = new Members($this->site->db);
		$member22 = $members->getAsUser(22);
		$this->assertNotNull($member22);

		$this->site->users->user = $member22;

		$sectionStatus = new SectionStatus($this->site->db);
		$current = $sectionStatus->get($member22, 'step1', 'initial');
		$this->assertEquals(SectionStatus::NOTVISITED, $current['status']);

		$server->setServer('REQUEST_URI', '/api/step/status/step1/initial');
		$server->setPost('status', SectionStatus::VISITED);
		$time = time() + 1111;
		$ret = $api->apiDispatch($this->site, $server, ['status', 'step1', 'initial'],
			[], $time);
		$this->assertNotContains('error', $ret);

		$current = $sectionStatus->get($member22, 'step1', 'initial');
		$this->assertEquals(SectionStatus::VISITED, $current['status']);

		$time2 = $time + 11118;
		$server->setPost('status', SectionStatus::DONE);
		$ret = $api->apiDispatch($this->site, $server, ['status', 'step1', 'initial'],
			[], $time2);


		$current = $sectionStatus->get($member22, 'step1', 'initial');
		$this->assertEquals(SectionStatus::DONE, $current['status']);
	}



}

/// @endcond
