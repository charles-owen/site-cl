/**
 * @file
 * Footer presentation and manipulation
 */

let Footer = function(html) {
    this.html = html;

    this.component = function() {
        return {template: this.html}
    }
}

export default Footer;

