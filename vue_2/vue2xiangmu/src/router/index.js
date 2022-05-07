import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import resign from '../views/resign.vue'
import home from '../views/home.vue'

Vue.use(VueRouter)


const routes = [{
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/resign',
    name: 'resign',
    component: resign
  },
  {
    path: '/home',
    name: 'home',
    component: home
  }
]

const router = new VueRouter({
  routes
})

export default router