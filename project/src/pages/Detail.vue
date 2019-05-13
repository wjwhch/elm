<template>
  <div class="detail">
    <div class="detailHead">
        <div class="detailLeft">
         <img :src="baseUrl+detail.data.detail.authIcon" alt="" class="valign">
        </div>
        <div class="detailMiddle">
            <h3>{{detail.data.title}}</h3>
            <h4>{{detail.data.sub_title}}</h4>
            <p>作者：{{detail.data.detail.auth}}</p>
            <b>{{detail.data.time | date}}</b>
        </div>
        <div class="detailRight">
            <i><img src="../assets/images/fenxiang.png"></i>
            <span><img src="../assets/images/dianzan.png"><em></em></span>
        </div>
    </div>
    <div class="detailFoot">
        <p>{{detail.data.detail.content}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex' 
export default {
    data(){return {
        error:false,
        baseUrl:baseUrl}
    },
    computed:mapGetters([
        'detail'
    ]),
    mounted(){
        let dataName = this.$route.query.dataName
        let id = this.$route.params.id
        this.$store.dispatch('UPDATE_DETAIL',{dataName,id})
    }
}
</script>


<style>
@import url(../assets/css/detail.css);
</style>
