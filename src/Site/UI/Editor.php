<?php
/**
 * @file
 * Class that displays and manages a textbox for editing
 */

namespace CL\Site\UI;

/**
 * Class that displays and manages a textbox for editing
 *
 * This is a wrapper for the underlying Javascript object: Editor
 */
class Editor {
	/**
	 * Constructor
	 *
	 * If no name is supplied, the name "editor" will be used
	 * @param string $name Name for the control in the form.
	 */
	public function __construct($name="editor") {
		$this->name = $name;
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * code | boolean | true if editing code (code background and line numbers)
	 * initial | string | Initial contents of the editor
	 * height | string | Height of the editor in CSS units (optional)
	 * minHeight | string | min-height for the editor in CSS units
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'height':
				return $this->height;

			case 'minHeight':
				return $this->minHeight;

			case 'code':
				return $this->code;

			case 'initial':
				return $this->initial;

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
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * code | boolean | true if editing code (code background and line numbers)
	 * initial | string | Initial contents of the editor
	 * height | string | Height of the editor in CSS units (optional)
	 * minHeight | string | min-height for the editor in CSS units
	 * tab | boolean | True if tab key works as a tab in the editor
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
	    switch($property) {
            case 'height':
                $this->height = $value;
                break;

            case 'minHeight':
                $this->minHeight = $value;
                break;

            case 'code':
                $this->code = $value;
                break;

            case 'initial':
                $this->initial = $value;
                break;

		    case 'tab':
		    	$this->tab = $value;
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
	 * Create HTML for the textbox to display
	 * @return string HTML for the textbox
	 */
	public function present() {
		$data = [
			'value'=>$this->initial === null ? '' : $this->initial,
			'code'=>$this->code,
			'height'=>$this->height,
			'name'=>$this->name,
			'tab'=>$this->tab,
			'autoIndent'=>$this->indent,
			'minHeight'=>$this->minHeight
		];

		$json = htmlspecialchars(json_encode($data), ENT_NOQUOTES);
		return '<div class="cl-editor" style="display: none">' . $json . '</div>';
	}

	private $name;      		///< Textbox name and ID
	private $minHeight = null;  ///< Minimum height in pixels
	private $initial = null;    ///< Any initial text
	private $code = false;
	private $height = null;     ///< Optional height specification
	private $tab = false;		///< Use tab as a soft-tab insertion
	private $indent = false;	///< Automatic indentation?
}