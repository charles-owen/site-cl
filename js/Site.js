// The site-path module must be imported first!
import './site-path.js';
import './polyfills/polyfills.js';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

export {Vue};
export {VueRouter};
export {Vuex};

import NotFoundComponent from './Vue/NotFoundComponent.vue';
export {NotFoundComponent};

import {SiteFactory} from './SiteFactory.js';

const Site = SiteFactory.create();
export {Site};

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
