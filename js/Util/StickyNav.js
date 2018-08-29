/**
 * Make the nav bar 'sticky'. It sticks to the top
 * of the page instead of scrolling off.
 * @param sel Selector to find the nav bar.
 * @constructor
 */
export let StickyNav = function(sel) {
    let navs = [];
    let spacer = document.createElement('div');
    let installed = false;

    let els = document.querySelectorAll(sel);

    for(let i=0; i<els.length;  i++) {
        navs.push({
            nav:  els[i],
            sticky: els[i].offsetTop
        });
    }

    window.addEventListener('scroll', (event) => {
        for(let i=0; i<navs.length; i++) {
            let nav = navs[i];
            if (window.pageYOffset >= nav.sticky) {
                if(!installed) {
                    nav.nav.classList.add("cl-sticky");
                    nav.nav.parentNode.appendChild(spacer);
                    installed = true;
                }
                spacer.style.height = nav.nav.clientHeight + 'px';
            } else {
                if(installed) {
                    nav.nav.classList.remove("cl-sticky");
                    spacer.parentNode.removeChild(spacer);
                    installed = false;
                }
            }
        }
    });

}
