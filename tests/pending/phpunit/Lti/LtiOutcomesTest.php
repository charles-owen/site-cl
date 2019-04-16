<?php
/** @file
 * Unit tests for the class LtiNonces
 * @cond 
 */

require_once __DIR__ . '/../init.php';
require_once __DIR__ . '/cls/LtiDatabaseTestBase.php';

use CL\Lti\LtiOutcomes;
use CL\Course\Members;
use CL\Users\Users;


class LtiOutcomesTest extends LtiDatabaseTestBase {
	/**
	 * @return PHPUnit_Extensions_Database_DataSet_IDataSet
	 */
	public function getDataSet() {
		return $this->dataSets(['lti_outcome.xml', 'user-many.xml', 'member.xml']);
	}

	public function ensureTables() {
		$this->ensureTable(new LtiOutcomes($this->site->db));
		$this->ensureTable(new Users($this->site->db));
		$this->ensureTable(new Members($this->site->db));
	}

	public function test() {
		$members = new Members($this->site->db);
		$user = $members->getAsUser(22);

		$time1 = time() + 10101;

		$outcomes = new LtiOutcomes($this->site->db);

		// First saving
		$ret1 = $outcomes->getOrMake($user, 'lti_assign1', 'assign1', 'task1', '5ar7ez6odu',
			'4ee83042-ea99-428e-9e48-0b39dfd1c9ee', 'https://d2l.msu.edu/d2l/le/lti/Outcome', $time1);
		$this->assertNotNull($ret1);
		$this->assertEquals($time1, $ret1['modified']);

		$time2 = $time1 + 1013;

		// Second saving with no changes should not modify
		$ret2 = $outcomes->getOrMake($user, 'lti_assign1', 'assign1', 'task1', '5ar7ez6odu',
			'4ee83042-ea99-428e-9e48-0b39dfd1c9ee', 'https://d2l.msu.edu/d2l/le/lti/Outcome', $time2);
		$this->assertEquals($time1, $ret2['modified']);

		$time3 = $time2 + 123;

		// Saved with modified lis_result_sourcedid
		$ret3 = $outcomes->getOrMake($user, 'lti_assign1', 'assign1', 'task1', '5ar7ez6odu',
			'4ee83042-ea99-428e-9e48-0b39dfd1c900', 'https://d2l.msu.edu/d2l/le/lti/Outcome', $time3);

		$this->assertEquals('5ar7ez6odu', $ret3['token']);
		$this->assertEquals($time1, $ret3['created']);
		$this->assertEquals($time3, $ret3['modified']);

		$ret4 = $outcomes->get($user,'assign1', 'task1' );
		$this->assertEquals($time1, $ret4['created']);
		$this->assertEquals($time3, $ret4['modified']);

		// Saved with no grade token
		$ret3 = $outcomes->getOrMake($user, 'lti_assign1', 'assign1', 'task1', null,
			'4ee83042-ea99-428e-9e48-0b39dfd1c900', 'https://d2l.msu.edu/d2l/le/lti/Outcome', $time3);

		$ret5 = $outcomes->get($user,'assign1', 'task1' );
		$this->assertNull($ret5['token']);
	}

	public function test_query() {
		$members = new Members($this->site->db);
		$user = $members->getAsUser(22);

		$outcomes = new LtiOutcomes($this->site->db);
		$time1 = time() + 10101;

		// First saving
		$ret1 = $outcomes->getOrMake($user, 'lti_assign1', 'assign1', 'task1', '5ar7ez6odu',
			'4ee83042-ea99-428e-9e48-0b39dfd1c9ee', 'https://d2l.msu.edu/d2l/le/lti/Outcome', $time1);
		$this->assertNotNull($ret1);
		$this->assertEquals($time1, $ret1['modified']);

		$time1 = time() + 10101;

		$ret = $outcomes->query([
			'memberId' => $user->member->id
		]);

		$this->assertCount(1, $ret);
		$this->assertNull($ret[0]['type']);
		$this->assertNull($ret[0]['grade']);

		$time2 = $time1 + 145;
		$outcomes->setGrade($user, 'assign1', 'task1', 53, 'test', 'text/plain', $time2);

		$ret = $outcomes->query([
			'memberId' => $user->member->id
		]);
		$this->assertEquals('text/plain', $ret[0]['type']);
		$this->assertEquals(53, $ret[0]['grade']);
	}


}

/// @endcond
