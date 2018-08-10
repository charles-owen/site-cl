<?php
/**
 * @file
 * View class for the site credits/information page
 */

namespace CL\Site\Views;

use CL\Site\Site;

/**
 * View class for the site credits/information page
 */
class CreditsView extends \CL\Site\View {
	/**
	 * CreditsView constructor.
	 * @param Site $site The Site object
	 */
	public function __construct(Site $site) {
		parent::__construct($site);
	}

	public function present_site() {
		$img = $this->site->root . '/vendor/cl/site/img';

		$html = <<<HTML
<h2>Dr. Owen Web Site Library</h2>

<p>This web site utilizes the Dr. Owen Web Site Library, a collection of components that support high-performance course web sites. 
<p>Some of the tools, components, and resources used in the creation of the library and general web development that I do:
<figure>
<a href="http://www.adobe.com/creativecloud.html" target="_blank"><img src="$img/adobe-creative-cloud.png" width="400" height="151" alt="Adobe Creative Cloud"/>
</a>
<figcaption>
Photoshop, Dreamweaver, Audition, Premiere Pro, and After Effects</figcaption></figure>
<ul>
HTML;

		$list = array(
			array("link" => "https://www.jetbrains.com/phpstorm/", "name" => "JetBrains PhpStorm"),
			array("link" => "http://www.php.net/", "name" => "PHP"),
			array("link" => "http://www.mysql.com/", "name" => "MySQL"),
			array("link" => "http://phpunit.de/", "name" => "PHPUnit"),
			array("link" => "https://qunitjs.com/", "name" => "QUnit"),
			array("link" => "http://jquery.com/", "name" => "jQuery"),
			array("link" => "http://www.videojs.com/", "name" => "Video.js"),
			array("link" => "http://lesscss.org/", "name" => "Less"),
			array("link" => "http://gruntjs.com/", "name" => "Grunt"),
			array("link" => "http://www.doxygen.org", "name" => "Doxygen"),
			array("link" => "http://html5boilerplate.com/", "name" => "HTML5 Boilerplate"),
			array("link" => "http://www.websitebullets.com/", "name" => "www.websitebullets.com")
		);

		foreach($list as $item) {
			$html .= $this->item($item['name'], $item['link']);
		}

		$html .= <<<HTML
</ul>
<h3>Graphics tools and software that I use</h3>
<ul>
HTML;

		$list = array(
			array("link" => "http://www.autodesk.com/", "name" => "Autodesk 3D Studio Max"),
			array("link" => "http://my.smithmicro.com/poser-pro-11.html", "name" => "Poser Pro"),
			array("link" => "http://www.3dconnexion.com/", "name" => "3D Connexion SpaceNavigator")
		);

		foreach($list as $item) {
			$html .= $this->item($item['name'], $item['link']);
		}

		$html .= <<<HTML
</ul>
<h3>Music equipment and software that I use</h3>
<ul>
HTML;

		$list = array(
			array("link" => "https://www.ableton.com/", "name" => "Ableton Live and Push"),
			array("link" => "https://www.native-instruments.com/en/products/komplete/", "name" => "Native Instruments Komplete"),
			array("link" => "http://www.airmusictech.com/", "name" => "AIR Music Technologies"),
			array("link" => "https://www.arturia.com/products/analog-classics/v-collection/overview", "name" => "Arturia V Collection"),
			array("link" => "https://www.arturia.com/products/hybrid-synths/keylab49/overview", "name" => "Arturia Keylab 49"),
			array("link" => "http://www.thelooploft.com/", "name" => "The Loop Loft")
		);

		foreach($list as $item) {
			$html .= $this->item($item['name'], $item['link']);
		}

		$html .= <<<HTML
</ul>
HTML;

		return $html;
	}

	private function item($name, $link) {
		return '<li><a href="' . $link . '" target="_blank">' . $name . '</a></li>';
	}
}