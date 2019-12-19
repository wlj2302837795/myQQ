import Vue from 'vue'
import Router from 'vue-router'

const News =() =>import('../views/news/news')
const Contacts =() =>import('../views/contacts/contacts')
const Dynamic =() =>import('../views/dynamic/dynamic')
const Spot =() =>import('../views/spot/spot')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/news'
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/contacts',
      component: Contacts
    },
    {
      path: '/dynamic',
      component: Dynamic
    },
    {
      path: '/spot',
      component: Spot
    }
  ]
})
