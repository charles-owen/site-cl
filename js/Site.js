// The site-path module must be imported first!
import './site-path.js';
import './polyfills/polyfills.js';

import {Ready} from './Util/Ready.js';
export {Ready};

import NotFoundComponent from './Vue/NotFoundComponent.vue';
export {NotFoundComponent};

import {TimeFormatter} from './Util/TimeFormatter.js';
export {TimeFormatter};

import {SiteFactory} from './SiteFactory.js';

// Use the factory to create the Users object
if(global.Site === undefined) {
    global.Site = SiteFactory.create();
}
