<?php
/**
 * @file
 * Master configuration object for a general purpose web site
 */

/// Classes in the Site (core) subsystem
namespace CL\Site;

use CL\Site\Logger\SiteLogger;
use CL\Site\Logger\Logger;
use CL\Site\System\Server;
use CL\Site\Util\TopologicalSort;
use CL\Tables\Config;
use \Exception;


/**
 * Site configuration object for a general purpose web site.
 *
 * Every site will have one instance of this object instantiated
 * for each access. It is where all of the site configuration is
 * defined.
 *
 * Normally a single instance of this object is created in the
 * root directory of the site in a file site.php that will begin like this:
 *
 * \code
 * require __DIR__ . '/vendor/autoload.php';
 * $site = new CL\Site\Site(__DIR__);
 * \endcode
 *
 *
 * @cond
 * @property Appearance appearance
 * @property string config
 * @property string cookiePrefix
 * @property Config db
 * @property string decor
 * @property string img
 * @property string jsSuffix
 * @property string jsRoot
 * @property array options
 * @property array plugins
 * @property string root
 * @property string rootDir
 * @property bool sandbox
 * @property string server
 * @property string siteName
 * @property bool started
 *
 * There are cheating a bit to help with the type hinting
 * @property \CL\Course\Course course
 * @property \CL\Users\UsersPlugin users
 *
 * @endcond
 */
class Site {
	/**
	 * Site constructor.
	 *
	 * If $rootDir is supplied, the directory $rootDir/cl will be checked
	 * for a file installed.php that will instantiate the site plugins.
	 *
	 * @param string $rootDir Root directory for the site.
	 */
	public function __construct($rootDir = null) {
		$this->rootDir = $rootDir;

		// Install the database component
		$this->db = new Config();

		if($rootDir !== null) {
			//
			// Find the 'installed.php' file that
			// contains an array of installed components.
			//
			$installed = $rootDir . '/cl/installed.php';
			if(file_exists($installed)) {
				$plugins = require($installed);

				// Collect into two arrays by plugin tag.
				$pluginsByName = [];
				$pluginsDeps = [];
				foreach($plugins as $plugin) {
					$tag = $plugin->tag();
					$pluginsByName[$tag] = $plugin;
					$pluginsDeps[$tag] = $plugin->depends();
				}

				// Topological sort the list and save in that order
				try {
					$pluginsOrder = TopologicalSort::sort($pluginsDeps);
				} catch(Exception $ex) {
					echo $ex->getMessage();
					exit;
				}

				// We install the plugins in order into the configuration
				// now so they are available for settings.
				foreach($pluginsOrder as $tag) {
					$plugin = $pluginsByName[$tag];
					$this->plugins[] = $plugin;
					$plugin->install($this);
				}
			}
		}

		if(isset($_SERVER['HTTP_HOST'])) {
			$this->server = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'];
		}
	}

	/**
	 * Property get magic method
	 * @param string $key Property name
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * appearance | Appearance | Installed site appearance object
	 * config | string | Configuration file directory relative to root (default is 'site')
	 * cookiePrefix | A prefix to attach to all cookie names (to ensure uniqueness)
	 * db | \\CL\\Tables\\Config | Database configuration object
	 * decor | string | Directory where decoration files are stored (default='site')
	 * img | string | Gets path to /cl/img directory
	 * jsRoot | string | The root directory for the site Javascript (default is cl/dist
	 * jsSuffix | string | Suffix to append to base Javascript (default is .min.js or .js (sandbox)
	 * logger | SiteLogger | The site logging object
	 * options | array | Options passed to the start function.
	 * plugins | array | Collection of installed plugins
	 * root | string | %Site root path
	 * rootDir | string | %Site root directory
	 * sandbox | boolean | True if running in the sandbox
	 * server | string | Server URL, like 'https://www.server.edu'
	 * siteName | A name for the website.
	 * started | boolean | True if the system has been started
	 *
	 * @return mixed
	 */
	public function __get($key) {
		if(isset($this->components[$key])) {
			return $this->components[$key];
		}

		switch($key) {
			case "appearance":
				return $this->appearance;

			case 'config':
				return $this->config;

			case 'cookiePrefix':
				return $this->cookiePrefix;

			case "db":
				return $this->db;

			case "decor":
				return $this->decor;

			case 'img':
				return $this->root . '/vendor/cl/site/img';

			case 'jsRoot':
				return $this->jsRoot;

			case 'jsSuffix':
				return $this->jsSuffix;

			case 'options':
				return $this->options;

			case 'plugins':
				return $this->plugins;

			case 'root':
				return $this->root;

			case "rootDir":
				return $this->rootDir;

			case 'sandbox':
				return $this->sandbox;

			case 'server':
				return $this->server;

			case 'siteName':
				return $this->siteName;

			case 'started':
				return $this->started;

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
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * appearance | Appearance | Installed site appearance object
	 * config | string | Configuration file directory relative to root (default is 'site')
	 * cookiePrefix | A prefix to attach to all cookie names (to ensure uniqueness)
	 * decor | string | Directory where decoration files are stored (default='site')
	 * jsRoot | The root directory for the site Javascript (default is cl/dist
	 * jsSuffix | Suffix to append to base Javascript (default is .min.js or .js (sandbox)
	 * root | string | %Site root path
	 * sandbox | boolean | True if running in the sandbox
	 * server | string | Server URL, like 'https://www.server.edu'
	 * siteName | A name for the website.
	 *
	 * @param string $key Property name
	 * @param string $value Value to set
	 */
	public function __set($key, $value) {
		switch($key) {
			case 'appearance':
				$this->appearance = $value;
				break;

			case 'config':
				$this->config = $value;
				break;

			case 'cookiePrefix':
				$this->cookiePrefix = $value;
				break;

			case 'decor':
				$this->decor = $value;
				break;

			case 'jsRoot':
				$this->jsRoot = $value;
				break;

			case 'jsSuffix':
				$this->jsSuffix = $value;
				break;

			case 'root':
				$this->root = $value;
				break;

			case 'sandbox':
				$this->sandbox = $value;
				break;

			case 'server':
				$this->server = $value;
				break;

			case 'siteName':
				$this->siteName = $value;
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
	 * @param array $options Options for system operation
	 * @param Server|null $server Optional dependency injection of Server
	 * @param int $time Optional dependency injection of the current time
	 * @return boolean true on success, false if we redirected.
	 */
	public function start(array $options=[], Server $server = null, $time=null) {
		if($this->started) {
			// Already started
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

	/**
	 * Actual system startup
	 * @param array $options Supplied startup options
	 * @param Server $server Server component
	 * @param int $time Current time
	 * @return null|string Returns a redirect address if redirect is necessary.
	 */
	private function _start(array $options, Server $server, $time) {
		//
		// Configure the logger
		//
		$this->siteLogger = new SiteLogger($this);

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
		foreach($this->startup as $plugin) {
			$ret = $plugin($this, $server, $time);
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
	 * @param string $component Name of the component
	 * @param Plugin $plugin
	 */
	public function install($component, Plugin $plugin) {
		$this->components[$component] = $plugin;
	}

	/**
	 * Determine if a plugin component is installed.
	 * @param string $component Component tag (like 'grades')
	 * @return bool True if component is installed
	 */
	public function installed($component) {
		return isset($this->components[$component]);
	}

	/**
	 * Add activities that must occur before system is started
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
	public function addStartup($function) {
		$this->startup[] = $function;
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
	 * Export data suitable for sending to runtime client
	 * @return array Data for client
	 */
	public function data() {
		return [
			'siteName'=> $this->siteName,
			'root'=>$this->root
		];
	}

	/**
	 * Allow plugins to amend an object as needed.
	 * This allows a plugin the ability to add
	 * extensions to an object such as adding grading
	 * to an assignment.
	 * @param mixed $object
	 */
	public function amend($object) {
		foreach($this->plugins as $plugin) {
			$plugin->amend($object);
		}
	}

	/**
	 * Get the logger for a subsystem.
	 * @param string $pluginName The plugin name of the subsystem
	 * @return Logger
	 */
	public function logger($pluginName) {
		return $this->siteLogger->get($pluginName);
	}

	/// Array of options passed to start
	private $options;

	// The installed plugins.
	// A plugin is an object derived from the class Plugin
	// that adds features to the system.
	// Plugins are in topological sorted order
	// by dependencies.
	private $plugins = [];

	// Installed site components
	// The allows plugins to add to the Site object
	// with named sub-objects like: $site->course
	private $components = [];

	private $siteLogger = null;     // The site master logging component

	private $appearance = null;     // Installed appearance

	private $db;                    // Database configuration

	private $root = '';             // Site root path, default is server root
	private $rootDir;               // Site root directory
	private $started = false;       // Has site been started?

	private $jsRoot = '/cl/dist';   // Javascript root directory
	private $jsSuffix = null;       // Javascript suffix: .js or .min.js

	private $sandbox = false;       // Are we running in a sandbox?

	private $siteName = '';         // Name of the site
	private $cookiePrefix = 'site'; // Prefix for cookie names
	private $config = 'site';       // The configuration files directory
	private $decor = 'site';        // The decorations directory
	private $server = null;         // Server URL (like https://www.server.edu)

	//
	// The startup phases
	//

	/// Activities that occur before the system is started
	private $preStartup = [];

	/// System startup
	private $startup = [];

	/// Activities after the system is started
	private $postStartup = [];
}