<template>
  <div id="app">
    <loading v-show="bLoading"></loading>
    <Header v-show="bHead"></Header>
    <Nav class="nav" v-show="bNav"></Nav>
    <router-view class="content"></router-view>
    <Footer v-show="bFoot"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'
import { mapGetters } from 'vuex';
import Nav from '@/components/Navbar.vue'


export default {
  name: 'app',
  components: {
    Footer,
    Header,
    Nav
  },
  watch:{
    $route:{
      handler:function(route){
        let path = route.path;
        this.checkPath(path);
        // console.log(path)
      },
      immediate:true
    }
  },
  methods:{
    checkPath(path){
      if(/home|follow|column|dingdan|discover/.test(path)){
        this.$store.dispatch('UPDATE_HEAD',true)
        this.$store.dispatch('UPDATE_FOOT',true)
        this.$store.dispatch('UPDATE_NAV',false)
      }
      if(/home/.test(path)){
        this.$store.dispatch('UPDATE_NAV',true)
      }
      
      if(/detail/.test(path)){
        this.$store.dispatch('UPDATE_HEAD',true)
        this.$store.dispatch('UPDATE_FOOT',false)
        this.$store.dispatch('UPDATE_NAV',false)
      }
      if(/user|login|reg/.test(path)){
        this.$store.dispatch('UPDATE_HEAD',false)
        this.$store.dispatch('UPDATE_FOOT',true)
        this.$store.dispatch('UPDATE_NAV',false)
      }
    }
  },
  computed:mapGetters([
    'bHead','bFoot','bLoading','bNav'
  ]),
  scrollBehavior (to, from, savedPosition) {
		    return {
		      x:0,
		      y:0
		    }
		  }
}
</script>

<style>
.content{position:absolute;left:0;right:0;top:0;bottom:58px;overflow:auto;z-index:-99}
.nav{background:#fff}
</style>
