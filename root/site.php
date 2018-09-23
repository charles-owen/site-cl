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
 * Site configuration. Creates the Site object
 * and populates it.
 */

$site = new CL\Site\Site(__DIR__);

// The site root path. Set to different value if
// path to site is not in server root.
$site->root = '';

// Database configuration
// The fields are:
// dbhost: Database host string, like 'mysql:host=127.0.0.1;dbname=cse999'
// dbname: Database name: like 'cse999'
// dbuser: Database user id, like 'cse999'
// dbpassword: Database password
// prefix: Prefix to add to table names (optional, but recommended)
$site->db->configure('',
	'',
	'',
	'',
	'');

$site->siteName = 'CourseLib';

// Prefix to add to cookie names. Recommended if site has more than
// one course on it.
$site->cookiePrefix = 'cse999_';
