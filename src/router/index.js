import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home'
import Detailfilm from '@/views/detailfilm'
import Detailfilm1 from '@/views/detailfilm1'
import Detailfilm2 from '@/views/detailfilm2'
import Detailfilm3 from '@/views/detailfilm3'
import Detailfilm4 from '@/views/detailfilm4'
import Detail from '@/views/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detailfilm',
      name: 'detailfilm',
      component: Detailfilm
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/detailfilm1',
      name: 'detailfilm1',
      component: Detailfilm1
    },
    {
      path: '/detailfilm2',
      name: 'detailfilm2',
      component: Detailfilm2
    },
    {
      path: '/detailfilm3',
      name: 'detailfilm3',
      component: Detailfilm3
    },
    {
      path: '/detailfilm4',
      name: 'detailfilm4',
      component: Detailfilm4
    }
  ]
})
