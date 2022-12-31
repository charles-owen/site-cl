/**
 * Basic Vue-based site inline content starter
 * @constructor InlineVue
 */


import {VueHelper} from './VueHelper'


export const InlineVue = function() {
}

/*
 *
 * How to use:

 * site.ready(() => {
 *    InlineVue.create('div.cl-reviews', ReviewsVue);
 * });
 *
 */


/**
 * Create an inline VUE component, replacing the provided
 * selector. The selector is assumed to contain JSON data that is
 * then provided to the component in the json property.
 *
 * @param sel Selector for a div to replace with the view.
 * @param component Component to display (Vue)
 */
InlineVue.create = function (sel, component) {
    const element = document.querySelector(sel);
    if (element === null) {
        return;
    }

    let template = `<div>
<page-vue :json="json"></page-vue>
</div>`;

    const json = JSON.parse(element.textContent);

    const store = Site.store;
    const site = Site.Site;

    const components = {
        'page-vue': component
    };

    const app = VueHelper.createApp({
        data() {
            return {
                json: json
            }
        },
        template: template,
        components: components,
    })

    app.config.globalProperties.$site = site
    app.use(store)

    VueHelper.mount(app, element)
}