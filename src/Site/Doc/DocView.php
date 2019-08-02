<?php
/**
 * @file
 * View class for the site documentation pages
 */

namespace CL\Site\Doc;

use CL\Site\Site;

/**
 * View class for the site documentation pages
 */
class DocView  extends \CL\Site\View {
	/**
	 * CreditsView constructor.
	 * @param Site $site The Site object
	 */
	public function __construct(Site $site) {
		parent::__construct($site, ['open'=>true]);
	}

	public function header($contentDiv = true, $nav = '') {
        $html = parent::header($contentDiv, $nav);

        if(!$this->home) {
            $root = $this->site->root;
            $html .= \Backto::to("CourseLib", "$root/vendor/cl/site/use");
        }

        return $html;
    }

    public function footer($contentDiv = true) {
        $root = $this->site->root;
        $html = $this->home ? '' : \Backto::to("CourseLib", "$root/vendor/cl/site/use");

        $html .= parent::footer($contentDiv);
        return $html;
    }

    protected $home = false;
}