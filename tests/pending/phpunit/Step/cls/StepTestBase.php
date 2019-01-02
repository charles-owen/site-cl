<?php
/** @file
 * Base class for normal tests.
 */

require_once __DIR__ . '/../../cls/TestBase.php';

use CL\Course\Course;


/**
 * Base class for normal (non-database) tests.
 *
 * Adds creation of loaded Site and Course objects.
 */
abstract class StepTestBase extends TestBase {

	public function __construct() {
		parent::__construct(__DIR__ . '/..');
	}

	protected function createSite() {
		$site = parent::createSite();

		//
		// Create and load the course object
		//
		$course = new Course($site);
		$this->course = $course;

		$installer = $site->rootDir . '/course/course.inc.php';
		if(file_exists($installer)) {
			$function = require($installer);
			$function($course);
		} else {
			throw new Exception('Course configuration file course/course.inc.php does not exist.');
		}

		// Set it in the configuration
		$site->install('course', $course);
		return $site;
	}

	protected $course;

}
