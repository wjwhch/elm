<template>
    
        <Tabbar id="footer">
            <router-link id="外卖" class="mint-tab-item foot" to='/home'>
                <i class="ftbg1 ftchange ftbg" ></i>
                <span>外卖</span>
            </router-link>
            <router-link id="订单" class="mint-tab-item foot" to="/dingdan">
                <i class="ftbg2 ftchange ftbg"></i>
                 <span>订单</span>
            </router-link>
            <router-link id="发现" class="mint-tab-item foot" to="/discover" >
                <i class="ftbg3 ftchange ftbg"></i>
                 <span>发现</span>
            </router-link>
            <router-link id="我的" class="mint-tab-item foot" to='/user'>
                <i class="ftbg4 ftchange ftbg"></i>
                 <span>我的</span>
            </router-link>
        </Tabbar>
    
</template>

<script>
// import foot from '@/assets/js/footchange.js'
import { Tabbar } from 'mint-ui';
export default {
    components:{
        Tabbar, 
    },
    mounted(){
        // foot()
    }
}
</script>

<style>
@import url(../assets/css/footer.css);
</style>

