import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import First from '../views/home/first.vue'
import Mess from '../views/home/mess.vue'
import Idea from '../views/home/idea.vue'
import Big from '../views/home/big.vue'
import My from '../views/home/my.vue'
import Hot from '../views/three/hot.vue'
import Close from '../views/three/close.vue'
import Tui from '../views/three/tui.vue'
import Detail from '../components/Detail/detail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'home',
    redirect:'/home',
    component:Home,
    children:[
      {
        path:'/home/first',
        name:'first',
        component:First,
        children:[
          {
            path:'/home/first/close',
            component:Close
          },
          {
            path:'/home/first/tui',
            component:Tui
          },
          {
            path:'/home/first/hot',
            component:Hot
          }
        ]
      },
      {
        path:'/home/big',
        name:'big',
        component:Big
      },
      {
        path:'/home/mess',
        name:'mess',
        component:Mess
      },
      {
        path:'/home/my',
        name:'my',
        component:My
      },
      {
        path:'/home/idea',
        name:'idea',
        component:Idea
      }
    ]
  },
  {
    path:"/detail/:closeId",
    name:"detail",
    component:Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
