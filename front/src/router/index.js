import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/components/Detail'
import Grid from '@/components/Grid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/',
      name: 'Grid',
      component: Grid
    }
  ]
})
