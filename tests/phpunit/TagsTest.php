<?php
/** @file
 * Unit tests for the class Tags
 * @cond 
 */

require_once __DIR__ . '/init.php';

use CL\Site\Util\Tags;

class SiteTest extends \PHPUnit\Framework\TestCase
{
	public function test1() {
		$this->assertSame(true, Tags::validate('abc-_'));
		$this->assertNotSame(true, Tags::validate(''));
		$this->assertNotSame(true, Tags::validate('   '));
		$this->assertNotSame(true, Tags::validate('a/b'));
	}
}

/// @endcond
