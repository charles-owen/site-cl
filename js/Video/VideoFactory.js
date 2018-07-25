import {VideoPresenter} from './VideoPresenter.js';

export let VideoFactory = function() {
}

VideoFactory.create = function(site) {
    let Video = function() {
    }

    site.ready(() => {
        //
        // Detect the passed in user information
        // and add it to the store.
        //
        let elements;
        if( (elements = document.querySelectorAll('div.cl-video')) !== null) {
            for(let element of elements) {
                new VideoPresenter(element);
            }
        }
    });

    return Video;
}