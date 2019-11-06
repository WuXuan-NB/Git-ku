import Vue from 'vue'
import VueRouter from 'vue-router'

//一级路由
import Main from '../views/main.vue'
import Detail from '../views/detail.vue'
//二级路由
import Home from '../views/main/home.vue'
import Edu from '../views/main/edu.vue'
import Idea from '../views/main/idea.vue'
import Message from '../views/main/message.vue'
import My from '../views/main/my.vue'
//三级路由
import Type from '../views/main/home/type.vue'

Vue.use(VueRouter)

const routes = [
    {
      path:"/main",
      component:Main,
      children:[
        {
          path:"/main/edu",
          component:Edu
        },
        {
          path:"/main/home",
          component:Home,
          children:[
            {
              path:"/main/home/:type",
              component:Type
            }, {
              path:"/main/home",
              redirect:"/main/home/attention"
            }
          ]
        },
        {
          path:"/main/idea",
          component:Idea
        }, 
        {
          path:"/main/message",
          component:Message
        }, 
        {
          path:"/main/my",
          component:My
        }, {
          path:"/main",
          redirect:"/main/home"
        }
      ]
    },
    {
      path:"/detail/:id?",
      component:Detail
    },{
      path:"/",
      redirect:"/main"
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
