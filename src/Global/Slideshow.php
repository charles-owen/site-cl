<?php
/** @file
 * Class that implements a basic slide show
 */

/** Implementation of a basic slide show
 *
 * To use:
 * @code
 * $show = new Slideshow('design1/Slide.PNG');
 * $show->present(1, 5);
 * @endcode
 */
class Slideshow {
	/** Constructor
	 *
	 * The path is a path omitting the slide number. For example, if the
	 * path is design1/Slide.PNG, the first slide will be design1/Slide1.PNG
	 *
	 * @param $path The path to the slides */
	public function __construct($path) {
		$this->path = $path;
	}

	/** Create HTML for the actual slide show presentation
	 * @param $first First slide index
	 * @param $last Last slide index
	 * @returns HTML for the slide show */
	public function present($first, $last) {
		$path = $this->path;
//		$dot = strrpos($path, '.');
//		$path1 = substr($path, 0, $dot);
//		$ext = substr($path, $dot, strlen($path) - $dot);
//		$slide1 = $path1 . $first . $ext;
//		$libroot = Course::get()->get_libroot();

		$html = <<<HTML
<div class="cl-slideshow" data-src="$this->path" data-fm="$first" data-to="$last"></div>
HTML;

//
//		$html = <<<HTML
//<p id="$slideid" class="slideshow"><img src="$slide1" alt="Slide"/><br />
//<a class="first"><img src="$libroot/images/trans-start.png" width="25" height="25" alt="First Slide" class="transport"/></a>
//<a class="prev"><img src="$libroot/images/trans-prev.png" width="25" height="25" alt="Previous Slide" class="transport"/></a>
//<a class="next"><img src="$libroot/images/trans-next.png" width="25" height="25" alt="Next Slide" class="transport"/></a>
//<a class="last"><img src="$libroot/images/trans-end.png" width="25" height="25" alt="Last Slide" class="transport"/></a>
//</p>
//<script>
//var $obj = new CourseLib.SlideShow('$path', $first, $last, '$slideid');
//</script>
//HTML;
		return $html;
	}

	private $path;
}
