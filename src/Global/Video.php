<?php
/**
 * @file
 * Class that represents a video to be displayed in a page
 */

use \CL\Users\User;

/** Represents a video to be displayed in a page
 * 
 * Minimum basic solution to display a video:
 * @code
 * $video = new Video('video/sample.mp4', $user);
 * echo $video->present();
 * @endcode
 */
class Video {
	const FORMAT_LARGE = 'L';   ///< Large format constant
	const FORMAT_MEDIUM = 'M';  ///< Medium format constant
	const FORMAT_SMALL = 'S';   ///< Small format constant
	const FORMAT_CUSTOM = 'C';  ///< Custom format/size constant

	const PREFERENCE_VIDEO_SIZE = 'video-size'; ///< User MetaData preference for video size

	/// User MetaData preference for video caption language
	const PREFERENCE_VIDEO_CAPTION = 'video-caption';

	/**
	 * Constructor
	 *
	 * The video file path is a path to a basic file name omitting a size code.
	 * The actual files may include a code. For example, if the path is
	 * sample.mp4, the large file is sample.mp4, medium file is sampleM.mp4
	 * and the low bandwidth version is sampleL.mp4.
	 *
	 * @param string $path Path to the video file. May omit codes for different sizes.
	 * @param User $user User we are displaying the video for (optional)
	 * @param string $size Optional size specifier. If specified, only that size will be used.
	 */
	public function __construct($path, User $user=null, $size=null) {
		$this->user = $user;
		$this->path = $path;
		$this->size = $size;
	}
	
	/**
	 * The HTML for the video presentation
	 * @return string HTML
	 */
	public function present() {
    	$wid = 640;
        $hit = 360;
        $path = '';
		$style = '';
		
		if($this->customWidth !== null && $this->customHeight !== null) {
			$wid = $this->customWidth;
			$hit = $this->customHeight;
			$style = 'video-custom';
			$path = $this->path . '.mp4';
			$usesize = self::FORMAT_CUSTOM;
		} else {

			$wid = 854;
			$hit = 480;
			$style = 'video_medium';
			$path = $this->path . 'M.mp4';

			$usesize = $this->size !== null ? $this->size : Video::FORMAT_MEDIUM;
			if($this->size === null && $this->user !== null) {
				$usesize = $this->user->metaData->get(\CL\Users\User::METADATA_PREFERENCES, 'video-size', self::FORMAT_MEDIUM);
			}

			switch($usesize) {
				case Video::FORMAT_LARGE:
					$wid = 1280;
					$hit = 720;
					$style = 'video-large';
					$path = $this->path . '.mp4';
					break;

				case Video::FORMAT_MEDIUM:
				default:
					$wid = 854;
					$hit = 480;
					$style = 'video-medium';
					$path = $this->path . 'M.mp4';
					break;

				case Video::FORMAT_SMALL:
					$style = 'video-low';
					$wid = 640;
					$hit = 360;
					$path = $this->path . 'L.mp4';
					break;

			}
		}

		$language = $this->user->metaData->get(\CL\Users\User::METADATA_PREFERENCES, self::PREFERENCE_VIDEO_CAPTION, null);

		$json = htmlspecialchars(json_encode([
            'src'=>$path,
	        'style'=>$style,
	        'wid'=>$wid,
	        'hit'=>$hit,
	        'size'=>$usesize,
	        'controls'=>$this->user !== null && $this->size === null && $this->customWidth === null,
	        'captions'=>$this->captions,
			'language'=>$language
        ]), ENT_NOQUOTES);
		
		$html = <<<VID
<div class="cl-video" style="display:none">$json</div>
VID;

		return $html;
    }

	/**
	 * Set a custom presentation size
	 * @param int $width In pixels
	 * @param int $height In pixels
	 */
	public function set_custom_size($width, $height) {
		$this->customWidth = $width;
		$this->customHeight = $height;
	}

	/**
	 * Add a caption file to this video
	 * @param string $path Path to the caption file
	 * @param string $language Language (defaults to 'en');
	 */
	public function caption($path, $language='en') {
		$this->captions[] = ['path'=>$path, 'lang'=>$language];
	}

	private $user;
    private $path;
    private $size;		///< Optional size specification
	private $captions = [];
	
	private $customWidth = null;
	private $customHeight = null;
}

