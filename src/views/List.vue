<template>
  <div class="my-list">
      <router-view></router-view>
      <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  components:{
    Footer
  }
}
</script>

<style>

</style>