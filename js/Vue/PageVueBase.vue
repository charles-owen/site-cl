<!--
@file
Base component for pages.

Provides:
setTitle
this.root
-->

<script>
    export default {
        data: function() {
            return {
                root: Site.root
            }
        },
        methods: {
            setTitle(title) {
                this.$parent.setTitle(title);
            }
        }
    }
</script>
