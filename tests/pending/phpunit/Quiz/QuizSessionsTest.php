<?php
/** @file
 * Unit tests for the class QuizSessions
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
use CL\Site\Util\TokenMaker;

class QuizSessionsTest extends QuizDatabaseTestBase {

	/**
	 * @return PHPUnit_Extensions_Database_DataSet_IDataSet
	 */
	public function getDataSet() {
		return $this->dataSets(['quizsession.xml']);
	}

	public function ensureTables() {
		$this->ensureTable(new QuizSessions($this->site->db));
	}

	public function test_create() {
		$dummy = new DummyMember();
		$member87 = $dummy->create(12, 87, Member::STUDENT);

		$sessions = new QuizSessions($this->site->db);

		$quiz = new CL\Quiz\Quiz('step1', 'quiz1', 3);
		$question = new \CL\Quiz\QuizQuestionMulti();

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

		// Make a session for this quiz
		$session = new QuizSession($quiz);


		$token = $session->token;
		$time1 = time() + 101101;
		$sessions->create($member87, 'step1', 'quiz1', $session, $time1);

		$sql = <<<SQL
select * from $sessions->tablename
SQL;

		$ret = $sessions->pdo->query($sql);
		$this->assertCount(1, $ret->fetchAll(PDO::FETCH_ASSOC));

		// Can we get it back?
		$quiz2 = $sessions->get($member87, $token);
		$this->assertEquals(1, $quiz2->quiz->length);
		$this->assertEquals($token, $quiz2->token);

		$sessions->clear($member87, 'step1', 'quiz1');

		$ret = $sessions->pdo->query($sql);
		$this->assertCount(0, $ret->fetchAll(PDO::FETCH_ASSOC));

		$quiz3 = $sessions->get($member87, $token);
		$this->assertNull($quiz3);
	}


}

/// @endcond
