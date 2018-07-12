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

export let SiteFactory = function() {
}

SiteFactory.create = function() {

    Vue.use(VueRouter);
    Vue.use(Toasted);
    Vue.use(Vuex);

    let Site = function () {

    }


    // Exported vendor components
    Site.Vue = Vue;
    Site.VueRouter = VueRouter;
    Site.Vuex = Vuex;

    // Exported Site components
    Site.Header = Header;
    Site.Footer = Footer;

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

    return Site;
}

