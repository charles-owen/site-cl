// The site-path module must be imported first!
import './js/site-path.js';
import './js/polyfills/polyfills.js';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

export {Vue};
export {VueRouter};
export {Vuex};

import NotFoundComponent from './js/Vue/NotFoundComponent.vue';
export {NotFoundComponent};

import MaskVue from './js/Vue/Mask.vue';

import {SiteFactory} from './js/SiteFactory.js';

// I export as both Site.Site and Site.site
const Site = SiteFactory.create();
export {Site};

let site = Site;
export {site};

const root = Site.root;
const api = Site.api;
const toast = Site.toast;
const info = Site.info;
const store = Site.store;

export {root};
export {api};
export {toast};
export {info};
export {store};

export {MaskVue}
