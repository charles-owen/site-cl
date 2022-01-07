<?php
require_once __DIR__ . '/init.php';

use CL\Site\Util\Hasher;


class HasherTest extends \PHPUnit\Framework\TestCase {
    public function test1() {
        $hasher = new Hasher();
        $this->assertEquals(597624669, $hasher->hash("student-1.0.3"));
        $this->assertEquals(1452291392, $hasher->hash("student-1.0.1"));
        $this->assertEquals(674232713, $hasher->hash("cbowen-1.0.3"));

        $this->assertEquals(47394, $hasher->hash2(674232713));
        $this->assertEquals(30461, $hasher->hash2(597624669));
        $this->assertEquals(64050, $hasher->hash2(1452291392));
    }
}