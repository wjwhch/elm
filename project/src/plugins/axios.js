import Vue from 'vue';
import axios from 'axios';
import store from  './store'

//配置拦截器
// 请求是拦截
axios.interceptors.request.use(function (config) {
  //config 发送请求时携带配置参数
  // 发出之前做一些改变 config.bulala='hehea'
  // console.log('发出之前做一些改变 ')
  // axios.headers
  store.dispatch('UPDATE_LOADING',true)
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 添加响应的拦截
axios.interceptors.response.use(function (response) {
  //response响应体
  // console.log('数据回来之后做一些改变 ')
  store.dispatch('UPDATE_LOADING',false)
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
 

// Vue.use(axios);//安装==全局注册一些vue组件
Vue.prototype.$axios=axios;
Vue.prototype.$http=axios;
window.axios=axios;

// export default axios;
