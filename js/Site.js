const url = require('url');

import Vue from 'vue';
import Toasted from 'vue-toasted';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import {SiteInfo} from './SiteInfo';
import {ApiService} from './ApiService';

import {Autoback} from 'autoback-cl';
import {Header} from './Header/Header';
import {Footer} from './Footer/Footer';
import {Ready} from './Util/Ready';
import {Clock} from './Util/Clock';
import {SlideShow} from './SlideShow/SlideShow';
import {Editor} from './UI/Editor';
import {Polling} from './Polling/Polling';

/**
 * The main Site object.
 *
 * Contains constants and values the are utilized through the site library.
 * @constructor
 */
export const Site = function() {

	// An array of functions to be called when the page is ready.
	const readyList = [];

	/**
	 * Add a function to be called when the page is ready.
	 * @param fn Function to call
	 */
	this.ready = function(fn) {
		readyList.push(fn);
	}

	// Any array of functions to be called to start page operation.
	//
	const startList = [];

	/**
	 * Add a function to be called when the site starts up.
	 *
	 * Start is after ready, since ready is where components load
	 * configurations that may be needed by a starting component.
	 * @param fn Function to call
	 */
	this.start = function(fn) {
		startList.push(fn);
	}


	//
	// Configure Vue
	//
	Vue.use(VueRouter);
	Vue.use(Toasted);
	Vue.use(Vuex);

	/**
	 * The global Vue component. Use this rather than importing to
	 * avoid unconfigured versions.
	 * @type {Vue}
	 */
	this.Vue = Vue;

	/**
	 * The global VueRouter component.
	 * @type {VueRouter}
	 */
	this.VueRouter = VueRouter;

	/**
	 * The global Vuex component
	 * @type {Vuex}
	 */
	this.Vuex = Vuex;

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

	/**
	 * The Vuex store object.
	 * @type {Store}
	 */
	this.store = new Vuex.Store({
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
		if (item.length > 0) {
			pathList2.push(item);
		}
	});

	// Remove /cl/dist from that to get the root path
	let path = '';
	for (let i = 0; i < pathList2.length - 2; i++) {
		path += '/' + pathList2[i];
	}

	/**
	 * Path to the site root on the server
	 * @member {string}
	 */
	this.root = path;

	//
	// Install the API service
	//

	/**
	 * The API service
	 * @type {ApiService}
	 */
	this.api = new ApiService(this.root);

	/** Site information repository
	 * @member {SiteInfo} */
	this.info = new SiteInfo();

	/**
	 * Central toast handler
	 * @param vueobj Some Vue object (often 'this' works)
	 * @param {APIResponse|string} response Response to use to make the toast.
	 */
	this.toast = function (vueobj, response) {
		console.log(response);
		if (typeof(response) === 'string') {
			Vue.toasted.show(response, {
				theme: "primary",
				position: "bottom-center",
				duration: 3000
			});
		} else if (response.errorTitle !== undefined) {
			Vue.toasted.show(response.errorTitle(), {
				theme: "primary",
				position: "bottom-center",
				duration: 3000
			});
		} else {
			console.log(response);
		}
	}

	/**
	 * The polling system.
	 *
	 * Regularly contacts the server at /api/poll
	 * @type {Polling}
	 */
	this.polling = new Polling(this);

	/**
	 * Start the site. The handles the ready and start lists
	 * and installs and starts components once the page is ready.
	 */
	this.startSite = function() {
		Ready.go(() => {
			// Optional header and footer JSON
			let en;
			if( (en = document.getElementById('cl-site')) !== null) {
				let info = JSON.parse(en.textContent);
				this.info.info = info;
				this.info.header = new Header(info.header);
				this.info.footer = new Footer(info.footer);
				this.info.siteName = info.siteName;
			}

			if( (en = document.getElementById('cl-site-time')) !== null) {
				new Clock(en);
			}

			let elements = document.querySelectorAll('div.cl-slideshow');
			for(let element of elements) {
				new SlideShow(element);
			}

			elements = document.querySelectorAll('div.cl-editor');
			for(let element of elements) {
				new Editor(element);
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

			readyList.forEach((fun) => {
				fun();
			})

			startList.forEach((fun) => {
				fun();
			})

			Autoback.install();
			this.polling.start();
		});
	}
}