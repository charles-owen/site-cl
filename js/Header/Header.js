
/**
 * Header manipulation component
 */

let Header = function(html) {
    this.html = html;

    this.component = function() {
        return {
            template: this.html,
            data: function() {
                return {
                }
            },
            props: {
                title: {
                    required: true
                }
            }
        }
    }

}

export default Header;

