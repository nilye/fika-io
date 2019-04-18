import Vue from 'vue'
import Router from 'vue-router'
import Home from './page/index.vue'
import ShareToUnlock from './page/share-to-unlock.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/sharetounlock', name: 'sharetounlock', component: ShareToUnlock }
  ]
})
