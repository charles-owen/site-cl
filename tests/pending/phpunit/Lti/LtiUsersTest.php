<?php
/** @file
 * Unit tests for the class LtiUsers
 * @cond
 */

// Increased error reporting
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);

require_once __DIR__ . '/../../../vendor/autoload.php';
require_once __DIR__ . '/cls/LtiDatabaseTestBase.php';

use CL\Course\Members;
use CL\Lti\LtiUsers;


class LtiUsersTest extends LtiDatabaseTestBase {
	/**
	 * @return PHPUnit_Extensions_Database_DataSet_IDataSet
	 */
	public function getDataSet() {
		return $this->dataSets(['user-many.xml', 'member.xml', 'lti_user.xml']);
	}

	public function ensureTables() {
		$this->ensureTable(new LtiUsers($this->site->db));
	}

	public function test_add() {
		$members = new Members($this->site->db);
		$user = $members->getAsUser(22);

		$ltiUsers = new LtiUsers($this->site->db);

		$time = time() + 101;

		$ltiConsumerId = 962;
		$ltiUserId = 'MichiganState_98765';
		$role = 'urn:lti:instrole:ims/lis/Faculty,Faculty,urn:lti:instrole:ims/lis/Instructor,Instructor';
		$ltiUsers->add($user, $ltiConsumerId, $ltiUserId, $role, $time);

		$user1 = $ltiUsers->get($ltiConsumerId, $ltiUserId, $user->member->semester, $user->member->sectionId);
		$this->assertEquals($user->id, $user1->id);
		$this->assertEquals($user->member->id, $user1->member->id);
	}

}

/// @endcond
