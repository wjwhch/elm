<template>
  <div class="login">
    <div class="logoBox">
      <img src="../assets/images/elm.jpg" class="elm">
    </div>
    <div class="loginBox">
      <span>短信登录</span>
      <div class="ipt">
        <input type="text" class="text" placeholder="手机号" v-model="username">
      </div>
      <div class="ipt">
        <input type="password" class="pass" placeholder="密码" v-model="password">
      </div>
    </div>
    <div class="btnBox">
      <input type="button" value="登录" @click="login">
    </div>
    <div class="routerBox">
      <router-link to="/login">登录</router-link>
        <span></span>
      <router-link to="/reg">注册</router-link>
    </div>
  </div>
  
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  data(){
    return {
      username:"",
      password:"",
      error:false
    }
  },
  methods:{
    login(){
      this.$store.dispatch(
        'UPDATE_USER',
        {
          username:this.username,
          password:this.password
        }
      ).then(
        data=>{
          if(data.error==0){
            localStorage.setItem('vue_user',JSON.stringify(data));
            this.$router.push('/user')
          }else{
            this.error = true
          }
        }
      )
    }
  },
  mounted(){
    console.log()
  }
}
</script>

<style>
@import url(../assets/css/login.css);
</style>
