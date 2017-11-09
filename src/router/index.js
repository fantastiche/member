import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '@/components/PageTransition'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageTransition',
      component: PageTransition,
      children: [{
        path: '/',
        redirect: '/index'
      }, {
        path: '/index',
        name: 'memberInfo',
        component: resolve => require(['../view/memberInfo.vue'], resolve)
      }, {
        path: '/cardGet',
        name: 'cardGet',
        component: resolve => require(['../view/cardGet.vue'], resolve)
      }]
    }
  ]
})
