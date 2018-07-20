// The site-path module must be imported first!
import './site-path.js';
import './polyfills/polyfills.js';

import {Ready} from './Util/Ready.js';
export {Ready};

import NotFoundComponent from './Vue/NotFoundComponent.vue';
export {NotFoundComponent};

import {SiteFactory} from './SiteFactory.js';

require('icons-cl');

// Use the factory to create the Users object
let Site = global.Site !== undefined ?
    Site :
    SiteFactory.create();

export default Site;
