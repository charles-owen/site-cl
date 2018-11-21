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
 * @param nav Optional navigation component, like PageNav
 */
PageVue.create = function(sel, title, component, nav) {
    const element = document.querySelector(sel);
    if(element === null) {
        return;
    }

    let navtag = nav !== undefined ? '<page-nav :menu="menu"></page-nav>' : '';
    let template = `<div><site-header :title="title">${navtag}</site-header>
<page-vue :json="json"></page-vue><site-footer></site-footer>
</div>`;

    const Header = Site.info.header.component();
    const Footer = Site.info.footer.component();

    const json = JSON.parse(element.textContent);

    const store = Site.store;

    const components = {
            'site-header': Header,
            'site-footer': Footer,
            'page-vue': component
        };
    if(nav !== undefined) {
        components['page-nav'] = nav;
    }

    let site = Site.Site;

    new Site.Vue({
        el: element,
        site,
        store,
        data: {
            title: title,
            json: json,
            menu: []
        },
        template: template,
        components: components,
        methods: {
            /**
             * Set the site title. This can be used from
             * the child Vue's using this.$parent.setTitle('')
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
}