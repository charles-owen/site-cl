<?php
/**
 * @file
 * Base class that defines the appearance of a site.
 */

namespace CL\Site;

/**
 * Base class that defines the appearance of a site.
 *
 * Classes derived from this are used to plug in custom
 * styles, headers, and footers.
 */
class Appearance {
	/**
	 * Install this appearance into a view.
	 *
	 * This is a place to indicate custom CSS or JS that must be loaded.
	 * @param View $view View to install into
	 */
	public function install(View $view) {
	}

	/**
	 * Generate the page header
	 * @param View $view The view class we are displaying
	 * @param string $title Page title
	 * @param string $nav Content for a nav section of the page
	 * @return string HTML
	 */
	public function header(View $view, $title, $nav='') {
		$html = <<<HTML
<header class="cl-site">
	<div class="heading">
		<h1>$title</h1>
	</div>$nav
</header>
HTML;

		return $html;
	}

	/**
	 * Generate the page footer
	 * @param View $view The view class we are displaying
	 * @return string HTML
	 */
	public function footer(View $view) {
		$html = <<<HTML
<footer class="cl-site">
<p>Course Tools by <a href="https://www.cse.msu.edu/~cbowen">Dr. Charles B. Owen</a></p>
</footer>
HTML;

		return $html;
	}

	/**
	 * Allow for replacing images with custom ones.
	 * @param string $name Base name of the image (like taskicon)
	 * @param string $default Default to return if image is not replaced
	 * @return string
	 */
	public function image($name, $default) {
		return $default;
	}
}