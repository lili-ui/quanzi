<template>
  <div class="my-login">
      <div class="login-header">
          圈子登录
      </div>
      <input type="text" class="tet" v-model="username"  placeholder="用户名"/>
      <input :type="type" class="tet" placeholder="密码" v-model="userpwd"/>
      <span :class="['iconfont',flag?'icon-yanjing':'icon-yanjing_bi']" @click="clickEyes"></span>
      <button class="btn" @click="clickBtn">登录</button>
  </div>
</template>

<script>
import axios from 'axios'
import {mapMutations}from 'vuex'
export default {
    data(){
      return {
        type:'password',
        flag:false,
        username:'',
        userpwd:''
      }
    },
    methods:{
      ...mapMutations(['getUser']),
      clickEyes(){
        this.flag=!this.flag
        if(this.flag){
          this.type='text'
        }else{
          this.type='password'  
        }
        
      },
      clickBtn(){
        if(!this.username.trim()||!this.userpwd.trim()){
            alert('不能为空,请输入内容')
        }else{
          axios.post('/login',{username:this.username,userpwd:this.userpwd}).then(({data})=>{
              if(data.code===0){
                alert(data.msg)
              }else{
                this.getUser(data.data)
                localStorage.user=this.username
                this.$router.push('/list/home')
              }
          })
        }
      }
    }
}
</script>

<style>

</style>