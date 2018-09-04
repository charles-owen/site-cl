/**
 * Basic Vue-based site inline content starter
 * @constructor InlineVue
 */
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
InlineVue.create = function(sel, component) {
    const element = document.querySelector(sel);
    if(element === null) {
        return;
    }

    let template = `<div>
<page-vue :json="json"></page-vue>
</div>`;

    const json = JSON.parse(element.textContent);

    const store = Site.store;

    const components = {
            'page-vue': component
        };

    new Site.Vue({
        el: element,
        store,
        data: {
            json: json
        },
        template: template,
        components: components,
        methods: {
        }
    })
}