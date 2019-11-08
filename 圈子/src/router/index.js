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

// const whiteList = ['/login', '/register']
// router.beforeEach((to, from, next)=>{
//   // Nprogress.start();
//   let isLogin = window.sessionStorage.getItem('isLogin');

//   if (!isLogin){
//     if (whiteList.indexOf(to.path) === -1){
//       // Nprogress.done();
//       next('/login');
//     }else{
//       next();
//     }
//   }else{
//     next();
//   }
// })

// router.afterEach((to, from)=>{
//   Nprogress.done();
// })
export default router


