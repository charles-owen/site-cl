<?php
/**
 * @file
 * Example Vue-based page
 * /cl/example/vue
 */

namespace CL\Site\Examples;

use CL\Site\Site;
use CL\Site\View;
use CL\Site\System\Server;
use CL\Course\Member;

/**
 * Student view of an assignment grade
 */
class ExampleVueView extends View {
	/**
	 * ExampleVueView constructor.
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 * @param int $time Current time
	 */
	public function __construct(Site $site, Server $server, $time) {
		parent::__construct($site, ['at-least'=>Member::STUDENT]);

		$this->setTitle('Example Vue-based page');

		$data = [];
		$this->addJSON('cl-example-vue', json_encode($data));
	}
}