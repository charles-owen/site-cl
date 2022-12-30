/**
 * Basic Vue-based site page starter
 *
 * How to use:
 * @code
 * site.ready(() => {
 *    PageVue.create('div.cl-grade-assignment', 'Assignment Grade', GradeAssignmentVue);
 *    PageVue.create('div.cl-grades', 'Grades', GradesVue);
 * });
 * @endcode
 *
 * @constructor PageVue
 */

import {VueHelper} from './VueHelper'

export const PageVue = function() {
}

/**
 * Create a page in a given component, replacing the provided
 * selector. The selector is assumed to contain JSON data that is
 * then provided to the component in the json property.
 *
 * @param sel Selector for a div to replace with the view.
 * @param title Initial title to apply to the page
 * @param component Component to display (Vue)
 * @param options Page options
 * @return The Vue application component
 *
 * Possible options:
 * nav Optional navigation component, like PageNav
 * router Optional router to install
 */
PageVue.create = function(sel, title, component, options) {
    const element = document.querySelector(sel);
    if(element === null) {
        return;
    }

    const nav = options.nav
    let navtag = nav !== undefined ? '<page-nav :menu="menu"></page-nav>' : '';
    let template = `<div><site-header :title="title">${navtag}</site-header>
<page-vue :json="json"></page-vue><site-footer></site-footer>
</div>`;

    const Header = Site.info.header.component();
    const Footer = Site.info.footer.component();

    const json = JSON.parse(element.textContent);

    const store = Site.store;
    const site = Site.Site;

    const components = {
            'site-header': Header,
            'site-footer': Footer,
            'page-vue': component
        };
    if(nav !== undefined) {
        components['page-nav'] = nav;
    }

    const app = VueHelper.createApp({
        data() {
            return {
                title: title,
                json: json,
                menu: []
            }
        },
        provide() {
            return {
                site: 'hello'
            }

        },
        template: template,
        components: components,
        methods: {
            /**
             * Set the site title. This can be used from
             * the child Vue's using this.$root.setTitle('')
             * @memberof PageVue
             * @instance
             * @param {string} title Title to set
             */
            setTitle: function(title) {
                this.title = title;
                document.title = Site.info.siteName + ' ' + title;
            },
            setMenu: function(menu) {
                this.menu = menu;
            },
            getMenu: function() {
                return this.menu;
            }
        }
    })

    app.config.globalProperties.$site = site
    app.use(store)

    const router = options.router
    if(router) {
        // If we are using a router, install it
        // and wait to mount the page until the
        // router is ready
        app.use(router)

        router.isReady().then(() => {
            VueHelper.mount(app, element)
        })
    }
    else {
        VueHelper.mount(app, element)
    }

    return app
}