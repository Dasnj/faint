import Vue from 'vue'
import App from './app'

import router from './router'

import '@faint'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
