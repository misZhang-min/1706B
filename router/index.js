import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import First from '../views/home/first.vue'
import Idea from '../views/home/idea.vue'
import School from '../views/home/school.vue'
import Mess from '../views/home/mess.vue'
import Mine from '../views/home/mine.vue'
import Hot from '../views/home/child/hot.vue'
import Guan from '../views/home/child/guanzhu.vue'
import Tui from '../views/home/child/tui.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/home/first',
    name:'first',
    component:First
  },
  {
    path:'/home/idea',
    name:'idea',
    component:Idea
  },
  {
    path:'/home/school',
    name:'school',
    component:School
  },
  {
    path:'/home/fmess',
    name:'mess',
    component:Mess
  },
  {
    path:'/home/mine',
    name:'mine',
    component:Mine
  },
  {
    path:'/home/first/guan',
    name:'guan',
    component:Guan
  },
  {
    path:'/home/first/hot',
    name:'hot',
    component:Hot
  },
  {
    path:'/home/first/tui',
    name:'tui',
    component:Tui
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
