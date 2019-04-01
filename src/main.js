import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: '386130166125-v2cpu8emeo67gf19o3h80nv9r2od4c6f.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)