<template>
  <nav class="cl-nav">
    <div>
      <ul class="dividers">
        <li><a :href="homeLink"><span class="home">Home</span></a></li>
        <li v-for="item in menu"><a @click.prevent="item.click()">{{item.name}}</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
      props: ['menu'],
      data: function() {
          return {
              homeLink: Site.root + '/'
          }
      }
  }
</script>