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

use CL\Lti\LaunchRequest;
use CL\Lti\LtiNonces;
use CL\Lti\LtiConsumers;


class ServerMock extends \CL\Site\System\Server {
	public function __get($key) {
		switch($key) {
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

			default:
				return parent::__get($key);
		}
	}

	public function session_name($name) {
	}

	public function session_start() {
	}
}

class LaunchRequestConfigTest extends LtiDatabaseTestBase {
	/**
	 * @return PHPUnit_Extensions_Database_DataSet_IDataSet
	 */
	public function getDataSet() {
		return $this->dataSets(['lti_nonce.xml', 'lti_consumer.xml']);
	}

	public function ensureTables() {
		$this->ensureTable(new LtiNonces($this->site->db));
		$this->ensureTable(new LtiConsumers($this->site->db));
	}

	public function test_request() {
		$lr = new LaunchRequest();

		// Basic authentication should succeed
		$server = new ServerMock();
		$this->assertTrue($lr->attempt($this->site, $server, 1529959369+100));

		// Replay attack should fail
		$this->assertFalse($lr->attempt($this->site, $server, 1529959369+100));



		$this->assertFalse($lr->attempt($this->site, $server, 1529959369+301));
	}

	public function xtest_delayed() {
		$lr = new LaunchRequest();

		// Authorization attempt after expiration should fail
		$server = new ServerMock();
		$this->assertFalse($lr->attempt($this->site, $server, 1529959369+301));

	}



}

/// @endcond
