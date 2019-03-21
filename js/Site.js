const url = require('url');

import Vue from 'vue';
import Toasted from 'vue-toasted';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import {SiteInfo} from './SiteInfo';
import {ApiService} from './ApiService';
import {APIResponse} from './APIResponse';

import {Autoback} from 'autoback-cl';
import {Header} from './Header/Header';
import {Footer} from './Footer/Footer';
import {Ready} from './Util/Ready';
import {Clock} from './Util/Clock';
import {SlideShow} from './SlideShow/SlideShow';
import {Editor} from './UI/Editor';
import {Polling} from './Polling/Polling';
import {Submitter} from './Forms/Submitter';
import {TimeFormatter} from './TimeFormatter'
import {PageVue} from './Vue/PageVue';
import {Tags} from './Util/Tags';
import {StickyNav} from './Util/StickyNav';
import {LogLevels} from './LogLevels';
import {Sanitize} from './Util/Sanitize';
import {VueDialog} from './Vue/VueDialog';
import PageNav from './Vue/PageNav.vue';
import MaskVue from './Vue/Mask.vue';
import MenuVue from './UI/Menu.vue';

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

	// Array of function to be called when a new message arrives
	const messageListeners = []

	/**
	 * Send a message to all installed message listeners
	 * @param msg Message to send (string)
	 * @param data Data that accompanies message
	 */
	this.message = function(msg, data) {
		for(const fn of messageListeners) {
			fn(msg, data);
		}
	}

	/**
	 * Add a message listener
	 * @param fn Function, accepts parameters (msg, data)
	 */
	this.messageListener = function(fn) {
		messageListeners.push(fn);
	}

	//
	// This Vue mixin will allow the Site object to be available
	// as $site in Vue objects
	//
	Vue.mixin( {
		beforeCreate() {
			const options = this.$options;
			if ( options.site )
				this.$site = options.site;
			else if ( options.parent && options.parent.$site )
				this.$site = options.parent.$site;
		}
	} );

	//
	// This Vue mixin will allow any Dialog object to be available
	// as $dialog in Vue objects
	//
	Vue.mixin( {
		beforeCreate() {
			const options = this.$options;
			if ( options.dialog )
				this.$dialog = options.dialog;
			else if ( options.parent && options.parent.$dialog )
				this.$dialog = options.parent.$dialog;
		}
	} );

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

			elements = document.querySelectorAll('form.cl-submitter');
			for(let element of elements) {
				new Submitter(element);
			}

			let videoElements = document.querySelectorAll('div.cl-video');
			if(videoElements.length > 0) {
				import(/* webpackChunkName: "site.video" */ './Video/VideoPresenter').then((bundle) => {
					let VideoPresenter = bundle.default;
					for(let element of videoElements) {
						new VideoPresenter(this, element);
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

	//
	// Install common library components
	//
	this.Tags = Tags;
	this.TimeFormatter = TimeFormatter;
	this.PageVue = PageVue;
	this.MaskVue = MaskVue;
	this.PageNav = PageNav;
	this.Editor = Editor;
	this.MenuVue = MenuVue;
	this.StickyNav = StickyNav;
	this.APIResponse = APIResponse;
	this.LogLevels = LogLevels;
	this.Sanitize = Sanitize;
	this.VueDialog = VueDialog;
}