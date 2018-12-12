<?php
/**
 * @file
 * View presented by the router when an invalid path is selected.
 */


namespace CL\Site\Views;

use CL\Site\Site;
use CL\Site\View;
use CL\Site\System\Server;

/**
 * View presented by the router when an invalid path is selected.
 */
class InvalidPathView extends View {
	/**
	 * InvalidPathView constructor.
	 * @param Site $site Site object
	 * @param Server $server Server object
	 */
	public function __construct(Site $site, Server $server=null) 	{
		parent::__construct($site, ['open'=>true]);

		$this->title = "Invalid URL";
	}

	/**
	 * Present the page
	 * @return string HTML
	 */
	public function present() {

		return <<<HTML
<div class="full">
<div class="centerbox comp">
<p class="shoutout">Invalid URL</p>		
<p>The requested URL was not found on this server. If you entered the URL manually please check your spelling and try again.</p>
</div></div>
HTML;
	}
}