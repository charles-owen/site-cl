<?php
/**
 * @page appearance-options Appearance options
 * @tableofcontents
 *
 * Image tags are used to indicate images that can be replaced
 * by an appearance. An Appearance objet will have a function
 * image that maps an image tag to a file relative to the
 * root directory. Example:
 *
 * public function image($name, $default) {
 *     switch($name) {
 *         case 'quizicon':
 *             return '/msu/img/quizicon.png';
 *
 *         case 'taskicon':
 *             return '/msu/img/taskicon.png';
 *
 *         case 'favicon':
 *             return '/msu/img/favicon.ico';
 *     }
 *
 *     return $default;
 * }
 */