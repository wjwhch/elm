<template>
    <div class="user">
        <div class="userHead">
            <div class="headBox">
                <img :src="icon" alt="">
                <p><span>{{nikename}}</span><span @click="logout">注销</span></p>
            </div>
        </div>
        <div class="userPullet">
            <p>
                <span>{{pullet}}元</span>
                <i>钱包</i>
            </p>
            <p>
                <span>{{discount}}个</span>
                <i>优惠</i>
            </p>
            <p>
                <span>{{money}}个</span>
                <i>金币</i>
            </p>
        </div>
    </div>
</template>

<script>
import store from '../plugins/store.js'
import axios from 'axios';
export default {
    data(){
        return{
            pullet:store.state.user.data.pullet,
            discount:store.state.user.data.discount,
            money:store.state.user.data.money,
            nikename:store.state.user.data.nikename,
            icon:baseUrl+store.state.user.data.icon
        }
    },
    beforeRouteEnter(to,from,next){
        if(store.state.user.error==0){
            next()
        }else{
            next('/login')
        }
    },
    methods:{
        logout(){
            axios({url:'/api/logout',method:'PUT'}).then(
                res => {
                    if(res.data.error==0){
                        this.$store.commit('UPDATE_USER',{error:1})
                        localStorage.removeItem('vue_user');
                        this.$router.push('/home')
                    }
                }
            )
        }
    }
}
</script>

<style>
.headBox span{font:900 16px/2px "";color:#000}
.user{background:#9999}
.headBox{background:#0af;display: flex;padding:10px}
.headBox img{width:50px;height:50px;border-radius: 50%;margin:0}
.headBox p{display: flex;flex-direction: column;justify-content: space-around;padding:5px}

.userPullet{display: flex;}
.userPullet p:nth-child(2){margin:0 2px}
.userPullet p{display: flex;flex-direction: column;flex:1;text-align: center;background:#fff;padding:20px 10px}
.userPullet p span{font:900 16px/30px "";color:#0af}
</style>
