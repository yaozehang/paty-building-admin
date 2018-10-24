import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  login: () => import ('@/views/Login'),
  layout: () => import('@/views/Layout'),
  home: () => import('@/views/Home')
}

const router =  new Router({
  routes: [
    {
      path:'/',
      name:'login',
      component:components.login,
      meta:{
        title:'登录'
      }
    },
    {
      path:'/layout',
      component:components.layout,
      redirect:'/layout/home',
      children: [
        {
          path:'home',
          name:'home',
          component:components.home,
          meta:{
            title:'首页'
          }
        }
      ]
    }
  ]
})

export default router
