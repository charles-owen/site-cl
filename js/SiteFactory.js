/*
 * Factory object to create the Site file.
 */

import {Site} from './Site';

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

    console.log('SiteFactory');

    require('toggler-cl');
    require('icons-cl');

	site.startSite();

    return site;
}

