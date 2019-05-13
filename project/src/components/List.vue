<template>
  <div class="listBox">
    <ul>
      <li class="listLiBox" v-for="(item,index) of list" :key="item._id">
        <router-link :to="{name:'detail',params:{id:item._id},query:{dataName:dataName}}" class="listFlexBox">
          <div class="listLiLeft">
            <img :src="baseUrl+list[index].detail.icon">
            <div class="listLiCenter">
              <p>{{item.detail.auth}}</p>
              <span><i>{{item.star}}</i><em>4.6月销售{{item.sale}}单</em></span>
              <p><i>￥{{item.start}}起送</i> / <em>配送费￥{{item.peisong}}</em></p>
            </div>
          </div>
          <div class="listLiRight">
            <b>蜂鸟专送</b>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {baseUrl:baseUrl}
  },
  props:['list','dataName'],
  mounted(){
    
  }
}
</script>

<style>
  /* .listBox{margin-top:10px;padding:0 3px} */
  @import url(../assets/css/list.css);
</style>




