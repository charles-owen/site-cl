<?php
/**
 * @file
 * Install CL/Site components have a plugin class derived from
 * this abstract base class.
 */

namespace CL\Site;

use CL\Site\Site;
use CL\Site\System\Server;


abstract class Plugin {
	/**
	 * Install this component into Site.
	 *
	 * This takes place in the constructor for Site, so
	 * components are available for settings afterwards.
	 *
	 * @param Site $site The site configuration component
	 */
	public function install(Site $site) {}

	/**
	 * A tag that represents this plugin
	 * @return string A tag like 'course', 'users', etc.
	 */
	abstract public function tag();

	/**
	 * Return an array of tags indicating what plugins this one is dependent on.
	 * @return array of tags this plugin is dependent on
	 */
	abstract public function depends();

	/**
	 * Ensure tables exist for a given subsystem.
	 * @param Site $site The site configuration component
	 */
	public function ensureTables(Site $site) {}


	public function amend($object) {

	}

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