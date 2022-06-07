import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import test from '../views/test.vue'
import jieshou from '../views/jieshou.vue'
import index_user from '../views/index_user.vue'
import index_info from '../views/index_info.vue'
import about from '../views/about.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: login
  },
  {
    path: '/about',
    name: 'about',
    component: about,
    redirect: '/index_user',
    children: [{
        path: '/index_user',
        name: 'index_user',
        component: index_user
      },
      {
        path: '/index_info',
        name: 'index_info',
        component: index_info
      },
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/jieshou',
    name: 'jieshou',
    component: jieshou
  }

]

const router = new VueRouter({
  routes
})

export default router