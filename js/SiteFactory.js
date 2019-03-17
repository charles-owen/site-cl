/*
 * Factory object to create the Site file.
 */

import {Site} from './Site';
import Dialog from 'dialog-cl';

/**
 * Factory object to create the Site object
 * @constructor
 */
export let SiteFactory = function() {
}

/**
 * Create and start the Site object.
 * @returns {Site}
 */
SiteFactory.create = function() {
    const site = new Site();

    require('toggler-cl');
    require('icons-cl');

	site.startSite();

	let isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	if(isIE11) {
		site.ready(() => {
			new Dialog.MessageBox('Incompatible Browser',
				`CourseLib is not compatible with Internet Explorer. The preferred browser is Chrome, but most 
            other modern browsers should work including Microsoft Edge.<br><br>
Please thank the people who wrote CKEditor 5, who do not seem to know about Babel...`,
				Dialog.MessageBox.OK, () => {
				});
		});
	}

    return site;
}

