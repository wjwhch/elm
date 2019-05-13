import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'

Vue.config.productionTip = false
Vue.use(Mint)
import 'mint-ui/lib/style.css';

//引入路由
import router from './plugins/router'

//引入状态管理
import store from  './plugins/store'

//引入axios
import './plugins/axios';

//服务器资源指向
let config = require('../config/config')
window.baseUrl = config.baseUrl.localhost

//同步本地数据->状态仓库state
let user = localStorage.getItem('vue_user');
user && store.commit('UPDATE_USER',JSON.parse(user))

//引入过滤器
import filters from './filters'
Object.keys(filters).forEach(key => Vue.filter(key,filters[key]))

//引入自定义插件 
import loading from './components/loading';//默认会找index.js | package。json所指定的入口模块
Vue.use(loading)//安装

new Vue({
  render: h => h(App),
  router,
  store,
  data:{
    bLoading:true
  }
}).$mount('#app')
