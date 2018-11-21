<script>
	/**
   * Base component for pages.
   * @constructor PageVueBase
   */
  export default {
        data: function() {
            return {
	            /**
               * Site object
               * @memberof PageVueBase
               * @instance
               * @member {Site} site
               */
              site: Site,
	            /**
               * Site root path (Site.root)
               * @memberof PageVueBase
               * @instance
               * @member {string} root
               */
              root: Site.root
            }
        },
        methods: {
	        /**
           * Set the page title
           * @memberof PageVueBase
           * @instance
	         * @param {string} title
	         */
           setTitle(title) {
                this.$parent.setTitle(title);
           },
           setMenu: function(menu) {
	           this.$parent.setMenu(menu);
           },
           getMenu: function() {
           	 return this.$parent.getMenu();
           },
           clearMenu() {
           	  this.setMenu([]);
           },
	         /**
	          * Add an option to the nav2 menu.
	          * @param title Title of the option to add.
	          * @param closure Function to call when selected.
	          */
	         addMenu(title, closure) {
		         let menu = this.getMenu();
		         menu.push({
                name: title,
                click: closure
             });
		         this.setMenu(menu);
	         }
        }
    }
</script>
