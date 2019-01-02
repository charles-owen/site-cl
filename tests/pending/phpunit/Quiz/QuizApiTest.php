<?php
/** @file
 * Unit tests for the class QuizApi
 * @cond 
 */
require_once __DIR__ . '/../init.php';
require_once __DIR__ . '/cls/QuizDatabaseTestBase.php';

use CL\Course\Member;
use CL\Quiz\QuizSessions;
use CL\Quiz\QuizSession;
use CL\Quiz\QuizTries;
use CL\Quiz\QuizAnswers;
use CL\Quiz\Quiz;
use CL\Quiz\QuizApi;
use CL\Course\Test\DummyMember;
use CL\Site\Test\ServerMock;

class QuizApiTest extends QuizDatabaseTestBase {

	/**
	 * @return PHPUnit_Extensions_Database_DataSet_IDataSet
	 */
	public function getDataSet() {
		return $this->dataSets(['quizsession.xml', 'quiztry.xml', 'quizanswer.xml']);
	}

	public function ensureTables() {
		$this->ensureTable(new QuizSessions($this->site->db));
		$this->ensureTable(new QuizTries($this->site->db));
		$this->ensureTable(new QuizAnswers($this->site->db));
	}

	public function test_api() {
		$dummy = new DummyMember();
		$user = $dummy->create(12, 87, Member::STUDENT);
		$this->site->users->user = $user;

		$assignTag = 'step1';
		$section = $this->course->get_section_for($user);
		$assignment = $section->get_assignment($assignTag);
		$time1 = strtotime('8/28/2018 12:00pm');

		$quiz = $this->createQuiz();

		// Make a session for this quiz
		$session = new QuizSession($quiz);
		$session->persist($this->site, $time1);

		$token = $session->token;

		$api = new QuizApi();
		$server = new ServerMock();
		$server->setServer('REQUEST_URI', '/api/quiz/question/' . $token . '/1');
		$server->setServer('REQUEST_METHOD', 'POST');
		$ret = $api->apiDispatch($this->site, $server, ['question', $token, '1'], [], $time1);

		print_r($ret);


//
//
//		$token = $session->token;
//		$time1 = time() + 101101;
//		$sessions->create($member87, 'step1', 'quiz1', $session, $time1);
//
//		$sql = <<<SQL
//select * from $sessions->tablename
//SQL;
//
//		$ret = $sessions->pdo->query($sql);
//		$this->assertCount(1, $ret->fetchAll(PDO::FETCH_ASSOC));
//
//		// Can we get it back?
//		$quiz2 = $sessions->get($token);
//		$this->assertEquals(1, $quiz2->quiz->length);
//
//		$sessions->clear($member87, 'step1', 'quiz1');
//
//		$ret = $sessions->pdo->query($sql);
//		$this->assertCount(0, $ret->fetchAll(PDO::FETCH_ASSOC));
//
//		$quiz3 = $sessions->get($token);
//		$this->assertNull($quiz3);
	}

	private function createQuiz() {
		$quiz = new CL\Quiz\Quiz('step1', 'quiz1', 5);
		$question = new \CL\Quiz\QuizQuestionMulti();
		$question->points = 3;

		$question->text = <<<QUESTION
<p>Of the assignments below, which will predominately focus on programming?</p>
QUESTION;

		$question->comment = <<<COMMENT
<p>Design assignments focus on design and lecture material.</p>
COMMENT;

		$question->bad = "Design Assignments";
		$question->bad = "Exams";
		$question->good = "Step Assignments";
		$quiz->add_question($question);

		$question = new \CL\Quiz\QuizQuestionValue(\CL\Quiz\QuizQuestionValue::Integer);
		$question->points = 2;
		$question->text = <<<QUESTION
<p>What is the answer to everything?</p>
QUESTION;

		$question->answer = 42;
		$quiz->add_question($question);

		return $quiz;
	}

}

/// @endcond
