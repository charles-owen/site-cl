<template>
  <div :class="maskClass"><p><slot></slot></p></div>
</template>

<script>
  /**
   * @file
   * Masking vue.
   *
   * Must be a child of an element with a position setting
   * in CSS. When mask is true, the interface is disabled by
   * an overlay mask.
   */
  export default {
      props: ['mask'],
      computed: {
          maskClass: function() {
              return this.mask ? 'cl-mask mask' : 'cl-mask'
          }
      }
  }
</script>