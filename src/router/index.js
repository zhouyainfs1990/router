import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Find from '@/pages/Find'
import Mine from '@/pages/Mine'
import Order from '@/pages/Order'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import category from '@/pages/category'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      // 根目录地址是一级路由
      path: '/',
      component:Layout,
      children:[{
        path:"index",
        component:Index
      },{
        path:"find",
        component:Find
      },{
        path:"order",
        component:Order
      },{
        path:"mine",
        component:Mine
      },{
        path:"cate/:cateid",
        component:category
      }]
    }, 
    {
      path: '/login',
      component: Login
    },
    
    {
      path:"*",
      redirect:"/index"
    }
  ]
})
export default router
