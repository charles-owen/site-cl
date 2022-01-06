<?php
require_once __DIR__ . '/init.php';

use CL\Site\Util\Hasher;


class HasherTest extends \PHPUnit\Framework\TestCase {
    public function test1() {
        $this->assertEquals(597624669, Hasher::hash("student-1.0.3"));
        $this->assertEquals(1452291392, Hasher::hash("student-1.0.1"));
        $this->assertEquals(674232713, Hasher::hash("cbowen-1.0.3"));

    }
}