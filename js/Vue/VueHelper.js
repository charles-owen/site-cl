/**
 * Vue helper object
 *
 * Provides an easy way to distribute Vue around and provides some
 * useful helper functions.
 *
 * @constructor VueHelper
 */

import {createApp } from 'vue'

export const VueHelper = function() {
}

VueHelper.createApp = createApp

/**
 * Mount a Vue application to an element.
 *
 * If not replacing the element, this function will place the
 * vue inside the element. It then sets the display to block and
 * clears any classes. Since the blocks we replace often have display:none
 * due to containing JSON and have a class to indicate they are to be
 * replaced, this works well for that purpose.
 *
 * If replace is true, the vue application is placed inside the parent
 * of the element, replacing it and any other contents of the parent element.
 *
 * @param app The Vue application object
 * @param element DOM element to mount to
 * @param replace If true, the element is replaced instead of mounting inside it
 */
VueHelper.mount = function(app, element, replace) {
    if(replace) {
        element = element.parentElement
        app.mount(element)
    } else {
        app.mount(element)
        element.style.display = 'block'
        element.className = ''
    }
}