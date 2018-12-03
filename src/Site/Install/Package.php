<?php
/**
 * @file
 * Represents a package we can install during the site install process.
 */

namespace CL\Site\Install;

/**
 * Represents a package we can install during the site install process.
 */
class Package {

	/**
	 * Package constructor.
	 * @param string $plugin Plugin to add to installed.php or null if none.
	 * @param string $dist Directory containing files to copy into /cl/dist
	 * @param string $cl Directory containing files to copy into /cl
	 */
	public function __construct(string $plugin=null, $dist=null, $cl=null) {
		$this->installed = $plugin;
		$this->dist = $dist;
		$this->cl = $cl;
	}


	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'dist':
				return $this->dist;

			case 'name':
				return $this->name;

			case 'path':
				return $this->path;

			case 'installed':
				return $this->installed;

			case 'cl':
				return $this->cl;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'name':
				$this->name = $value;
				break;

			case 'path':
				$this->path = $value;
				break;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}
	}

	/**
	 * Allow local version of the installer to do custom configurations.
	 * @param string $rootDir Path to the root directory of the site.
	 */
	public function custom($rootDir) {
	}


	private $name = null;
	private $path = null;
	private $installed;
	private $dist;
	private $cl;
}