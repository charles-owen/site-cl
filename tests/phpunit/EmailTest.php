<?php
/** @file
 * Unit tests for the class Email
 * @cond 
 */

require_once __DIR__ . '/init.php';

use CL\Site\Test\DummyEmail;
use CL\Site\Site;


class EmailTest extends \PHPUnit\Framework\TestCase {

	public function test_send() {
		$site = new Site(__DIR__);
		$site->siteName = 'Test Site';

		$email = new DummyEmail();

		$email->send($site, 'bob@wherever.com', 'Bob Minion', 'Test Message', 'Message Body');

		$log = $email->log;

		$this->assertEquals(1, count($log));
		$log0 = $log[0];

		$this->assertContains('bob@wherever.com', $log0['email']);
		$this->assertEquals('Bob Minion', $log0['name']);
		$this->assertContains('Test Message', $log0['subject']);
		$this->assertContains('Message Body', $log0['body']);
	}
	
}

/// @endcond
