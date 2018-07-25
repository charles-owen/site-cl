import 'video.js/dist/video-js.css';
import './video.scss';

import {VideoFactory} from './VideoFactory.js';

if(global.Video === undefined) {
    global.Video = VideoFactory.create(Site);
}
