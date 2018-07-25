<?php
/** @file
 * Class that represents a video to be displayed in a page
 */


/** Represents a video to be displayed in a page
 * 
 * Minimum basic solution to display a video:
 * @code
 * $video = new Video('video/sample.mp4');
 * echo $video->present();
 * @endcode
 */
class Video {
	const FORMAT_LARGE = 'L';
	const FORMAT_MEDIUM = 'M';
	const FORMAT_SMALL = 'S';
	const FORMAT_CUSTOM = 'C';

	const PREFERENCE_VIDEO_SIZE = 'video-size';

	private static $inc = 0;	// Integer so each link is unique
	
	/** Constructor
	 *
	 * The video file path is a path to a basic file name omitting a size code.
	 * The actual files may include a code. For example, if the path is
	 * sample.mp4, the large file is sample.mp4, medium file is sampleM.mp4
	 * and the low bandwidth version is sampleL.mp4.
	 *
	 * @param $path Path to the video file. May omit codes for different sizes.
	 * @param $user User we are displaying the video for (optional)
	 * @param $size Optional size specifier. If specified, only that size will be used.
	 */
	public function __construct($path, \CL\Users\User $user=null, $size=null) {
		$this->user = $user;
		$this->path = $path;
		$this->size = $size;
	}
	
	/** The HTML for the video presentation */
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

        $json = htmlspecialchars(json_encode([
            'src'=>$path,
	        'style'=>$style,
	        'wid'=>$wid,
	        'hit'=>$hit,
	        'size'=>$usesize,
	        'controls'=>$this->user !== null && $this->size === null && $this->customWidth === null
        ]), ENT_NOQUOTES);
		
		$html = <<<VID
<div class="cl-video" style="display:none">$json</div>
VID;

		return $html;
    }	
	
	public function set_custom_size($width, $height) {
		$this->customWidth = $width;
		$this->customHeight = $height;
	}

	private $user;
    private $path;
    private $size;		///< Optional size specification
	
	private $customWidth = null;
	private $customHeight = null;
}

