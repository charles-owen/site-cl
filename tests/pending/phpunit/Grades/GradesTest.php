<?php
/** @file
 * Unit tests for the class Grades
 * @cond 
 */
require_once __DIR__ . '/../init.php';
require_once __DIR__ . '/cls/GradesDatabaseTestBase.php';

use CL\Course\Member;
use CL\Course\Members;
use CL\Grades\Grades;
use CL\Grades\Grade;
use CL\Course\Test\DummyMember;

class GradesTest extends GradesDatabaseTestBase {
	/**
	 * @return PHPUnit_Extensions_Database_DataSet_IDataSet
	 */
	public function getDataSet() {
		return $this->dataSets(['member.xml', 'user-many.xml', 'grade.xml']);
	}

	public function ensureTables() {
		$this->ensureTable(new Grades($this->site->db));
	}

	public function test_postGrade() {
		$dummy = new DummyMember();
		$user = $dummy->create(12, 22, Member::STUDENT);
		$grader = $dummy->create(99, 10, Member::GRADER);

		$grades = new Grades($this->site->db);

		$grade = $grades->get($user, 'step1', 'task1');
		$this->assertNull($grade->points);
		$this->assertEquals('[]', $grade->meta->json());

		$time1 = time() + 100;

		// A new grade
		$grade->set($grader, 97, '-3 for dumb mistakes', $time1);
		$grades->post($user, $grade);

		$grade1 = $grades->get($user, 'step1', 'task1');
		$this->assertEquals(97, $grade1->points);
		$this->assertEquals('-3 for dumb mistakes', $grade1->comment);
		$this->assertEquals('step1', $grade1->assignTag);
		$this->assertEquals('task1', $grade1->gradeTag);

		$history = $grade1->meta->get('public', Grade::HISTORY, []);
		$this->assertCount(1, $history);
		$h1 = $history[0];
		$this->assertEquals($time1, $h1['time']);

		// Change it again
		$time2 = $time1 + 10101;
		$grade1->set($grader, 98, '-2 now', $time2);
		$grades->post($user, $grade1);

		$grade2 = $grades->get($user, 'step1', 'task1');
		$this->assertEquals(98, $grade2->points);
		$this->assertEquals('-2 now', $grade2->comment);
		$this->assertEquals('step1', $grade2->assignTag);
		$this->assertEquals('task1', $grade2->gradeTag);

		$history = $grade1->meta->get('public', Grade::HISTORY, []);
		$this->assertCount(2, $history);
		$h2 = $history[1];
		$this->assertEquals($time2, $h2['time']);

		// Try a query
		$results = $grades->query(['memberId' => $user->member->id]);
		$this->assertCount(1, $results);

		$results = $grades->query(['memberId' => 10]);
		$this->assertCount(0, $results);

		$results = $grades->query(['semester'=>'fs18', 'section'=>'799']);
		$this->assertCount(1, $results);

		$all = $grades->getUserGrades($user, 'step1');
		$this->assertCount(1, $all);
		$this->assertEquals(98, $all['task1']->points);
	}
}

/// @endcond
