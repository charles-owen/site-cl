<?php
/**
 * @file
 * Configure file for the database test configuration.
 */

use CL\Site\Site;

return function(Site $site) {
	$host = $_SERVER['HTTP_HOST'];
	if(strpos($host, 'localhost') !== false) {
		$site->sandbox = true;
		$site->root = '';
		$site->db->configure('mysql:host=127.0.0.1;dbname=cse477',
			'cse477',
			'cse477',
			'vEascHx9VHKuwevA',
			'test_cl_site_');
	} else {
		$site->root = '/~cbowen/cirsim-lti';
		$site->db->configure('mysql:host=mysql-user.cse.msu.edu;dbname=cbowen',
			'cbowen',
			'cbowen',
			'99rtshib',
			'test_cl_site_');
	}

	$site->siteName = 'Test Site';
	$site->cookiePrefix = 'test-cookie';
};
