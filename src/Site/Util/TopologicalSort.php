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
			foreach ($plugins as $js => $depends) {
				if (count($depends) === 0) {
					$sorted[] = $js;
					$any = true;
				} else {
					$temp[$js] = $depends;
				}
			}

			// Remove all dependencies from the
			// remaining plugins
			$plugins = [];
			foreach ($temp as $js => $depends) {
				$depends = array_diff($depends, $sorted);
				$plugins[$js] = $depends;
			}

			if (!$any) {
				throw new \Exception('Javascript dependencies have a cycle');
			}

		}

		return $sorted;
	}
}