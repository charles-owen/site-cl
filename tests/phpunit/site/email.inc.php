<?php
/**
 * @file
 * System email configuration file.
 */

return function(\CL\Site\Email $email) {
	$siteName = $email->site->siteName;
	$email->from = "\"$siteName Course Email\" <no-reply@cse.msu.edu>";
};
