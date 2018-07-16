<?php
/**
 * @file
 * View for the notauthorized path.
 */

namespace CL\Site\Views;

use CL\Site\View;
use CL\Site\Site;
use CL\Site\System\Server;

class NotAuthorizedView extends View {
	public function __construct(Site $site, Server $server, array $path) {
		parent::__construct($site, ['open'=>true]);

		$this->title = 'Not Authorized!';

		if(count($path) > 1) {
			$item = strip_tags(urldecode($path[1]));
			switch($item) {
				case 'console':
					$item = 'Site Console';
					break;
			}


			$this->msg = "You are not authorized to access the $item.";
		} else {
			$this->msg = 'You are not authorized to access this content.';
		}
	}

	public function present() {

		$html = <<<HTML
<div class="content">
<div class="full">
<div class="centerbox comp">
<p class="shoutout">$this->msg</p>		
</div></div></div>
HTML;

		return $html;
	}

	private $msg;
}