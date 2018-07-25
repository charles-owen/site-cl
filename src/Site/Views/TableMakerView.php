<?php
/**
 * @file
 * View for the tablemaker page
 */

namespace CL\Site\Views;

use CL\Site\View;
use CL\Site\Site;
use CL\Site\System\Server;

class TableMakerView extends View {
	public function __construct(Site $site, Server $server, $time) {
		parent::__construct($site, ['open'=>true]);

		$this->title = 'Table Maker';
	}

	public function present() {
		$list = '';

		foreach($this->site->plugins as $plugin) {
			$list .= '<p class="center">Subsystem: ' . $plugin->tag() . '</p>';
			$plugin->ensureTables($this->site);
		}

		$html = <<<HTML
<div class="full">
$list
<p class="center">All tables are available...</p>		
</div>
HTML;

		return $html;
	}

	private $msg;
}