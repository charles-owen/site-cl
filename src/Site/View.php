<?php
/**
 * @file
 * Base class for Views for pages.
 */

namespace CL\Site;

/**
 * Base class for Views for pages.
 */
class View {
	/**
	 * View constructor.
	 * If the system has not been started, start it now.
	 *
	 * @param Site $site The Site configuration object
	 * @param array $options Options to pass to start.
	 */
	public function __construct(Site $site, $options=[]) {
		$this->site = $site;

		if(!$site->started) {
			$site->start($options);
		}

		$GLOBALS['view'] = $this;

		//
		// Enable output buffering during the processing of all content prior to
		// the call to View::head(). This provides an way to strip out any
		// included CSS we don't want to actually include.
		//
		ob_start();

		// Always included
		$this->addCSS('vendor/cl/site/site.css');
		$this->addJS('vendor');
		$this->addJS('site');
	}

	/**
	 * Presentation of a whole page
	 * @return string HTML for the page
	 */
	public function whole() {
		$head = $this->head();
		$all = $this->all();

		$html = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>$head</head>
<body>$all</body>
</html>
HTML;

		return $html;
	}

	/**
	 * Presentation of a page entirely used by Vue
	 * @return string HTML for the page
	 */
	public function vue($id, $js=[], $script=null) {
		foreach($js as $j) {
			$this->addJS($j);
		}

		if($script !== null) {
			$this->script .= $script;
		}

		$head = $this->head();
		$tail = $this->tail(true);

		$html = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>$head</head>
<body><div class="$this->body"><div id="$id"></div></div>$tail</body>
</html>
HTML;

		return $html;
	}

	/**
	 * Create contents for the head section of a page.
	 * @return string HTML
	 */
	public function head() {
		//
		// Get the buffered heading contents and
		// remove any use of already included CSS.
		//
		// If a user manually includes site.css,
		// it will be removed from the header by this
		// code if the system would include it with
		// the timestamp instead.
		//
		$html = ob_get_contents();
		ob_end_clean();

		$regex = '%<link[^>]*href=[^>]*(';
		$first = true;
		foreach($this->css as $css) {
			if($first) {
				$first = false;
			} else {
				$regex .= '|';
			}
			$regex .= $css;

		}
		$regex .= ')[^>]*>\R*%';
		$html = preg_replace($regex, '', $html);


		if($this->appearance === null) {
			$this->getAppearance();
		}

		$siteName = $this->site->siteName;

		$html .= <<<HTML
<meta charset="UTF-8">
<meta content="width=device-width, initial-scale=1.0, minimum-scale=1" name="viewport">
<title>$siteName $this->title</title>
HTML;


		foreach($this->js as $js) {
			$html .= $this->tsjs($js);
		}

		foreach($this->css as $css) {
			$html .= $this->tscss($css);
		}

		foreach($this->aux as $aux) {
			$html .= $aux->head();
		}

		return $html;
	}

	/**
	 * Create contents for the tail section of a page, after the footer
	 * @param bool $addHeaderFooter If true, add JSON for the header and footer.
	 * @return string HTML
	 */
	public function tail($addHeaderFooter = false) {
		$html = '';

		$siteInfo = $this->site->data();
		$siteName = $this->site->siteName;

		if($addHeaderFooter) {
			$root = $this->site->root;
			$siteInfo['header'] = $this->appearance->header($this, "<a href=\"/$root\">$siteName</a> {{title}}", '<slot></slot>');
			$siteInfo['footer'] = $this->appearance->footer($this);
		}

		$json = htmlspecialchars(json_encode($siteInfo), ENT_NOQUOTES);
		$html .= '<div id="cl-site" style="display: none">' . $json . '</div>';

		foreach($this->json as $id => $json) {
			$json = htmlspecialchars($json, ENT_NOQUOTES);
			$html .= '<div id="' . $id . '" style="display: none">' . $json . '</div>';
		}



		if($this->script !== '') {
			$html .= '<script>' . $this->script . '</script>';
		}

		return $html;
	}

	private function tscss($file) {
		$rootDir = $this->site->rootDir;
		$cssFile = $rootDir . '/' . $file;
		$ts = filemtime($cssFile);

		$root = $this->site->root;

		return <<<HTML
<link href="$root/$file?t=$ts" type="text/css" rel="stylesheet" />
HTML;
	}

	private function tsjs($file) {
		$rootDir = $this->site->rootDir;
		$jsFile = $rootDir . '/' . $file;
		$jsTs = @filemtime($jsFile);

		$root = $this->site->root;


		if($jsTs !== false) {
			return <<<HTML
<script type="text/javascript" src="$root/$file?t=$jsTs"></script>
HTML;
		} else {
				return <<<HTML
<script type="text/javascript" src="$root/$file"></script>
HTML;
		}
	}

	/**
	 * Present the page header.
	 * @param bool $contentDiv If true, the opening tag for the content div is included.
	 * @return string HTML
	 */
	public function header($contentDiv = true, $nav='') {
		if($this->appearance === null) {
			$this->getAppearance();
		}

		$siteName = $this->site->siteName;
		$root = $this->site->root;
		$title = "<a href=\"$root/\">$siteName</a> $this->title";
		$html = '<div class="' . $this->body . '">' . $this->appearance->header($this, $title, $nav);
		if($contentDiv) {
			$html .= '<div class="content">';

			if($this->autoback) {
				$html .= '<div class="cl-autoback cl-strip"></div>';
			}
		}

		return $html;
	}

	/**
	 * Present the page footer
	 * @return string HTML
	 */
	public function footer($contentDiv = true) {
		if($this->appearance === null) {
			$this->getAppearance();
		}

		$html = $this->appearance->footer($this) . '</div>' . $this->tail();
		if($contentDiv) {
			if($this->autoback) {
				$html .= '</div><div class="cl-autoback cl-strip"></div>' . $html;
			} else {
				$html = '</div>' . $html;
			}

		}

		return $html;
	}

	/**
	 * Present the page body.
	 * @return string HTML
	 */
	public function present() {
		return '';
	}

	/**
	 * Present the entire page body
	 * @return string HTML
	 */
	public function all() {
		return $this->header() . $this->present() . $this->footer();
	}

	/**
	 * Property get magic method
	 * @param $key Property name
	 * @property-read tablename The table name
	 * @property-read prefix The table prefix
	 * @return null|string
	 */
	public function __get($key) {
		switch($key) {
			case 'site':
				return $this->site;

			case 'title':
				return $this->title;

			case 'root':
				return $this->site->root;

			case 'autoback':
				return $this->autoback;

			case 'appearance':
				return $this->appearance;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $key .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}

	/**
	 * Property set magic method
	 * @param $key Property name
	 * @param $value Value to set
	 */
	public function __set($key, $value) {
		switch($key) {
			case 'title':
				$this->title = $value;
				break;

			case 'script':
				$this->script .= $value;
				break;

			case 'autoback':
				$this->autoback = $value;
				break;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $key .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}
	}

	public function setTitle($title) {
		$this->title = $title;
	}

	public function addCSS($css) {
		if(!in_array($css, $this->css)) {
			$this->css[] = $css;
		}
	}

	/**
	 * Add a JavaScript file to be loaded by this page.
	 *
	 * If file does not begin with /, the JavaScript root
	 * is prepended.
	 *
	 * If the file does not end with .js, the JavaScript suffix
	 * is appended.
	 *
	 * @param $js
	 */
	public function addJS($js) {
		if(substr($js, 0, 1) !== '/') {
			$js = $this->site->jsRoot . '/' . $js;
		}

		$length = strlen($js);
		if(substr($js, $length-3) !== '.js') {
			$js .= $this->site->jsSuffix;
		}

		if(!in_array($js, $this->js)) {
			$this->js[] = $js;
		}
	}

	/**
	 * Add JSON data to include on the page.
	 *
	 * Data will be included in a <div id="$id" style="display:none"> tag.
	 *
	 * @param $id
	 * @param $json
	 */
	public function addJSON($id, $json) {
		$this->json[$id] = $json;
	}

	public function add_video() {
		$this->addJS('video');
	}

	/**
	 * Get any installed appearance. If none are
	 * provided, use the default versions.
	 */
	private function getAppearance() {
		$this->appearance = $this->site->appearance;
		if($this->appearance === null) {
			$this->appearance = new Appearance();
		}

		$this->appearance->install($this);
	}

	/**
	 * If a file exists, require it as a function to apply to
	 * this view.
	 *
	 * Example:
	 *
	 * @param $file File relative to root, like /site/login.inc.php
	 */
	public function optionalFileApply($file) {
		if(file_exists($this->site->rootDir . $file)) {
			$function = require($this->site->rootDir . $file);
			if(is_callable($function)) {
				$function($this);
			}
		}
	}

	/**
	 * Add any auxiliary views that are utilized by this type
	 * @param ViewAux $aux Auxiliary view utilized by this page
	 * @return ViewAux The ViewAux object we added
	 */
	public function add_aux(ViewAux $aux) {
		$this->aux[] = $aux;
		$aux->view = $this;
		return $aux;
	}

	/**
	 * Find any auxiliary view of a given type.
	 * @param $type PHP class we are looking for
	 * @return mixed|null
	 */
	public function find_aux($type) {
		foreach ($this->aux as $aux) {
			if ($aux instanceof $type) {
				return $aux;
			}
		}

		return null;
	}

	/**
	 * Add a class to the top-level (body) div.
	 * @param string $cls Class to add
	 */
	public function addBody($cls) {
		$this->body .= ' ' . $cls;
	}

	private $appearance = null; ///< Installed appearance

	private $site;
	private $title = 'Title';   ///< Page title

	private $json = [];     ///< JSON content to include
	private $css = [];      ///< CSS to include
	private $js = [];       ///< Javascript to include
	private $script = '';   ///< Any additional script content
	private $aux = [];      ///< Auxiliary views (attached to view)
	private $body = 'body'; ///< Classes to put in the top level div
	private $autoback = false;  ///< The autoback option
}