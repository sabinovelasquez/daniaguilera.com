import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/components/Detail'
import Grid from '@/components/Grid'
import Maintenance from '@/components/Maintenance'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/maintenance',
      name: 'Maintenance',
      component: Maintenance
    }
  ]
})
