<?php
/**
 * @file
 * Configure file for the database test configuration.
 */

use CL\Site\Site;

return function(Site $site) {
	$basic = require __DIR__ . '/../site.php';
	$basic($site);
	$site->lti->addKey('lti-experiment', 'uJ3Tkd5Jtr', 'FS18', '730');
};
