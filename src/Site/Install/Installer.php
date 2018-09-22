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
	/**
	 * Install the site.
	 */
	public static function install($event) {
		echo "Installing\n";

		$composer = $event->getComposer();

		$vendorPath = $composer->getConfig()->get('vendor-dir');
		$rootDir = $vendorPath . '/..';
		echo $rootDir . "\n";

		self::ensureCL($rootDir);
		self::ensureRoot($rootDir);

		self::installJS($rootDir);

		//print_r($composer->getConfig());

		//print_r($event);
	}

	/**
	 * Ensure the cl directory exists
	 * @param string $rootDir Site root directory
	 */
	private static function ensureCL($rootDir) {
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
	 * Ensure the minimum root directory files exist for the site.
	 * @param string $rootDir Site root directory
	 */
	private static function ensureRoot($rootDir) {
		// Copy files into cl directory
		$siteRoot = $rootDir . '/vendor/cl/site/root';
		foreach(scandir($siteRoot) as $file) {
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
	private static function installJS($rootDir) {
		$dist = $rootDir . '/cl/dist';
		if (!file_exists($dist)) {
			mkdir($dist);
		}

		// Delete all existing files in dist
		foreach(scandir($dist) as $file) {
			if(is_file($dist . '/' . $file)) {
				unlink($dist . '/' . $file);
			}
		}

		// Copy call files from the source dist directory
		$distCl = $rootDir . '/vendor/cl/site/dist';

		foreach(scandir($distCl) as $file) {
			if(is_file($distCl . '/' . $file)) {
				copy($distCl . '/' . $file, $dist . '/' . $file);
			}
		}

	}

}