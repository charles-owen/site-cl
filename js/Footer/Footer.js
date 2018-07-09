/**
 * @file
 * Footer presentation and manipulation
 */

let Footer = function(json) {
    this.html = json.footer;

    this.component = function() {
        return {template: this.html}
    }
}

export default Footer;

