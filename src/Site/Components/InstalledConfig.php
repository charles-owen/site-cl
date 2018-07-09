<?php
/**
 * @file
 * Abstract base class for the installed configuration for a component.
 */

namespace CL\Site\Components;

/**
 * Abstract base class for the installed configuration for a component.
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
		if(isset($this->components[$key])) {
			return $this->components[$key];
		}

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
	 * @param $key Property name
	 * @param $value Value to set
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