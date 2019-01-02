<?php
/** @file
 * Unit tests for the class QuizAnswers
 * @cond 
 */
require_once __DIR__ . '/../init.php';
require_once __DIR__ . '/cls/QuizDatabaseTestBase.php';

use CL\Users\Users;
use CL\Course\Member;
use CL\Quiz\QuizSessions;
use CL\Quiz\QuizSession;
use CL\Quiz\Quiz;
use CL\Course\Test\DummyMember;
use CL\Quiz\QuizAnswers;

class QuizAnswersTest extends QuizDatabaseTestBase {

	/**
	 * @return PHPUnit_Extensions_Database_DataSet_IDataSet
	 */
	public function getDataSet() {
		return $this->dataSets(['quizanswer.xml']);
	}

	public function ensureTables() {
		$this->ensureTable(new QuizAnswers($this->site->db));
	}

	/**
	 * Tests: start, answer, getPoints
	 */
	public function test_start() {
		$qa = new QuizAnswers($this->site->db);

		// Create an assignment and session
		$assignTag = 'step1';
		$quizTag = 'quiz1';

		$quiz = new Quiz($assignTag, $quizTag, 3);
		$session = new QuizSession($quiz);
		$token = $session->token;

		$time1 = time() + 123;
		$time2 = $time1 + 100;

		$c = $qa->getPoints($token);
		$this->assertEquals(0, $c);

		$qa->answer($token, 1, $time1,"question", $time2,
			"student answer", "right answer", 3);

		$c = $qa->getPoints($token);
		$this->assertEquals(3, $c);

		$answers = $qa->getAnswers($token);
		$this->assertCount(1, $answers);

		$qa->answer($token, 2, $time1,"question", $time2,
			"student answer", "right answer", 1);

		$c = $qa->getPoints($token);
		$this->assertEquals(4, $c);

		$qa->answer($token, 3, $time1,"question", $time2,
			"student answer", "right answer", 1);

		$c = $qa->getPoints($token);
		$this->assertEquals(5, $c);

		// Duplicate for question number 3, should return false
		$this->assertFalse($qa->answer($token, 3, $time1,"question", $time2,
			"student answer", "right answer", 5));

		$this->assertTrue($qa->answer($token, 4, $time1,"question", $time2,
			"student answer", "right answer", 5));

		$c = $qa->getPoints($token);
		$this->assertEquals(10, $c);

		$answers = $qa->getAnswers($token);
		$this->assertCount(4, $answers);
	}

}

/// @endcond
