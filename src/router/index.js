import Vue from 'vue'
import Router from 'vue-router'
import vMain from '@/components/vMain'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'v-main',
      component: vMain
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
