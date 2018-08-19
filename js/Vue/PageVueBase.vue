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
           }
        }
    }
</script>
