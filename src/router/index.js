import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/list/home'
  },
  {
    path: '/detail',
    component: ()=>import('../views/Detail.vue')
  },
  {
    path:'/geng',
    component:()=>import('../views/Geng.vue')
  },
  {
    path:'/list',
    component:()=>import('../views/List.vue'),
    children:[
      {
        path:'/list/home',
        component:()=>import('../views/list/Home.vue')
      },
      {
        path:'/list/my',
        component:()=>import('../views/list/My.vue')
      }
    ]
  },
  {
    path:'/login',
    component:()=>import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
