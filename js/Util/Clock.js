/**
 * Javascript clock object
 *
 * Replaces an element's textContent with a running clock.
 * @constructor
 */
export let Clock = function(entity) {
    function show() {
        let now = new Date();
        let str = now.toLocaleDateString("en-US", {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit'
        });

        entity.textContent = str;
    }

    show();
    setInterval(show, 1000);
}
