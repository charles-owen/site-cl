<?php
/**
 * @file Site configuration object for a general purpose web site
 */

namespace CL\Site;

use CL\Site\Components\InstalledConfig;
use CL\Site\System\Server;
use CL\Site\System\UsersTableMaker;

/**
 * Site configuration object for a general purpose web site
 */
class Site {
	const SESSION_ID = 'CL_SITE_SESSION';

	public function __construct($rootDir) {
		$this->rootDir = $rootDir;

		// Install the database component
		$this->db = new \CL\Tables\Config();

		//
		// Find the 'installed.php' file that
		// contains an array of installed components.
		//
		$installed = $rootDir . '/cl/installed.php';
		if(file_exists($installed)) {
			$this->plugins = require($installed);

			// We install the plugins to the configuration
			// now so they are available for settings.
			foreach($this->plugins as $install) {
				$install->install($this);
			}
		} else {
			$this->plugins = [];
		}
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
		if(isset($this->components[$key])) {
			return $this->components[$key];
		}

		switch($key) {
			case "db":
				return $this->db;

			case 'root':
				return $this->root;

			case "rootDir":
				return $this->rootDir;

			case "appearance":
				return $this->appearance;

			case 'serverData':
				return $this->serverData;

			case 'started':
				return $this->started;

			case 'options':
				return $this->options;

			case 'sandbox':
				return $this->sandbox;

			case 'siteName':
				return $this->siteName;

			case 'cookiePrefix':
				return $this->cookiePrefix;

			case 'jsRoot':
				return $this->jsRoot;

			case 'jsSuffix':
				return $this->jsSuffix;

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
			case 'root':
				$this->root = $value;
				break;

			case 'appearance':
				$this->appearance = $value;
				break;

			case 'sandbox':
				$this->sandbox = $value;
				break;

			case 'siteName':
				$this->siteName = $value;
				break;

			case 'cookiePrefix':
				$this->cookiePrefix = $value;
				break;

			case 'jsRoot':
				$this->jsRoot = $value;
				break;

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

	/**
	 * Start the system
	 * @param Server|null $server Optional dependency injection of Server
	 * @return True if success, false if we redirected.
	 */
	public function start(array $options=[], Server $server = null, $time=null) {
		if($this->started) {
			true;
		}

		if($server === null) {
			$server = new Server();
		}

		if($time === null) {
			$time = time();
		}

		if($this->jsSuffix === null) {
			$this->jsSuffix = $this->sandbox ? '.js' : '.min.js';
		}

		// Save the options
		$this->options = $options;

		$ret = $this->_start($options, $server, $time);
		if($ret !== null) {
			$server->redirect($ret);
			return false;
		}

		return true;
	}

	private function _start(array $options, Server $server = null, $time=null) {
		//
		// Activities that must occur before the system has started.
		//
		foreach($this->preStartup as $plugin) {
			$ret = $plugin($this, $server, $time);
			if($ret !== null) {
				return $ret;
			}
		}

		//
		// Startup activities
		//
		usort($this->startup, function($a, $b) {
			return $a['order'] - $b['order'];
		});

		foreach($this->startup as $plugin) {
			$ret = $plugin['function']($this, $server, $time);
			if($ret !== null) {
				return $ret;
			}
		}

		//
		// Activities that occur after the system has been started
		//
		foreach($this->postStartup as $plugin) {
			$ret = $plugin($this, $server, $time);
			if($ret !== null) {
				return $ret;
			}
		}

		$this->started = true;
		return null;
	}

	/**
	 * @param $component Name of the component
	 * @param InstalledConfig $config
	 */
	public function install($component, InstalledConfig $config) {
		$this->components[$component] = $config;
	}

	/**
	 * Add activities that must occur before the session is started
	 * @param callable $function with parameters: Site $site, Server $server, $time
	 * Must return null or a redirect link.
	 */
	public function addPreStartup($function) {
		$this->preStartup[] = $function;
	}

	/**
	 * Add a function to start the system working.
	 * @param callable $function with parameters: Site $site, Server $server, $time
	 * Must return null or a redirect link.
	 */
	public function addStartup($function, $order) {
		$this->startup[] = ['function'=>$function, 'order'=>$order];
	}

	/**
	 * Activities that occur after the system is started
	 * @param callable $function with parameters: Site $site, Server $server, $time
	 * Must return null or a redirect link.
	 */
	public function addPostStartup($function) {
		$this->postStartup[] = $function;
	}

	/**
	 * Add an API handler
	 * @param callable $function
	 */
	public function addApi($path, $function) {
		$this->api[$path] = $function;
	}

	public function apiDispatch(Site $site, Server $server, $cmd, array $params, $time) {
		if(isset($this->api[$cmd])) {
			return $this->api[$cmd]($site, $server, $params, $time);
		} else {
			return null;
		}
	}



	/// Array of options passed to start
	private $options;

	/// The installed plugins.
	/// A plugin is an object derived from the class Plugin
	/// that adds features to the system.
	private $plugins;

	/// Installed site components
	/// The allows plugins to add to the Site object
	/// with named sub-objects like: $site->course
	private $components = [];

	private $appearance = null; ///< Installed appearance

	private $db;                ///< Database configuration

	private $root = '/';        ///< Site root path
	private $rootDir;           ///< Site root directory
	private $started = false;   ///< Has site been started?

	private $jsRoot = 'cl/dist';   ///< Javascript root directory
	private $jsSuffix = null;   ///< Javascript suffix: .js or .min.js

	private $sandbox = false;   ///< Are we running in a sandbox?

	private $siteName = '';     ///< Name of the site
	private $cookiePrefix = 'site';  ///< Prefix for cookie names



	//
	// The startup phases
	//

	/// Activities that occur before the system is started
	private $preStartup = [];

	/// System startup
	private $startup = [];

	/// Activities after the system is started
	private $postStartup = [];

	/// The API definition.
	/// Components add keys to this key for API functions they handle.
	/// The values are closures that are called when that key is
	/// provided as the command.
	private $api = [];
}