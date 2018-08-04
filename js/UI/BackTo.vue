<template>
  <p class="cl-backto center"><router-link :to='siteLink'>{{name}}</router-link></p>
</template>

<script>

  export default {
      props: ['link', 'name'],
      data: function() {
          return {
              siteLink: Site.root + this.link
          }

      }
  }

</script>