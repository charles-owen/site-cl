<?php
/**
 * Created by PhpStorm.
 * User: charl
 * Date: 7/3/2018
 * Time: 6:57 PM
 */

namespace CL\Site\Util;


class TopologicalSort {
	public static function sort($plugins)
	{

		// Topological sort
		$sorted = [];
		while (count($plugins) > 0) {
			$temp = [];
			$any = false;

			// Find all plugins that has no dependency
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
				throw new \Exception('Plugin dependencies have a cycle');
			}

		}

		return $sorted;
	}
}