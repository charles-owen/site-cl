/**
 * @file
 */

import {Tools} from '../DOM/Tools.js';

export let Toggler = function() {
}


Toggler.install = function () {
    const DURATION = 200;   // Animation duration in milliseconds

    document.body.onclick = (event) => {

        let clickedOn = event.target;
        let parent = clickedOn.parentNode;

        if (clickedOn.tagName === 'A' &&
            parent.tagName === 'P' &&
            parent.parentNode.tagName === 'DIV' &&
            parent.parentNode.classList.contains('toggle')) {
            // We clicked on the link inside of the toggle block
            event.preventDefault();
            toggle(parent);
        }

        if (clickedOn.tagName === 'P' &&
            parent.tagName === 'DIV' &&
            parent.children[0] === clickedOn &&
            parent.classList.contains('toggle')) {
            event.preventDefault();
            toggle(clickedOn);
        }
    }

    function toggle(clickedOn) {
        let parent = clickedOn.parentNode;
        for (let child of parent.children) {
            if (child.tagName === 'DIV') {
                let block = child;
                if (Tools.isVisible(block)) {
                    slideOff(block, clickedOn);
                } else {
                    slideOn(block, clickedOn);
                }
            }
        }

    }

    function slideOn(block, clickedOn) {
        let maxHeight = getHeight(block);

        block.style.transform = 'scaleY(0)';
        block.style.maxHeight = '0';
        block.style.display = 'block';
        let t = 0;

        let last = +new Date();
        let tick = function() {
            let tm  = +new Date();
            t += (tm - last) / DURATION;
            last = tm;

            if(t < 1) {
                block.style.transform = 'scaleY(' + t + ')';
                block.style.maxHeight = '' + (t * maxHeight) + 'px';
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            } else {
                block.style.transform = 'scaleY(1)';
                Tools.addClass(clickedOn, 'visible');
                block.style.maxHeight = 'none'
            }
        };

        tick();
    }

    function slideOff(block, clickedOn) {
        let maxHeight = getHeight(block);

        block.style.transform = 'scaleY(1)';
        block.style.maxHeight = '' + maxHeight + 'px';
        block.style.display = 'block';
        let t = 1;

        let last = +new Date();
        let tick = function() {
            let tm  = +new Date();
            t -= (tm - last) / DURATION;
            last = tm;

            if(t > 0) {
                block.style.transform = 'scaleY(' + t + ')';
                block.style.maxHeight = '' + (t * maxHeight) + 'px';
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            } else {
                block.style.maxHeight = 'none';
                block.style.display = 'none';
                Tools.removeClass(clickedOn, 'visible');
            }
        };

        tick();
    }

    function getHeight(el, gotIt) {
        var el_style      = window.getComputedStyle(el),
            el_display    = el_style.display,
            el_position   = el_style.position,
            el_visibility = el_style.visibility,
            el_max_height = el_style.maxHeight.replace('px', '').replace('%', ''),

            wanted_height = 0;


        // if its not hidden we just return normal height
        if(el_display !== 'none' && el_max_height !== '0') {
            return el.offsetHeight;
        }

        // the element is hidden so:
        // making the el block so we can meassure its height but still be hidden
        el.style.position   = 'absolute';
        el.style.visibility = 'hidden';
        el.style.display    = 'block';

        wanted_height     = el.offsetHeight;
        console.log(wanted_height);

        // reverting to the original values
        el.style.display    = el_display;
        el.style.position   = el_position;
        el.style.visibility = el_visibility;

        return wanted_height;
    };

}




// $('body').on('click', 'div.toggle >:first-child', function(event) {
//     event.preventDefault();
//     var toggle = $(this).parent();
//     var toggleBlock = toggle.children('div');
//     toggleBlock.slideToggle("fast", function() {
//         // After the animation, make the image correct
//         if(toggleBlock.css('display') == 'none') {
//             toggle.children(':first-child').removeClass('visible');
//         } else {
//             toggle.children(':first-child').addClass('visible');
//         }
//
//     });
// });