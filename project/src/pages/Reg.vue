<template>
  <div class="login">
    <div class="logoBox">
      <img src="../assets/images/elm.jpg" class="elm">
    </div>
    <div class="loginBox">
      <span>短信登录</span>
      <div class="ipt">
        <input type="text" class="text" placeholder="手机号" v-model="username" name="username"><i>获取验证码</i>
      </div>
      <div class="ipt">
        <input type="password" class="pass" placeholder="验证码" v-model="password" name="password">
      </div>
    </div>
    <div class="btnBox">
      <input type="button" value="注册" @click="reg">
    </div>
    <div class="routerBox">
      <router-link to="/login">登录</router-link>
        <span></span>
      <router-link to="/reg">注册</router-link>
    </div>
    <input type="file" ref="aa" name="icon">
  </div>
  
</template>

<script>
import store from '../plugins/store'
export default {
   data(){
    return {
      username:"",
      password:"",
      error:false,
    }
  },
  methods:{
    reg(){
      var file = new FormData()
      file.append("username",this.username)
      file.append("password",this.password)
      file.append("icon",this.$refs.aa.files[0])
      // console.log(file.get("username"))
      // this.$store.dispatch(
      //   'UPDATE_REG',
      //   {
      //     file
      //   }
      // )
      axios({
        url:'/api/reg',
        method:"post",
      //   transformRequest:[function(file){
      //   return file
      // }],
      // headers:{'Content-Type':'multipart/form-data'},
        data: file
      }).then(
        data=>{
          console.log(data)
          if(data.data.error==0){
            store.state.user = data.data
            localStorage.setItem('vue_user',JSON.stringify(data));
            this.$router.push('/user')
          }else{
            this.error = true
          }
        }
      )
    }
  }
}
</script>

<style>
@import url(../assets/css/reg.css);
</style>
