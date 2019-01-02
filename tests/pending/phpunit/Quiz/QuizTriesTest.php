<?php
/** @file
 * Unit tests for the class QuizTries
 * @cond 
 */
require_once __DIR__ . '/../init.php';
require_once __DIR__ . '/cls/QuizDatabaseTestBase.php';

use CL\Course\Member;
use CL\Quiz\QuizSession;
use CL\Quiz\Quiz;
use CL\Course\Test\DummyMember;
use CL\Quiz\QuizTries;

class QuizTriesTest extends QuizDatabaseTestBase {

	/**
	 * @return PHPUnit_Extensions_Database_DataSet_IDataSet
	 */
	public function getDataSet() {
		return $this->dataSets(['member.xml', 'quiztry.xml']);
	}

	public function ensureTables() {
		$this->ensureTable(new QuizTries($this->site->db));
	}

	public function test_start() {
		$dummy = new DummyMember();
		$user22 = $dummy->create(12, 22, Member::STUDENT);
		$user35 = $dummy->create(8, 35, Member::STUDENT);

		$quizTries = new QuizTries($this->site->db);
		$time = time() + 10;
		$time1 = $time + 1001;
		$time2 = $time1 + 1234;

		// Create an assignment and session
		$assignTag = 'step1';
		$quizTag = 'quiz1';

		$quiz = new Quiz($assignTag, $quizTag, 3);
		$session = new QuizSession($quiz);

		// Nothing added, yet
		$tries = $quizTries->getTries($user22, $assignTag, $quizTag);
		$this->assertEquals(0, count($tries));

		$best = $quizTries->getBest($user22, $assignTag, $quizTag);
		$this->assertNull($best);

		/*
		 * Add a try
		 */

		$quizTries->start($user22, $session, $time);

		$tries = $quizTries->getTries($user22, $assignTag, $quizTag);
		$this->assertEquals(1, count($tries));

		$try = $tries[0];
		$this->assertEquals($time, $try['start']);
		$this->assertNull($try['end']);
		$this->assertEquals(0, $try['points']);

		// We accept best scores even if not ended
		$best = $quizTries->getBest($user22, $assignTag, $quizTag);
		$this->assertNotNull($best);
		$this->assertEquals(0, $best['points']);

		/*
		 * End
		 */
		$quizTries->end($session->token, $time1);
		$tries = $quizTries->getTries($user22, $assignTag, $quizTag);
		$this->assertEquals(1, count($tries));

		$try = $tries[0];
		$this->assertEquals($time, $try['start']);
		$this->assertEquals($time1, $try['end']);
		$this->assertEquals(0, $try['points']);

		$best = $quizTries->getBest($user22, $assignTag, $quizTag);
		$this->assertNotNull($best);
		$this->assertEquals(0, $best['points']);


		/*
		 * Add another try
		 */
		$session2 = new QuizSession($quiz);
		$quizTries->start($user22, $session2, $time2);

		$tries = $quizTries->getTries($user22, $assignTag, $quizTag);
		$this->assertEquals(2, count($tries));

		$try = $tries[0];
		$this->assertEquals($time2, $try['start']);
		$this->assertEquals(null, $try['end']);
		$this->assertEquals(0, $try['points']);

		$try = $tries[1];
		$this->assertEquals($time, $try['start']);
		$this->assertEquals($time1, $try['end']);
		$this->assertEquals(0, $try['points']);

		/*
		 * Set points
		 */
		$quizTries->setPoints($session->token, 11);
		$tries = $quizTries->getTries($user22, $assignTag, $quizTag);
		$this->assertEquals(2, count($tries));

		$try = $tries[0];
		$this->assertEquals($time2, $try['start']);
		$this->assertEquals(null, $try['end']);
		$this->assertEquals(0, $try['points']);

		$try = $tries[1];
		$this->assertEquals($time, $try['start']);
		$this->assertEquals($time1, $try['end']);
		$this->assertEquals(11, $try['points']);

		$best = $quizTries->getBest($user22, $assignTag, $quizTag);
		$this->assertNotNull($best);
		$this->assertEquals(11, $best['points']);

		$quizTries->setPoints($session2->token, 100);

		$best = $quizTries->getBest($user22, $assignTag, $quizTag);
		$this->assertNotNull($best);
		$this->assertEquals(100, $best['points']);

		$quizTries->end($session2->token, $time1);
		$best = $quizTries->getBest($user22, $assignTag, $quizTag);
		$this->assertNotNull($best);
		$this->assertEquals(100, $best['points']);

		$bigAll = $quizTries->getAllMembersBest($user22->member->semester,
			$user22->member->sectionId, $assignTag);
		$this->assertCount(1, $bigAll);
		$this->assertEquals(100, $bigAll[22]['quiz1']['points']);


		print_r($bigAll);
	}
}

/// @endcond
