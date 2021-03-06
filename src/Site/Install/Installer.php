<?php
/**
 * @file
 * Site installer component
 */

namespace CL\Site\Install;

/**
 * Site installer component
 */
class Installer {

	private function __construct() {
	}

	private function _install($event) {
		$composer = $event->getComposer();

		$vendorPath = $composer->getConfig()->get('vendor-dir');
		$rootDir = $vendorPath . '/..';

		// Ensure the /cl directory exists and has files
		$this->ensureCL($rootDir);

		// Ensure any root directory files exist
		$this->ensureRoot($rootDir);

		//
		// Load the installed packages
		//
		$packages = $composer->getRepositoryManager()->getLocalRepository()->getPackages();
		$installationManager = $composer->getInstallationManager();

		foreach($packages as $package) {
			$name = $package->getName();
			$path = $installationManager->getInstallPath($package);

			if(substr($name, 0, 3) === 'cl/') {
				$this->loadPackages($name, $path);
			}
		}

		// Ensure the dist directory exists and has base JS in it
		$this->installJS($rootDir);

		// Create the manifest files in the dist directory
		$this->createManifest($rootDir, 'manifest.dev.json');
		$this->createManifest($rootDir, 'manifest.min.json');

		// Copy over any files into cl directories
		$this->installCL($rootDir);

		// Copy over any image file to /cl/img
		$this->installImg($rootDir);

		// Create the cl/installed.php file
		$this->createInstalled($rootDir);

		// Create webpack.common.js in the root directory
		$this->createWebpackCommon($rootDir);

		// Create the package.json file in the root directory
		$this->createPackageJson($rootDir);

		// Perform any package custom installations
		$this->custom($rootDir);

		// Create publish.js in the root directory
		$this->createPublish($rootDir);
	}

	private function loadPackages($name, $path) {
		if($name === 'cl/site' || isset($this->packages[$name])) {
			// We handle ourselves just fine
			return;
		}

		if(file_exists($path . '/install.php')) {
			$package = require($path . '/install.php');
			$package->name = $name;
			$package->path = $path;
			$this->packages[$name] = $package;
		}

		if(file_exists($path . '/webpack.common.js') && file_exists($path . '/package.json')) {
			$package = explode('/', $name)[1];
			$json = json_decode(file_get_contents($path . '/package.json'), true);
			$version = $json['version'];
			$this->webpack[] = ['name'=>$package, 'version'=>$version];
		}
	}

	/**
	 * Install the site.
	 */
	public static function install($event) {
		$installer = new Installer();
		$installer->_install($event);
	}

	/**
	 * Ensure the cl directory exists
	 * @param string $rootDir Site root directory
	 */
	private function ensureCL($rootDir) {
		$cl = $rootDir . '/cl';

		if (!file_exists($cl)) {
			mkdir($cl);
		}

		// Copy files into cl directory
		$siteCl = $rootDir . '/vendor/cl/site/cl';
		foreach(scandir($siteCl) as $file) {
			if(is_file($siteCl . '/' . $file)) {
				if(!file_exists($cl . '/' . $file)) {
					copy($siteCl . '/' . $file, $cl . '/' . $file);
				}
			}
		}
	}


	/**
	 * Copy files into /cl/img
	 * @param string $rootDir Site root directory
	 */
	private function installImg($rootDir) {
		$img = $rootDir . '/cl/img';

		if (!file_exists($img)) {
			mkdir($img);
		}

		// Copy files into cl/img directory
		$siteImg = $rootDir . '/vendor/cl/site/img';
		foreach(scandir($siteImg) as $file) {
			if(is_file($siteImg . '/' . $file)) {
				if(!file_exists($img . '/' . $file)) {
					copy($siteImg . '/' . $file, $img . '/' . $file);
				}
			}
		}
	}

	/**
	 * Copy package files into the /cl directory.
	 * @param string $rootDir Site root directory
	 */
	private function installCL($rootDir) {
		$cl = $rootDir . '/cl';

		// Copy files into cl directory
		// And copy all installed packages dist content
		foreach($this->packages as $package) {
			if ($package->cl !== null) {
				$packageCl = $package->path . $package->cl;
				foreach(scandir($packageCl) as $file) {
					if(is_file($packageCl . '/' . $file)) {
						if(!file_exists($cl . '/' . $file)) {
							copy($packageCl . '/' . $file, $cl . '/' . $file);
						}
					}
				}

			}
		}


	}
	/**
	 * Ensure the minimum root directory files exist for the site.
	 * @param string $rootDir Site root directory
	 */
	private function ensureRoot($rootDir) {
		// Copy files into cl directory
		$siteRoot = $rootDir . '/vendor/cl/site/root';
		foreach(scandir($siteRoot) as $file) {
		    if($file === "package-start.json") {
		        continue;
            }

			if(is_file($siteRoot . '/' . $file)) {
				if(!file_exists($rootDir . '/' . $file)) {
					copy($siteRoot . '/' . $file, $rootDir . '/' . $file);
				}
			}
		}
	}

	/**
	 * Install all Javascript files for this component
	 * @param string $rootDir Site root directory
	 */
	private function installJS($rootDir) {
		$dist = $rootDir . '/cl/dist';
		if (!file_exists($dist)) {
			mkdir($dist);
		}

		// Delete all existing files in dist
		foreach(scandir($dist) as $file) {
			// We ignore any file names that begin with _
			// Those are considered local bundles.
			if(substr($file, 0, 1) === '_') {
				continue;
			}

			if(is_file($dist . '/' . $file)) {
				unlink($dist . '/' . $file);
			}
		}

		// Copy all files from the source dist directory
		$distCl = $rootDir . '/vendor/cl/site/dist';
		$this->copyr($distCl, $dist, '%dist[\\/]manifest\.%');

		// And copy all installed packages dist content
		foreach($this->packages as $package) {
			if($package->dist !== null) {
				$distCl = $package->path . $package->dist;

				$this->copyr($distCl, $dist, '%dist[\\/]manifest\.%');
			}
		}

	}

	private function createManifest($rootDir, $file) {
		$path = $rootDir . '/vendor/cl/site/dist/' . $file;
		$manifest = json_decode(file_get_contents($path), true);

		// And copy all installed packages dist content
		foreach($this->packages as $package) {
			if($package->dist !== null) {
				$path = $package->path . $package->dist . '/' . $file;

				$manifest = array_merge($manifest,
					json_decode(file_get_contents($path), true)
				);

			}
		}

		$dest = $rootDir . '/cl/dist/' . $file;
		file_put_contents($dest,
			json_encode($manifest, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES ));
	}

	/**
	 * Perform any package custom installations.
	 * @param string $rootDir Site root directory path
	 */
	private function custom($rootDir) {
		// And copy all installed packages dist content
		foreach($this->packages as $package) {
			$package->custom($rootDir);
		}
	}

	private function createInstalled($rootDir) {
		$file = $rootDir . '/cl/installed.php';

		$list = '';
		foreach($this->packages as $package) {
			if($package->installed === null) {
				continue;
			}

			if($list !== '') {
				$list .= ",\n  ";
			}

			$list .= 'new ' . $package->installed . '()';
		}

		$contents = "<?php\n\nreturn [\n  " . $list . "\n];";
		file_put_contents($file, $contents);
	}

	/**
	 * Create the file webpack.common.js in the root directory
	 * @param $rootDir Root directory
	 */
	private function createWebpackCommon($rootDir) {
		$data = <<<DATA
// This file is created automatically by cl-installer
// Do not edit!		
const {merge} = require('webpack-merge');
const site = require('./vendor/cl/site/webpack.site.common');


DATA;

		foreach($this->webpack as $package) {
			$name = $package['name'];
			$data .= "const $name = require('./vendor/cl/$name/webpack.common');\n";
		}

		$data .= "\nmodule.exports = merge(site";
		foreach($this->webpack as $package) {
			$name = $package['name'];
			$data .= ",\n    $name";
		}

		$data .= "\n);\n";

		file_put_contents($rootDir . '/webpack.common.js', $data);
	}

	/**
	 * Create the file publish.js in the root directory
	 * @param $rootDir Root directory
	 */
	private function createPublish($rootDir) {
		$data = <<<DATA
// This file is created automatically by cl-installer
// Do not edit!		
const path = require('path');

module.exports = {
	root: path.resolve(__dirname),
	components: {
        site: require('./vendor/cl/site/publish'),

DATA;

		$first = true;
		foreach($this->webpack as $package) {
			if($first) {
				$first = false;
			} else {
				$data .= ",\n";
			}

			$name = $package['name'];
			$data .= "        $name: require('./vendor/cl/$name/publish')";
		}

		/// cond
		$data .= "\n    }\n}\n";
        /// endcond

		file_put_contents($rootDir . '/publish.js', $data);
	}

    /**
     * Create the package.json file
     * @param $rootDir
     */
	private function createPackageJson($rootDir) {
	    // If a file already exists, load it. If not,
        // load a starter file from the root files directory
		$initial = file_exists($rootDir . '/package.json') ? $rootDir . '/package.json' :
			$rootDir . '/vendor/cl/site/root/package-start.json';

		// Load the initial package.json file
		$json = json_decode(file_get_contents($initial), true);

		// Add/set the dependencies
		foreach($this->webpack as $package) {
			$json['dependencies'][$package['name'] . '-cl'] = '~' . $package['version'];
		}

		// Load the package.json file for the site
        $siteAutoback = $rootDir . '/vendor/cl/site/package.json';
        $site = json_decode(file_get_contents($siteAutoback), true);

        // Copy over all devDependencies
        foreach($site['devDependencies'] as $depend => $version) {
            $json['devDependencies'][$depend] = $version;
        }

		$data = json_encode($json, JSON_PRETTY_PRINT);
		file_put_contents($rootDir . '/package.json', $data);
	}


	/**
	 * Copy a file, or recursively copy a folder and its contents
	 *
	 * CBO: Modified to include the ability to ignore certain files
	 *
	 * @author      Aidan Lister <aidan@php.net>
	 * @version     1.0.1
	 * @link        http://aidanlister.com/2004/04/recursively-copying-directories-in-php/
	 * @param       string   $source    Source path
	 * @param       string   $dest      Destination path
	 * @param string $ignore Regular expression for files or directories that should be ignored
	 * @return      bool     Returns TRUE on success, FALSE on failure
	 */
	private function copyr($source, $dest, $ignore)
	{
		if(preg_match($ignore, $source) === 1) {
			return true;
		}

		// Check for symlinks
		if (is_link($source)) {
			return symlink(readlink($source), $dest);
		}

		// Simple copy for a file
		if (is_file($source)) {
			return copy($source, $dest);
		}

		// Make destination directory
		if (!is_dir($dest)) {
			mkdir($dest);
		}

		// Loop through the folder
		$dir = dir($source);
		while (false !== $entry = $dir->read()) {
			// Skip pointers
			if ($entry == '.' || $entry == '..') {
				continue;
			}

			// Deep copy directories
			$this->copyr("$source/$entry", "$dest/$entry", $ignore);
		}

		// Clean up
		$dir->close();
		return true;
	}

	private $packages = [];
	private $webpack = [];
}