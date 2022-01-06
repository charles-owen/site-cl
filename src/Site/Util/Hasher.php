<?php
/**
 * Simple hashing function class.
 */

namespace CL\Site\Util;

class Hasher {

    const m = 2147483647;
    const p = 127;

    public static function hash($str) {
        $h = 0;
        $pProduct = 1;

        for($i=0; $i<strlen($str); $i++) {
            $c = ord($str[$i]);
            $h = ($h + $c * $pProduct) % Hasher::m;
            $pProduct = ($pProduct * Hasher::p) % Hasher::m;
        }

        return $h;
    }
}