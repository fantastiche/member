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
      }, {
        path: '/cardList',
        name: 'cardList',
        component: resolve => require(['../view/cardList.vue'], resolve)
      }, {
        path: '/cardDetail/:type',
        name: 'cardDetail',
        component: resolve => require(['../view/cardDetail.vue'], resolve)
      }, {
        path: '/expenseRecord',
        name: 'expenseRecord',
        component: resolve => require(['../view/expenseRecord.vue'], resolve)
      }, {
        path: '/serveRecord',
        name: 'serveRecord',
        component: resolve => require(['../view/serveRecord.vue'], resolve)
      }]
    }
  ]
})
