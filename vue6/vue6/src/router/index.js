import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import login from '../views/login.vue'
import test from '../views/test.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: login
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/about.vue')
    }
  },
  {
    path: '/test',
    name: '/test',
    component: test
  }
]

const router = new VueRouter({
  routes
})

export default router
