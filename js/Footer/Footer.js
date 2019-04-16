/**
 * Footer presentation and manipulation component
 * @constructor
 */
export const Footer = function(html) {
    this.html = html;

    this.component = function() {
        return {template: this.html}
    }
}
