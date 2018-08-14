<?php
/** @file
 * Base class for normal (non-database) tests.
 */

namespace CL\Site\Test;

/**
 * Base class for normal (non-database) database tests.
 *
 * Mainly abstracts away the PHPUnit base class for now.
 */
abstract class TestBase extends \PHPUnit_Framework_TestCase {

	private $dir;

	public function __construct($dir) {
		$this->dir = $dir;
	}
}
