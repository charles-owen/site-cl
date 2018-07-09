<?php
/**
 * Base class that defines the appearance of a site.
 *
 * Classes derived from this are used to plug in custom
 * styles, headers, and footers.
 */

namespace CL\Site;


class Appearance {
	public function install(View $view) {
	}

	public function header(View $view, $title, $nav='') {
		$html = <<<HTML
<header class="cl-site">
<h1>$title</h1>
$nav
</header>
HTML;

		return $html;
	}

	public function footer(View $view) {
		$html = <<<HTML
<footer class="cl-site">
<p>Course Tools by <a href="https://www.cse.msu.edu/~cbowen">Dr. Charles B. Owen</a></p>
</footer>
HTML;

		return $html;
	}
}