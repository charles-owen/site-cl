<?php
/** @file
 * @brief Browser redirect to %index.php
 * 
 * This file is designed to prevent users from browing 
 * site directories. It can be dropped into directories
 * and browsing the directory will redirect to the 
 * course home page. 
 *
 * Be sure to change the path to course.inc.php
 * @cond
 */
require_once "../course.inc.php";
$root = get_root();
header("Location: $root/");
exit;
/// @endcond
?>
