import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/components/Detail'
import Grid from '@/components/Grid'
import {Col, Row} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(Col)
Vue.use(Row)

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
