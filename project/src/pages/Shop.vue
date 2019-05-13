<template>
  <List :list='home' :dataName="'home'" class="shopList"></List>
</template>

<script>
import List from '@/components/List.vue'
import { mapGetters } from 'vuex'

export default {
  components:{
    List
  },
  computed:mapGetters([
    'home'
  ]),
  mounted(){
    this.$store.dispatch('UPDATE_HOME',{_page:"",_limit:""})
  }
}
</script>
<style>
@import url(../assets/css/shop.css);
</style>
