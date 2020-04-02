<template>
  <div id="app">
    <Header>
      <Navbar/>
    </Header>
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Navbar from './views/Navbar.vue';
import Header from './views/Header.vue';
import Footer from './views/Footer.vue';
export default {
  components:{
    Navbar,
    Header,
    Footer

  }
}
</script>
<style lang="scss">
@import "./assets/css/blog-post.css"
</style>
