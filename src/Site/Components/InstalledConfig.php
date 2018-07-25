<?php
/**
 * @file
 * Abstract base class for the installed configuration for a component.
 */

namespace CL\Site\Components;

/**
 * Abstract base class for the installed configuration for a component.
 *
 * Derived classes can be added to the Site object using the install function
 * like this:
 *
 * \code
 * $site->install('course', new Course($site));
 * \endcode
 *
 * They are then accessible like this:
 * $site->course
 */
abstract class InstalledConfig {
	/**
	 * Property get magic method
	 * @param string $key Property name
	 *
	 * Properties supported:
	 * rootDir - Site root directory
	 *
	 * @return null|string
	 */
	public function __get($key) {
		switch($key) {
			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $key .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}

	/**
	 * Property set magic method
	 * @param string $key Property name
	 * @param mixed $value Value to set
	 */
	public function __set($key, $value) {
		switch($key) {
			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $key .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}

	}
}