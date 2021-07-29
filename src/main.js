import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueClipboard from 'vue-clipboard2'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueClipboard)
Vue.config.productionTip = false

window.axios = require('axios')

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
