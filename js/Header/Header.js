
/**
 * Header presentation and manipulation component
 * @constructor
 */
export const Header = function(html) {
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

