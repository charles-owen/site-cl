<?php
/**
 * Simple hashing function class.
 */

namespace CL\Site\Util;

class Hasher {

    private $m = 2147483647;
    private $p = 127;

    private $and = 0xffffff;
    private $p1 = 93719;
    private $a = 21;
    private $b = 37;

    public function hash($str) {
        $h = 0;
        $pProduct = 1;

        for($i=0; $i<strlen($str); $i++) {
            $c = ord($str[$i]);
            $h = ($h + $c * $pProduct) % $this->m;
            $pProduct = ($pProduct * $this->p) % $this->m;
        }

        return $h;
    }

    public function hash2($y) {
        return (($y & $this->and) * $this->a + $this->b) % $this->p1;
    }
}