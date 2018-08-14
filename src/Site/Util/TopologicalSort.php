<?php
/**
 * @file
 * Sort plugins into topological order.
 */

namespace CL\Site\Util;

use Exception;

/**
 * Sort plugins into topological order.
 */
class TopologicalSort {
	/**
	 * Sort plugins into topological order.
	 *
	 * This ensures all plugins that a plugin is dependent
	 * on are initialized first.
	 * @param array $plugins An array of Plugin objects
	 * @return array Sorted array of plugin objects
	 * @throws Exception If dependency graph has a cycle.
	 */
	public static function sort($plugins) {


		// Topological sort
		$sorted = [];
		while (count($plugins) > 0) {
			$temp = [];
			$any = false;

			// Find all plugins that have no dependency
			foreach ($plugins as $plugin => $depends) {
				if (count($depends) === 0) {
					$sorted[] = $plugin;
					$any = true;
				} else {
					$temp[$plugin] = $depends;
				}
			}

			// Remove all dependencies from the
			// remaining plugins
			$plugins = [];
			foreach ($temp as $plugin => $depends) {
				$depends = array_diff($depends, $sorted);
				$plugins[$plugin] = $depends;
			}

			if (!$any) {
				// We did not remove anything from plugins
				// We either have a non-existent dependency or a cycle.

				// Ensure all remaining dependencies exist
				foreach($plugins as $key => $depends) {
					foreach($depends as $depend) {
						if(!isset($plugins[$depend])) {
							throw new Exception("Plugin dependency on $depend, which is not installed");
						}
					}
				}

				throw new Exception('Plugin dependencies have a cycle');
			}

		}

		return $sorted;
	}
}