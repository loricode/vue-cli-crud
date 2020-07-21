import Vue from 'vue'
import App from './App.vue'
import axios from 'axios' //npm install axios
import 'bootstrap/dist/css/bootstrap.min.css' //npm install bootstrap

Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
