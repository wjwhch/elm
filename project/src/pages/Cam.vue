<template>
    <div class="home-nav">   
      <Slider></Slider>
      <List :list='home' :dataName="'home'"></List>
    </div>
</template>

<script>

import Slider from '@/components/Slider.vue'
import List from '@/components/List.vue'
import { mapGetters } from 'vuex'

export default {
  components:{
   Slider,
   List,
  },
  computed:mapGetters([
    'home'
  ]),
  mounted(){
    this.$store.dispatch('UPDATE_HOME',{_page:"",_limit:""})
  }
}
</script>

