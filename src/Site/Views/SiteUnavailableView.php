<?php
/**
 * @file
 * View for the site not being available.
 */

namespace CL\Site\Views;

use CL\Site\View;
use CL\Site\Site;
use CL\Site\System\Server;

/**
 * View for the not authorized path.
 */
class SiteUnavailableView extends View {
	/**
	 * SiteUnavailableView constructor.
	 * @param Site $site Site object
	 * @param Server $server Server object
	 * @param array $path Path from the router
	 */
	public function __construct(Site $site, Server $server, array $path) {
		parent::__construct($site, ['nouser'=>true]);

        $this->title = 'Site Unavailable!';

        $this->body = <<<HTML
<div class="full">
<div class="centerbox comp">
<p class="shoutout">Site Unavailable</p>		
</div></div>
HTML;


        //
        // Allow for login page customization
        //
        $this->decorApply('unavailable.decor.php');
	}

    /**
     * Property set magic method
     *
     * <b>Properties</b>
     * Property | Type | Description
     * -------- | ---- | -----------
     * after | string | HTML to add after the login form
     * before | string | HTML to add before the login form
     *
     * Plus properties inherited from CL::Site::View
     *
     * @param string $property Property name
     * @param mixed $value Value to set
     */
    public function __set($property, $value) {
        switch($property) {
            case 'before':
                $this->before = $value;
                break;

            case 'body':
                $this->body = $value;
                break;

            case 'after':
                $this->after = $value;
                break;

            default:
                parent::__set($property, $value);
        }
    }


	/**
	 * Present the page
	 * @return string HTML
	 */
	public function present() {
		return $this->before . $this->body . $this->after;
	}

    private $before = '';
    private $after = '';
    private $body;
}