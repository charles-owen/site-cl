/**
 * @file
 * Factory object to create the Site file.
 */

import Vue from 'vue';
import Toasted from 'vue-toasted';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

const url = require('url');

import ApiService from './ApiService.js';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import {Ready} from './Util/Ready.js';
import {Clock} from './Util/Clock.js';
import {SlideShow} from './SlideShow/SlideShow.js';
import {SiteInfo} from './SiteInfo.js';

export let SiteFactory = function() {
}

SiteFactory.create = function() {
    let Site = function () {
    }

    console.log('SiteFactory');

    require('toggler-cl');
    require('autoback-cl');
    require('icons-cl');

    Vue.use(VueRouter);
    Vue.use(Toasted);
    Vue.use(Vuex);

    Site.Vue = Vue;
    Site.VueRouter = VueRouter;
    Site.Vuex = Vuex;

    // Information object
    Site.info = new SiteInfo();

    // An array of functions to be called when the page is ready.
    Site.readyList = [];

    Site.ready = function(fn) {
        Site.readyList.push(fn);
    }

    // Any array of functions to be called to start page operation.
    // Start is after ready, since ready is where components load
    // configurations that may be needed by a starting component.
    Site.startList = [];

    Site.start = function(fn) {
        Site.startList.push(fn);
    }

    //
    // Set up the Vuex store
    //

    const ModuleSite = {
        namespaced: true,
        state: {
            count: 0
        },
        mutations: {
            increment(state) {
                state.count++;
            }
        }
    };

    Site.store = new Vuex.Store({
        modules: {
            'site': ModuleSite
        }
    })

    //
    // Compute the path to the library
    //
    let rootURL = new URL(__webpack_public_path__);
    let pathList = rootURL.pathname.split('/');
    let pathList2 = [];
    pathList.forEach((item) => {
        if(item.length > 0) {
            pathList2.push(item);
        }
    });

    let path = '';
    for(let i=0; i<pathList2.length - 2; i++) {
        path += '/' + pathList2[i];
    }

    Site.root = path;

    //
    // Install the API service
    //
    Site.api = new ApiService(Site.root);

    //
    // Central toast handler
    //
    Site.toast = function(vueobj, response) {
        console.log(response);
        if(typeof(response) === 'string') {
            Vue.toasted.show(response, {
                theme: "primary",
                position: "bottom-center",
                duration: 3000
            });
        } else if(response.errorTitle !== undefined) {
            Vue.toasted.show(response.errorTitle(), {
                theme: "primary",
                position: "bottom-center",
                duration : 3000
            });
        } else {
            console.log(typeof(response));
            console.log(response);
        }

    }

    // function lazy() {
    //     import(/* webpackChunkName: 'site.lazy' */ './Lazy/Lazy.js').then((bundle) => {
    //         let Lazy = bundle.default;
    //         console.log(Lazy);
    //         Lazy();
    //     });
    // }



    Ready.go(() => {
        // Optional header and footer JSON
        let en;
        if( (en = document.getElementById('cl-site')) !== null) {
            let info = JSON.parse(en.textContent);
            Site.info.info = info;
            Site.info.header = new Header(info.header);
            Site.info.footer = new Footer(info.footer);
            Site.info.siteName = info.siteName;
        }

        if( (en = document.getElementById('cl-site-time')) !== null) {
            new Clock(en);
        }

        let elements = document.querySelectorAll('div.cl-slideshow');
        for(let element of elements) {
            new SlideShow(element);
        }


        elements = document.querySelectorAll('div.cl-video');
        if(elements.length > 0) {
            import(/* webpackChunkName: "site.video" */ './Video/VideoPresenter.js').then((bundle) => {
                let VideoPresenter = bundle.default;

                for(let element of elements) {
                    console.log(element);
                    new VideoPresenter(element);
                }
            });

        }

        Site.readyList.forEach((fun) => {
            fun();
        })

        Site.startList.forEach((fun) => {
            fun();
        })
    });

    // lazy();

    return Site;
}

