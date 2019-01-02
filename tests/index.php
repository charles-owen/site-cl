<?php
/** @file
 * The main unit testing page
 * @author Charles B. Owen
 * @cond
 */
require 'initialize.php';
$view = new Testing\TestingView();

$files = scandir(__DIR__ . '/../..');

// Some directories we ignore...
$ignore = array('.', '..', 'tables');
foreach($files as $file) {
	if (in_array($file, $ignore)) {
		continue;
	}

	$dir = __DIR__ . '/../../' . $file . '/tests/phpunit';
	if (is_dir($dir)) {
		$view->addDir($file, $dir);
	}
}

/*
 */

echo $view->all();
/// @endcond
