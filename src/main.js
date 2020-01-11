import Vue from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
import BootstrapVue from 'bootstrap-vue'
import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'
import loadMap from 'highcharts/modules/map.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueFullPage)
Vue.use(HighchartsVue)
loadMap(Highcharts)

new Vue({
  render: h => h(App)
}).$mount('#app')
