<?php
/**
 * @file
 * Class that creates a toggle block.
 *
 * Notice: Global namespace!
 */
 
/**
 * Class that creates a toggle block.
 * 
 * A toggle block is a block of content that can be
 * expanded for viewing. 
 */
class Toggle {
	private static $headingid = 0;
	
	/**
	 * Create a heading that can be expanded automatically
	 *
	 * Wraps content that can be expanded for viewing. The content
	 * will always be initially hidden. This functionc an be nested.
	 *
	 * @param $heading The heading or paragraph text
	 * @param $tag The tag for the heading (or p for a paragraph)
	 * @param $class Optional class for the toggle tag
	 * @param $classBlock Optional class to add to the toggle block
	 *
	 * \code{.html}
	< ?php echo Toggle::begin("This is the heading", "h2"); ? >
	// HTML TO TOGGLE
	< ?php echo Toggle::end(); ? >
	 * \endcode
	 * @returns HTML code
	 */
	public static function begin($heading, $tag="h2", $class=null, $classBlock="toggleblock") {
/* 		$root = get_root();

		$html = "";
		
		self::$headingid++;
		$id = "toggle_" . self::$headingid;
		$idicon = $id . "icon";
		$img = $root . "/lib/images/plus.png";
		if($tag !== "" && $tag !== null) {
			$html .= "<$tag";
			if($class !== null) {
				$html .= " class=\"$class\"";
			}
			
			$html .= '>';
		}
		
		$html .= <<<HEADING
<a href="#" onclick="toggle('$id', '$root'); return false">
<img alt="Collapse" style="border-width:0" height="16" src="$img" width="16" id="$idicon"/></a>&nbsp;$heading
HEADING;
		if($tag != "") {
			$html .= "</$tag>";
		}
		
		$html .= <<<HEADING
<div id="$id" class="$classBlock" style="display:none">
HEADING;
*/

		$c = $class !== null ? " class=\"$class\"" : '';
		$html = <<<HTML
<div class="toggle">
  <$tag$c><a>$heading</a></$tag>
  <div class="$classBlock">
HTML;

		return $html;
	}
	
	/**
	 * End of the heading toggle section
	 *
	 * Every Toggle::begin() requires a matching Toggle::end()
	 */
	public static function end() {
		return "</div></div>";
	}
	
	public static function all($heading, $tag, $body) {
		$html = self::begin($heading, $tag);
		$html .= $body;
		$html .= self::end();
		return $html;
	}

	public static function set_id($id) {
		self::$headingid = $id;
	}
}
