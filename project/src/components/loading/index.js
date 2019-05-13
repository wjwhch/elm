
import Loading from './components/Loading.vue'

export default {
  install:function(Vue){
    Vue.component('loading',Loading);//向全局注册一些组件
  }
}

