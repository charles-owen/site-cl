<?php
/**
 * @file
 * Install CL/Site components have a plugin class derived from
 * this abstract base class.
 */

namespace CL\Site\Components;

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
	abstract public function install(Site $site);

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
}