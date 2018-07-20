/**
 * Simple Document ready function, equivalent to jQuery's document ready.
 */

export let Ready = function() {
}

Ready.go = function(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
