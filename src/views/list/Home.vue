<template>
  <div class="my-content">
      <div class="home-header">
        <span class="iconfont">&#xe623;</span>
        <input type="text" placeholder="试试搜索你的好友的名字"/>
      </div>
       {{list}}
  </div>
</template>

<script>
import {mapActions,mapState}from 'vuex'
export default {
    computed:{
      ...mapState(['list'])
    },
    created(){
      this.getList()
    },
    methods:{
      ...mapActions(['getList'])
    }
}
</script>

<style>

</style>