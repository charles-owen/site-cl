<template>
  <div ref="menu" :class="useClass">
    <slot></slot>
  </div>
</template>

<script>
    /**
     * General-purpose menu system Vue component.
     *
     * Supports simple menus where a click opens and closes a pull-down menu.
     * @example
     * // Include this component
     * import MenuVue from 'site-cl/js/UI/Menu.vue';
     * @example
     * // Add as a component to the Vue:
     * components: {
     *   menuVue: MenuVue
     * },
     * @example
     * // Use in the template
     * <menu-vue v-on:open="select"><a class="float-right"><img :src="root + '/vendor/cl/site/img/menubars.png'" alt="Menu"></a>
     *   <ul>
     *     <li><a>First option</a></li>
     *     <li><a>Second option</a></li>
     *   </ul>
     * </menu-vue>
     * @constructor MenuVue
     */
    export default {
    	  props: ['addClass'],
        data: function () {
            return {
            	useClass: 'cl-menu'
            }
        },
        mounted() {
    	  	  if(this.addClass !== undefined) {
    	  		  this.useClass += ' ' + this.addClass;
            }

            //
            // Collect up the elements
            //
            let links = [];
            let uls = [];
            let open = false;

            for (let child of this.$refs['menu'].children) {
                if (child.tagName === 'A') {
                    links.push(child);
                } else if (child.tagName === 'UL') {
                    uls.push(child);
                }
            }

            let closeListener = (event) => {
                // Did we click on something that is a child of
                // this menu div?
                let element = event.target;
                do {
                    // We are okay with clicks on children of
                    // the pop-up menu
                    if (uls.indexOf(element) >= 0) {
                        break;
                    }

                    if (element === this.$refs['menu']) {
                        return;
                    }

                    element = element.parentElement;
                } while (element !== null);

                closeAll();
            }

            //
            // Close all menus
            //
            let closeAll = function () {
                // This timeout ensures the click on
                // the menu is processed before the menu
                // is hidden.
                setTimeout(() => {
                    for (let ul of uls) {
                        ul.style.display = 'none';
                    }
                }, 100);

                open = false;

                document.removeEventListener('click', closeListener);
                document.removeEventListener('mousedown', closeListener);
            }

            //
            // Click listeners on the links
            //
            for (let link of links) {
                link.addEventListener('click', (event) => {
                    event.preventDefault();

                    // We have clicked on a menu link
                    if (!open) {
                        // Open the menu!
                        open = true;
                        for (let ul of uls) {
                            ul.style.display = 'block';
                        }

                        document.addEventListener('click', closeListener);
                        document.addEventListener('mousedown', closeListener);

                        this.$emit('open');
                    } else {
                        // Close the menu
                        closeAll();
                    }

                });
            }

        }
    }

</script>