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
 * This sets the display style to
 * @param app
 * @param element
 */
VueHelper.mount = function(app, element) {
    app.mount(element)
    element.style.display = 'block'
    element.className = ''
}