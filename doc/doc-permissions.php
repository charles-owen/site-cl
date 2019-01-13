<?php
/**
 * @file
 * Permission tags
 */

/**
 * @page permission-tags Permission Tags
 *
 * @section site-permissions Site permissions
 *
 *  tag | description | default
 * -----|-------------|--------
 *  site-log | Access to the site logs | User::ADMIN
 *
 */

/**
 * @page permission-tags Permission Tags
 * @tableofcontents
 *
 * Permission tags allow for the specification of permissions for
 * elements of the site. Each tag has a default value or can be
 * set to a different value. The value specifies the minimum permission
 * to access the feature.
 *
 * To use, add lines like this to site.php:
 *
 * @code
 *
 * $site->users->setAtLeast('course-spoofing', Member::GRADER);
 *
 * @endcode
 */