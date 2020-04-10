import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Reviews from '../views/Reviews.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
      path: '/reviews',
      name: 'reviews',
      component: Reviews
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
