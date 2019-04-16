<?php
/** @file
 * Class with static functions for the standard "Back to" indication on a page
 */
 
/** Simple way to display standard "Back to" indication on a page */
class Backto {

	/** Display the standard Back to link
	 *
	 * Usage:
	 * @code
	 * echo Backto::to("Step 1", "../step1.php");
	 * @endcode
	 *
	 * @param string $text Text to display
	 * @param string $link Where to link to. This will be used verbatim as the
	 * href in the a tag.
	 * @param string $tag The type of tag to wrap this in or null if none
	 * @returns string HTML */
	public static function to($text, $link, $tag='p') {
		global $site;
		$root = $site->root;
		$html = $tag !== null ? '<' . $tag . '>' : "";

		$html .= <<<BACKTO
<a class="cl-backto" href="$link">$text</a>
BACKTO;

		if($tag !== null) {
			$html .= '</' . $tag . '>';
		}

		return $html;
	}
	
	/**
	 * Construct a link to a page what will utilize autoback.
	 *
	 * This create an 'a' tag link.
	 *
	 * Usage:
	 * @code
	 * echo Backto::link("handbook", "../handbook");
	 * @endcode
	 *
	 * @param string $text Text for the link
	 * @param string $link Where to link to. This will be used verbatim as the
	 * href in the a tag, with added parameter to support the autoback
	 * functionality. It should be relative to the current page.
	 * @returns string HTML
	 */
	public static function link($text, $link) {
		return "<a class=\"cl-autoback\" href=\"$link\">$text</a>";
	}

	
	/** Optionally include the back-to link
	 * 
	 * Usage:
	 * @code
	 * echo Backto::autoback();
	 * @endcode
	 * If the page was accessed via a link generated by
	 * Backto::link, this will create a back-to link to 
	 * that page. Otherwise, it generates no code  
	 * @returns string HTML
	 */
	public static function autoback() {
		$html = <<<BACKTO
<div class="cl-autoback"></div>
BACKTO;

		return $html;
	}
}

