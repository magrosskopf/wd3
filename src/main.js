import Vue from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import barchart from "d3";

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueFullPage);

new Vue({
  render: h => h(App)
}).$mount('#app')
