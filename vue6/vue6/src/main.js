import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import button_pub from './components/button_pub' //封装组件
import input_pub from './components/input_pub'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component('button-pub', button_pub) // 注册全局button按钮
Vue.component('input-pub', input_pub)
new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')