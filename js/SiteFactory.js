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


export let SiteFactory = function() {
}

SiteFactory.create = function() {
    require('toggler-cl');
    require('autoback-cl');
    require('icons-cl');

    Vue.use(VueRouter);
    Vue.use(Toasted);
    Vue.use(Vuex);

    let Site = function () {

    }


    // Exported vendor singleton components
    Site.Vue = Vue;
    Site.VueRouter = VueRouter;
    Site.Vuex = Vuex;

    // An array of function to be called when the page is ready.
    Site.readyList = [];

    Site.ready = function(fn) {
        Site.readyList.push(fn);
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

    let path = '/';
    for(let i=0; i<pathList2.length - 2; i++) {
        path += pathList2[i] + '/';
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

    Ready.go(() => {
        // Optional header and footer JSON
        let en;
        if( (en = document.getElementById('cl-site')) !== null) {
            let info = JSON.parse(en.textContent);
            Site.info = info;
            Site.header = new Header(info.header);
            Site.footer = new Footer(info.footer);
            Site.siteName = info.siteName;
        }

        if( (en = document.getElementById('cl-site-time')) !== null) {
            new Clock(en);
        }


        Site.readyList.forEach((fun) => {
            fun();
        })
    });

    return Site;
}

