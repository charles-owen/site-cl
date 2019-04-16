<?php
/**
 * @file
 * Tags validity testing
 */

namespace CL\Site\Util;

/**
 * Tags validity testing
 */
class Tags {
	/// Maximum length allowed for a tag
	const MAX_LENGTH = 32;

	/**
	 * Validate a tag.
	 * @param string $tag
	 * @return true|string if valid or string if invalid.
	 */
	public static function validate($tag) {
		if(trim($tag) === '') {
			return 'Tag must be non-empty.';
		}

		if(strlen($tag) > self::MAX_LENGTH) {
			return 'Tag is too long. Tags can be no longer than ' . self::MAX_LENGTH . ' characters.';
		}

		$re = '/^[a-zA-Z0-9\-_]*$/';
		if(preg_match($re, $tag) !== 1) {
			return 'Tags are case sensitive and consist of the letters a-z, 0-9, -, and _. Tags cannot have spaces in them.';
		}

		return true;
	}
}