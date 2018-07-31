<?php
/**
 * @file
 * @brief Abstract base class for auxiliary views.
 */

namespace CL\Site;

/**
 * Abstract base class for auxiliary views.
 *
 * An auxiliary view class is a view that is used by another page view class.
 * A view is for a page. An auxiliary view is for some component used by the
 * page.
 */
abstract class ViewAux {
	/**
	 * Property get magic method
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'view':
				return $this->view;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}

	/**
	 * Property set magic method
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'view':
				$this->view = $value;
				$this->install($this->view);
				break;

			case 'script':
				$this->script .= $value;
				break;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}
	}

	/**
	 * Called when this auxiliary view is installed in a view
	 * @param View $view View we are installing into
	 */
	protected function install(View $view) {
	}

	/**
	 * If a file exists, require it as a function and apply to
	 * this auxiliary view.
	 *
	 * Example:
	 *
	 * @param Site $site Site object
	 * @param string $file File relative to decor directory.
	 */
	public function decorApply(Site $site, $file) {
		$path = $site->rootDir . '/' . $site->decor . '/' . $file;
		if(file_exists($path)) {
			$function = require($path);
			if(is_callable($function)) {
				$function($this);
			}
		}
	}

    /**
     * Get content necessary for the head section of the HTML
     * @return string HTML for content that needs to be added to the heading
     */
    public function head() {
        return '';
    }

    protected $view = null;     ///< View we are attached to
}