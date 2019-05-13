import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '@/pages/Home.vue'
// import Login from '@/pages/Login.vue'
import Follow from '@/pages/Follow.vue'
import Column from '@/pages/Column.vue'
import Reg from '@/pages/Reg.vue'
import Shop from '@/pages/Shop.vue'
import Active from '@/pages/Active.vue'
import Cam from '@/pages/Cam.vue'
// import Detail from '@/pages/Detail.vue'
import User from '@/pages/User.vue'

//分片的第一种方式
const Detail = ()=>{return import("../pages/Detail.vue")}


var routes=[{
    path:'/home',component:Home,children:[{
        path:'shop',component:(r)=>{require(['../pages/Shop'],r)}//分片的第二种方式
    },{
        path:'active',component:(r)=>{require(['../pages/Active'],r)}
    },{
        path:'cam',component:(r)=>{require(['../pages/Cam'],r)}
    }],redirect:'/home/cam'
},{
    path:'/login',component:(r)=>{require(['../pages/Login'],r)}
},{
    path:'/follow',component:(r)=>{require(['../pages/Follow'],r)}
},{
    path:'/column',component:(r)=>{require(['../pages/Column'],r)}
},{
    path:'/reg',component:(r)=>{require(['../pages/Reg'],r)}
},{
    path:'/user',component:(r)=>{require(['../pages/User'],r)}
},{
    path:'/detail',component:Detail,name:'detail'
},{
    path:'/discover',component:(r)=>{require(['../pages/Discover'],r)}
},{
    path:'/',redirect:'/home'
}]

let router = new VueRouter({
    mode:'history',
    routes
})

export default router;