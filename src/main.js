import Vue from 'vue'
import App from './App.vue'
import HighchartsVue from 'highcharts-vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './fullpage.scrollHorizontally.min'
import VueFullPage from 'vue-fullpage.js'


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueFullPage)
Vue.use(HighchartsVue)

new Vue({
  render: h => h(App)
}).$mount('#app')
