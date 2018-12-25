import 'video.js/dist/video-js.css';
import './_video.scss';

import videojs from 'video.js';

const VideoPresenter = function(element) {

    // Keep track of all active video presenters on the page
    VideoPresenter.all.push(this);

    //
    // All of this must match values in Video.php
    //
    const FORMAT_LARGE = 'L';
    const FORMAT_MEDIUM = 'M';
    const FORMAT_SMALL = 'S';
    const FORMAT_CUSTOM = 'C';

    const PREFERENCE_VIDEO_SIZE = 'video-size';

    const SIZES = {
        'L': {wid: 1280, hit: 720, style: 'video-large'},
        'M': {wid: 854, hit: 480, style: 'video-medium'},
        'S': {wid: 640, hit: 360, style: 'video-low'}
    };

    let data;

    this.start = function() {
        data = JSON.parse(element.textContent);
        create(data);
    }

    let create = function(data) {
        let div = document.createElement('DIV');
        div.classList.add(data.style);

        element.innerHTML = '';
        element.appendChild(div);

        let video = document.createElement('VIDEO');
        video.classList.add('video-js');
        video.classList.add('vjs-default-skin');
        video.setAttribute('preload', 'auto');
	    video.setAttribute('controls', true);
        video.setAttribute('width', data.wid);
        video.setAttribute('height', data.hit);
        div.appendChild(video);

        let html = `<source src="${data.src}" type='video/mp4'>`;

        for(const caption of data.captions) {
            let language = 'English';
            html += `<track kind="captions" src="${caption.path}" srclang="${caption.lang}" label="${language}" default>`;
        }

        html += `<p class="vjs-no-js">To view this video you must enable JavaScript, and be 
using a web browser that supports HTML5 video</p>`;

	    video.innerHTML = html;

        // <p class="buttons"><a href="javascript:void(0)" onClick="video_format(0, '/')">large</a> <a href="javascript:void(0)" onClick="video_format(1, '/')">medium</a> <a href="javascript:void(0)" onClick="video_format(2, '/')">low bandwidth</a></p></div>

        if(data.controls) {
            let p = document.createElement('P');
            p.classList.add('buttons');
            div.appendChild(p);

            let a=formatButton(FORMAT_LARGE, data);
            p.appendChild(a);

            a=formatButton(FORMAT_MEDIUM, data);
            p.appendChild(a);

            a=formatButton(FORMAT_SMALL, data);
            p.appendChild(a);
        }

        element.style.display = 'block';
        videojs(video);
    }

    let formatButton = (size, data) => {
        let current = data.size;
        let button = document.createElement('BUTTON');
        switch(size) {
            case FORMAT_LARGE:
                button.textContent = 'large';
                break;

            case FORMAT_MEDIUM:
            default:
                button.textContent = 'medium';
                break;

            case FORMAT_SMALL:
                button.textContent = 'low bandwidth';
                break;
        }

        if(size === current) {
            button.classList.add('cl-current');
        }

        button.onclick = (event) => {
            event.preventDefault();
            requestSize(size, data);
        }

        return button;
    }

    let requestSize = (size, data) => {
        Site.api.post('/api/users/preference/' + PREFERENCE_VIDEO_SIZE, {value: size})
            .then((response) => {
                if(response.hasError()) {
                    Site.toast(this, response);
                } else {
                    for(let presenter of VideoPresenter.all) {
                        presenter.resize(size);
                    }

                }

            })
            .catch((error) => {
                Site.toast(this, error);
            });

    }

    this.resize = function(size) {
        if(data.controls) {
            let info = SIZES[size];
            data.wid = info.wid;
            data.hit = info.hit;
            data.size = size;
            data.style = info.style;
            create(data);
        }
    }

    this.start();
}

VideoPresenter.all = [];

export default VideoPresenter;
