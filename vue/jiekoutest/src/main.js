import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import test_element_ui from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(test_element_ui);
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')