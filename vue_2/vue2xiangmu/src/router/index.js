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

//路由守卫
router.beforeEach((to, from, next) => {
  console.log(to, from)
  if (to.fullPath != '/') {
    if (sessionStorage.getItem('token') == undefined) {
      return next('/')
    }
  }
  next()
})

export default router