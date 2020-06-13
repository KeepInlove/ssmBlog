import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
import './icons';
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
// use

Vue.config.productionTip = false
// 配置请求的根路径
axios.defaults.baseURL='http://127.0.0.1:8888/ssmBlg/api/'
// Vue.use(mavonEditor)
Vue.prototype.$axios=axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
