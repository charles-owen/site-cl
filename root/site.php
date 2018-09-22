<?php
/**
 * @file
 * Site definition file.
 *
 * Required by all pages on the site.
 */

// Uncomment for increased error reporting
//ini_set('display_errors',1);
//ini_set('display_startup_errors',1);
//error_reporting(E_ALL);

require __DIR__ . '/vendor/autoload.php';

/*
 * Site configuration
 */

$site = new CL\Site\Site(__DIR__);
$site->root = '/';

// Database configuration
$site->db->configure('',
	'',
	'',
	'',
	'');
