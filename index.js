// The site-path module must be imported first!
import './js/site-path.js';
import './js/polyfills/polyfills.js';

import {SiteFactory} from './js/SiteFactory.js';

// I export as both Site.Site and Site.site
const Site = SiteFactory.create();

global.Site = Site;
Site.Site = Site;
Site.site = Site;
