import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'

import Category from '@/pages/Category'
Vue.use(Router)

let router = new Router({
  // 默认：地址是# 后面的部分（兼容性较好，也不需要做额外的配置，不太美观）
  mode:"hash",

  // mode:"history",

  // 地址没有 #，美观 （不过这种模式要玩好，还需要后台配置支持，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。）
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name:"login",
      alias:"/log",
      component: Login
    },
    // 定义动态路由，:开头后面的是动态路由的参数
    {
      path:"/cate/:cateid",
      // 命名路由,给路由添加name
      name:"cate",
      component:Category
    },
    /* {
      path:"*",
      component:NotFound
    } */
    {
      path:"*",
      redirect:"/"
    }
  ]
})
export default router
