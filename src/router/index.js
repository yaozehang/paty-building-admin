import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  login: () => import ('@/views/login'),
  layout: () => import('@/views/layout'),
  home: () => import('@/views/home'),
  adminUser: () => import('@/views/admin'),
  adminAdd: () => import('@/views/admin/add'),
  adminDetail: () => import('@/views/admin/detail'),
  adminEdit: () => import('@/views/admin/add'),
  news: () => import('@/views/news'),
  newsAdd: () => import('@/views/news/add'),
  newsDetail: () => import('@/views/news/detail'),
  newsEdit: () => import('@/views/news/edit'),
  swiper: () => import('@/views/swiper'),
  swiperAdd: () => import('@/views/swiper/add'),
  swiperEdit: () => import('@/views/swiper/edit'),
  editPassword: () => import('@/views/admin/editPassword'),
  topic: () => import('@/views/topic'),
  topicAdd: () => import('@/views/topic/add'),
  topicDetail: () => import('@/views/topic/detail')
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
      name:'layout',
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
        },
        {
          path:'adminUser',
          name:'adminUser',
          component:components.adminUser,
          meta:{
            title:'管理员列表'
          }
        },
        {
          path:'adminAdd',
          name:'adminAdd',
          component:components.adminAdd,
          meta:{
            title:'添加管理员'
          }
        },
        {
          path:'adminDetail',
          name:'adminDetail',
          component:components.adminDetail,
          meta:{
            title:'管理员详情'
          }
        },
        {
          path:'adminEdit',
          name:'adminEdit',
          component:components.adminEdit,
          meta:{
            title:'管理员编辑'
          }
        },
        {
          path:'editPassword',
          name:'editPassword',
          component:components.editPassword,
          meta:{
            title:'修改密码'
          }
        },
        {
          path:'news',
          name:'news',
          component:components.news,
          meta:{
            title:'新闻管理',
          }
        },
        {
          path:'newsAdd',
          name:'newsAdd',
          component:components.newsAdd,
          meta:{
            title:'新闻添加',
          }
        },
        {
          path:'newsDetail',
          name:'newsDetail',
          component:components.newsDetail,
          meta:{
            title:'新闻详情'
          }
        },
        {
          path:'newsEdit',
          name:'newsEdit',
          component:components.newsEdit,
          meta:{
            title:'新闻修改'
          }
        },
        {
          path:'swiper',
          name:'swiper',
          component:components.swiper,
          meta:{
            title:'轮播图列表'
          }
        },
        {
          path:'swiperAdd',
          name:'swiperAdd',
          component:components.swiperAdd,
          meta:{
            title:'轮播图添加'
          }
        },
        {
          path:'swiperEdit',
          name:'swiperEdit',
          component:components.swiperEdit,
          meta:{
            title:'轮播图编辑'
          }
        },
        {
          path:'topic',
          name:'topic',
          component:components.topic,
          meta:{
            title:'讨论列表'
          }
        },
        {
          path:'topicAdd',
          name:'topicAdd',
          component:components.topicAdd,
          meta:{
            title:'发起讨论'
          }
        },
        {
          path:'topicDetail',
          name:'topicDetail',
          component:components.topicDetail,
          meta:{
            title:'讨论详情'
          }
        }
      ]
    }
  ]
})

export default router
