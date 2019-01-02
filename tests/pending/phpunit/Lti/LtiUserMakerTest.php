<?php
/** @file
 * Unit tests for the class LaunchRequest
 * @cond 
 */

// Increased error reporting
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);

require_once __DIR__ . '/../../../vendor/autoload.php';
require_once __DIR__ . '/cls/LtiDatabaseTestBase.php';

use CL\Lti\LtiConsumer;
use CL\Lti\LtiUserMaker;
use CL\Lti\LtiUsers;
use CL\Users\Users;
use CL\Course\Members;


class ServerMock extends \CL\Site\System\Server {
	public function __get($property) {
		switch($property) {
			case 'post':
				$post = ['lis_result_sourcedid' => '4ee83042-ea99-428e-9e48-0b39dfd1c9ee',
					'ext_d2l_token_id' => '73373326',
					'ext_d2l_link_id' => '6251',
					'ext_d2l_token_digest' => 'GX7GX70Xl053PXAP/KKiLMIbyUY=',
					'ext_completion_url' => '',
					'launch_presentation_locale' => 'EN-US',
					'tool_consumer_instance_guid' => '',
					'tool_consumer_instance_name' => '',
					'tool_consumer_instance_description' => '',
					'tool_consumer_instance_contact_email' => '',
					'tool_consumer_info_version' => '10.8.1.11281',
					'tool_consumer_info_product_family_code' => 'desire2learn',
					'context_id' => '744563',
					'context_title' => 'Test Course',
					'context_label' => 'DEV-cbowen-2018-TestCourse',
					'context_type' => 'CourseOffering',
					'user_id' => 'MichiganState_11697',
					'roles' => 'urn:lti:instrole:ims/lis/Faculty,Faculty,urn:lti:instrole:ims/lis/Instructor,Instructor',
					'lis_person_name_given' => 'Charles',
					'lis_person_name_family' => 'Owen',
					'lis_person_name_full' => 'Charles Owen',
					'lis_person_contact_email_primary' => 'cbowen@msu.edu',
					'ext_d2l_username' => 'cbowen',
					'ext_d2l_orgdefinedid' => '12ae7fe1-9c6d-102a-aa45-59a83c375d2f',
					'ext_d2l_role' => 'Faculty',
					'ext_d2l_tenantid' => '0c7527d1-0824-4144-af09-95f4c21e160d',
					'ext_tc_profile_url' => 'https://d2l.msu.edu/d2l/api/ext/1.0/lti/tcservices',
					'resource_link_title' => 'LTI Experiment',
					'resource_link_id' => '1820151128',
					'resource_link_description' => '',
					'lis_outcome_service_url' => 'https://d2l.msu.edu/d2l/le/lti/Outcome',
					'lti_version' => 'LTI-1p0',
					'lti_message_type' => 'basic-lti-launch-request',
					'oauth_version' => '1.0',
					'oauth_nonce' => '288f1d3c-1ad9-40bf-aaf3-c7193b2bebc8',
					'oauth_timestamp' => '1529959369',
					'oauth_signature_method' => 'HMAC-SHA1',
					'oauth_consumer_key' => 'lti-experiment',
					'oauth_callback' => 'about:blank',
					'oauth_signature' => 'TAc0rkMUFAw6qj5xN6/D7yi5xO8=',
					'ext_basiclti_submit' => 'Launch Endpoint with BasicLTI Data'];

				return $post;

			case 'server':
				return [
					'REQUEST_METHOD' => 'POST',
					'REQUEST_URI' => '/~cbowen/cirsim-lti/test.php',
					'REQUEST_SCHEME' => 'http',
					'SERVER_NAME' => 'www.cse.msu.edu'
				];
				break;

			case 'session':
				return $this->session;

			default:
				return parent::__get($property);
		}
	}

	public function session_name($name) {
	}

	public function session_start() {
	}

	public function setSession($key, $value) {
		$this->session[$key] = $value;
	}


	private $session = [];
}

class LaunchRequestConfigTest extends LtiDatabaseTestBase {
	/**
	 * @return PHPUnit_Extensions_Database_DataSet_IDataSet
	 */
	public function getDataSet() {
		return $this->dataSets(['lti_user.xml', 'user.xml', 'member-empty.xml']);
	}

	public function ensureTables() {
		$this->ensureTable(new LtiUsers($this->site->db));
		$this->ensureTable(new Users($this->site->db));
		$this->ensureTable(new Members($this->site->db));
	}

	public function test_request() {
		$time = 1529959369 + 100;
		$server = new ServerMock();

		// Create a fake consumer
		$consumer = new LtiConsumer([
			'id'=>23,
			'key'=>'some-assignment-key',
			'lti_version'=>'LTI-1p0',
			'product_version'=>'10.8.1.11281',
			'product_family'=>'desire2learn',
			'created'=>time()
		]);

		// First connect, will create all next records
		$maker =  new LtiUserMaker($this->site, $server, $time);
		$user1 = $maker->findOrMake($consumer, 'lti-experiment', 'FS18', '730');
		$this->assertNotNull($user1);
		$this->assertNotNull($user1->member);

		// Second connect, should return all existing records
		$maker =  new LtiUserMaker($this->site, $server, $time);
		$user2 = $maker->findOrMake($consumer, 'lti-experiment', 'FS18', '730');
		$this->assertNotNull($user2);
		$this->assertEquals($user1->id, $user2->id);
		$this->assertEquals($user1->member->id, $user2->member->id);

		// A connect for an existing user and a different course
		$maker =  new LtiUserMaker($this->site, $server, $time);
		$user3 = $maker->findOrMake($consumer, 'lti-experiment', 'SS19', '730');
		$this->assertNotNull($user3);
		$this->assertEquals($user1->id, $user3->id);
		$this->assertNotEquals($user1->member->id, $user3->member->id);

		// Ensure both records exist in the membership
		$members = new Members($this->site->db);
		$member1 = $members->getBySection($user1->id, 'FS18', '730');
		$this->assertNotNull($member1);
		$this->assertEquals('FS18', $member1->semester);

		$member2 = $members->getBySection($user1->id, 'SS19', '730');
		$this->assertNotNull($member2);
		$this->assertEquals('SS19', $member2->semester);
	}




}

/// @endcond
