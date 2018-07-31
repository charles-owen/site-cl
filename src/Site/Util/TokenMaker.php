<?php
/**
 * @file
 * Create random tokens to use as keys or for authentication
 */

namespace CL\Site\Util;

/**
 * Create random tokens to use as keys or for authentication
 */
class TokenMaker {
	/**
	 * Generate a random string of characters to use as an ID or token or salt
	 * @param int $len Length to generate, default is 32
	 * @returns string Validator
	 */
	public static function make($len = 32) {
		$bytes = openssl_random_pseudo_bytes($len / 2);
		return bin2hex($bytes);
	}
}