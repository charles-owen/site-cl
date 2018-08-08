/**
 * @file
 * Basic Vue-based site page starter
 */

export const PageVue = function() {
}

PageVue.create = function(sel, title, component) {
    const element = document.querySelector(sel);
    if(element === null) {
        return;
    }

    let template = `<div><site-header :title="title"></site-header>
<page-vue :json="json"></page-vue><site-footer></site-footer>
</div>`;

    const Header = Site.info.header.component();
    const Footer = Site.info.footer.component();

    const json = JSON.parse(element.textContent);

    const store = Site.store;

    new Site.Vue({
        el: element,
        store,
        data: {
            title: title,
            json: json,
        },
        template: template,
        components: {
            'site-header': Header,
            'site-footer': Footer,
            'page-vue': component
        },
        methods: {
            /**
             * Set the site title. This can be used from
             * the child Vue's using this.$parent.setTitle('')
             * @param title Title to set
             */
            setTitle: function(title) {
                this.title = title;
                document.title = Site.info.siteName + ' ' + title;
            }
        }
    })
}