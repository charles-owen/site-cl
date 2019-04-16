<template>
  <div :class="maskClass"><p v-if="slotDelay"><slot></slot></p></div>
</template>

<script>
  /**
   * Masking Vue component.
   *
   * When enabled, a translucent mask with an optional message
   * is displayed and controls are disabled.
   *
   * Must be a child of an element with a position setting
   * in CSS. When mask is true, the interface is disabled by
   * an overlay mask.
   * @constructor MaskVue
   * @example
   * // Include this component
   * import MaskVue from 'site-cl/js/Vue/Mask.vue';
   * @example
   *      data: function() {
   *        return {
   *            mask: false
   *        }
   *     },
   *     components: {
   *      maskVue: MaskVue
   *     }
   * @example
   * <mask-vue :mask="mask">Sending Email...</mask-vue>
   * @example
   * this.mask = true;  // Enable the mask
   * this.mask = false; // Disable the mask
   */
  export default {
      props: ['mask'],
      data: function() {
      	return {
      		slotDelay: true,
          timer: null
        }
      },
      watch: {
      	mask: function() {
      		if(this.timer !== null) {
      			clearTimeout(this.timer);
      			this.timer = null;
          }

          this.slotDelay = false;
          this.timer = setTimeout(() => {
          	this.slotDelay = true;
          }, 1000);
        }
      },
      computed: {
          maskClass: function() {
              return this.mask ? 'cl-mask mask' : 'cl-mask'
          }
      }
  }
</script>