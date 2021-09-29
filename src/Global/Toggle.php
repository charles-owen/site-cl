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
	/**
	 * Create a heading that can be expanded automatically
	 *
	 * Wraps content that can be expanded for viewing. The content
	 * will always be initially hidden. This functionc an be nested.
	 *
	 * @param string $heading The heading or paragraph text
	 * @param string $tag The tag for the heading (or p for a paragraph)
	 * @param string|null $class Optional class for the toggle tag
	 * @param string $classBlock Optional class to add to the toggle block
	 *
	 * \code{.html}
	< ?php echo Toggle::begin("This is the heading", "h2"); ? >
	// HTML TO TOGGLE
	< ?php echo Toggle::end(); ? >
	 * \endcode
	 * @returns HTML code
	 */
	public static function begin($heading, $tag="h2", $class=null, $classBlock="cl-toggleblock") {
		$c = $class !== null ? " class=\"$class\"" : '';
		$html = <<<HTML
<div class="cl-toggle">
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

	/**
	 * All of the toggle operations in one function call.
	 * @param string $heading Heading passed to Toggle::begin
	 * @param string $tag Tag passed to Toggle::begin
	 * @param string $body Body displayed inside the toggle block
	 * @return string HTML
	 */
	public static function all($heading, $tag, $body) {
		$html = self::begin($heading, $tag);
		$html .= $body;
		$html .= self::end();
		return $html;
	}
}
