import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/main",
    component:()=>import('../views/main.vue'),
    children:[
      {
        path:"/main/home",
        component:()=>import('../views/main/home.vue')
      },
      {
        path:"/main/my",
        component:()=>import('../views/main/my.vue')
      },
      {
        path:"/main",
        redirect:'/main/home'
      }
    ]
  },
  {
    path:"/login",
    component:()=>import('../views/login.vue')
  },
  {
    path:"/zhuce",
    component:()=>import('../views/zhuce.vue')
  },
  {
    path:"/",
    redirect:'/main'
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
