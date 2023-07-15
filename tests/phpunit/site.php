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
		$site->db->configure('mysql:host=10.10.10.1;dbname=cl_test',
			'cl_test',
			'cl_test',
			'vEascHx9VHKuwevA',
			'test_cl_');
	} else {
		$site->root = '/~cbowen/cirsim-lti';
		$site->db->configure('mysql:host=mysql-user.cse.msu.edu;dbname=cbowen',
			'cbowen',
			'cbowen',
			'',
			'test_cl_site_');
	}

	$site->siteName = 'Test Site';
	$site->cookiePrefix = 'test-cookie';
};
