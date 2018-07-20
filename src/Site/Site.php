<?php
/**
 * @file
 * Master configuration object for a general purpose web site
 */

namespace CL\Site;

use CL\Site\Components\InstalledConfig;
use CL\Site\System\Server;
use CL\Site\Util\TopologicalSort;

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
 */
class Site {
	/**
	 * Site constructor.
	 *
	 * @param string $rootDir Root directory for the site.
	 */
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
			$pluginsOrder = TopologicalSort::sort($pluginsDeps);

			// We install the plugins in order into the configuration
			// now so they are available for settings.
			$this->plugins = [];
			foreach($pluginsOrder as $tag) {
				$plugin = $pluginsByName[$tag];
				$this->plugins[] = $plugin;
				$plugin->install($this);
			}
		} else {
			$this->plugins = [];
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
	 * cookiePrefix | A prefix to attach to all cookie names (to ensure uniqueness)
	 * db | \\CL\\Tables\\Config | Database configuration object
	 * jsSuffix | Suffix to append to base Javascript (default is .min.js or .js (sandbox)
	 * jsRoot | The root directory for the site Javascript (default is cl/dist
	 * jsSuffix | Suffix to append to base Javascript (default is .min.js or .js (sandbox)
	 * options | array | Options passed to the start function.
	 * root | string | %Site root path
	 * rootDir | string | %Site root directory
	 * sandbox | boolean | True if running in the sandbox
	 * siteName | A name for the website.
	 * started | boolean | True if the system has been started
	 *
	 *
	 * @return null|string
	 */
	public function __get($key) {
		if(isset($this->components[$key])) {
			return $this->components[$key];
		}

		switch($key) {
			case "appearance":
				return $this->appearance;

			case 'cookiePrefix':
				return $this->cookiePrefix;

			case "db":
				return $this->db;

			case 'jsRoot':
				return $this->jsRoot;

			case 'jsSuffix':
				return $this->jsSuffix;

			case 'options':
				return $this->options;

			case 'root':
				return $this->root;

			case 'img':
				return $this->root . '/vendor/cl/site/img';

			case "rootDir":
				return $this->rootDir;

			case 'sandbox':
				return $this->sandbox;

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
	 * cookiePrefix | A prefix to attach to all cookie names (to ensure uniqueness)
	 * jsRoot | The root directory for the site Javascript (default is cl/dist
	 * jsSuffix | Suffix to append to base Javascript (default is .min.js or .js (sandbox)
	 * root | string | %Site root path
	 * sandbox | boolean | True if running in the sandbox
	 * siteName | A name for the website.
	 *
	 * @param $key Property name
	 * @param $value Value to set
	 */
	public function __set($key, $value) {
		switch($key) {
			case 'appearance':
				$this->appearance = $value;
				break;

			case 'cookiePrefix':
				$this->cookiePrefix = $value;
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
	 * @param int $time Optional time to pass in.
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

	/**
	 * Actual system startup
	 * @param array $options Supplied startup options
	 * @param Server $server Server component
	 * @param int $time Current time
	 * @return null|string Returns a redirect address if redirect is necessary.
	 */
	private function _start(array $options, Server $server, $time) {
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
	 * @param $component Name of the component
	 * @param InstalledConfig $config
	 */
	public function install($component, InstalledConfig $config) {
		$this->components[$component] = $config;
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
	 * Add a route
	 * @param array $path Array of path values, like ['login'] or ['api', '*']
	 * '*' indicates anything can follow.
	 * @param callable $function Function to call to create the route handler.
	 */
	public function addRoute($path, $function) {
		$root = $path[0];
		$rest = array_slice($path, 1);
		if(!isset($this->routes[$root])) {
			$this->routes[$root] = [];
		}

		$this->routes[$root][] = [
			'path' => $path,
			'function' => $function
		];
	}

	public function routeDispatch(Site $site, Server $server, array $path, $time) {
		$path0 = $path[0];

		if(isset($this->routes[$path0])) {
			foreach($this->routes[$path0] as $route) {
				$routePath = $route['path'];
				$properties = [];
				for($i=1;  ; $i++) {
					if($i >= count($routePath) && ($i >= count($path) || $path[$i] === '')) {
						// Both reached the end, so this is a valid path
						return $route['function']($site, $server, [], $properties, $time);
					}

					if($i >= count($path)) {
						// We reached the end of the path. If we
						// are not at the end of the route path,
						// it is not a match unless it has an '*'
						if($routePath[$i] === '*') {
							return $route['function']($site, $server, [], $properties, $time);
						}

						// Path was not long enough
						break;
					}

					if($i >= count($routePath)) {
						// Route is not as long as the path
						break;
					}

					if($routePath[$i] === '*') {
						// This is a valid path
						$path1 = array_slice($path, $i);
						return $route['function']($site, $server, $path1, $properties, $time);
					}

					if($path[$i] === $routePath[$i]) {
						// We have a partial match
						continue;
					}

					if($routePath[$i][0] === ':') {
						// We have a property
						$properties[substr($routePath[$i], 1)] = $path[$i];
					} else {
						// This is not a match!
						break;
					}
				}
			}
		}

		$view = new \CL\Site\Views\InvalidPathView($site);
		return $view->whole();
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

	/// Installed top-level routes
	private $routes = [];
}