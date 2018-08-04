<?php
/**
 * @file
 * Class that helps to create simple checklists
 */

/**
 * Class that helps to create simple checklists
 *
 * A checklist if a box with items that a user can check off manually.
 * Usage:
 *
 * \code
$checklist = new Checklist();
$checklist->item = 'I have read and understand the <a href="../handbook/index.php" target="_blank">course handbook</a>.';
$checklist->item = 'My program cleans up after itself - it frees any memory it has allocated';
echo $checklist->present();
 * \endcode
 */
class Checklist {

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * item | string | Add an item to the checklist
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'item':
				$this->items[] = $value;
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
	 * Present the checklist
	 * @return string HTML
	 */
	public function present() {
		$html = '<form class="cl-checklist">';

		foreach($this->items as $item) {
			$html .= '<p><input type="checkbox">' . $item . '</p>';
		}

		$html .= '</form>';
		return $html;
	}

	private $items = [];
}