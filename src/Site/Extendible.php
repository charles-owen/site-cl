<?php
/**
 * @file
 * Base class for classes that can have function call extensions added.
 */

namespace CL\Site;


/**
 * Base class for classes that can have function call extensions added.
 */
class Extendible {
	/**
	 * Extend this class by adding a new function.
	 * This is used by the Step system to add "add_step"
	 * to the assignment category.
	 * @param string $name Name of the function
	 * @param IExtension $extension Extension to call
	 */
	public function extend($name, $extension) {
		$this->extensions[$name] = $extension;
	}

	/**
	 * __call() is triggered when invoking inaccessible methods in an object context.
	 * @param string $name Name of non-existent function
	 * @param array $arguments Arguments to the function call
	 * @return mixed
	 */
	public function __call($name, $arguments) {
		if (isset($this->extensions[$name])) {
//			echo "<pre>";
//			$trace = debug_backtrace();
//			print_r($trace[0]);
//			echo "</pre>";
			return $this->extensions[$name]->extension($this, $name, $arguments);
		} else {
			$trace = debug_backtrace();
			trigger_error(
				'Fatal error: Call to undefined method CL\Course\Extendible::' .
				$name . '() in ' . $trace[0]['file'] .
				' on line ' . $trace[0]['line'],
				E_USER_NOTICE);
		}
	}

	private $extensions = [];       // Extensions to this object
}