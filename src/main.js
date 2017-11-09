// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import Vuex from 'vuex'
import 'lib-flexible'
import router from './router'
import App from './App'
import axios from 'axios'
import vuexi18n from 'vuex-i18n'

Vue.prototype.$http = axios
Vue.use(Vuex)

FastClick.attach(document.body)

Vue.config.productionTip = false
const store = new Vuex.Store({
  modules: {
    i18n: vuexi18n.store
  }
})

Vue.use(vuexi18n.plugin, store)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
