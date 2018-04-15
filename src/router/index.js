import Vue from 'vue'
import Router from 'vue-router'
import vMain from '@/components/vMain'
import develop from '@/components/developing'
// 医院概况
import vBasicProfile from '@/components/vBasicProfile'
import vLeader from '@/components/basicProfile/vLeader'
import vleaderDetail from '@/components/basicProfile/vleaderDetail'
import vleaderSpeech from '@/components/basicProfile/vleaderSpeech'
import vleaderDevelopment from '@/components/basicProfile/vleaderDevelopment'
// 科室介绍

import vDepartment from '@/components/vDepartment'
import vDepartmentDetail from '@/components/department/vDepartmentDetail'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'v-main',
      component: vMain
    },
    //医院概况
    {
      path: "/gaikuang/",
      component: vBasicProfile,
      redirect: '/gaikuang/lindao',
      children: [
        {
          path: 'lindao/',
          component: vLeader,
          name: 'v-Profiles',
        },
        {
          path: 'lindao/xaingqing',
          name: "v-basic-profile",
          component: vleaderDetail,
        },
        {
          path: 'zhici',
          component: vleaderSpeech,
        }, {
          path: 'fazhan',
          component: vleaderDevelopment
        }, {
          path: 'jigou',
          component: vleaderDevelopment
        }, {
          path: 'tongxunlu',
          component: vleaderDevelopment
        },
      ]
    },
    //科室介绍
    {
      path: "/keshi/",
      component: vDepartment,
      children: [
        {
          path: 'class/',
          name: "v-department-detail",
          component: vDepartmentDetail
        }
      ]
    },
    {
      path:'/javascript:;',
      component:develop
    }


  ]
})
