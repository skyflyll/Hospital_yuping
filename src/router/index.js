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
import vDepartmentList from '@/components/department/vDepartmentList'

//news 新闻
import vNewsCenter from '@/components/vNewsCenter'
import vNewDetail from '@/components/news/vNewDetail'
import vNewList from '@/components/news/vNewList'

//专家
import vInfoExports from '@/components/vInfoExports'
import vExportDetail from '@/components/exports/vExportDetail'
import vExportList from '@/components/exports/vExportList'
import vExportPartList from '@/components/exports/vExportPartList'

import vGuide from '@/components/vGuide'
import vGuideSpeech from '@/components/guide/vGuideSpeech'


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
      redirect: '/keshi/class',
      children: [
        {
          path: 'class/',
          name: "v-department-detail",
          component: vDepartmentDetail
        },
        {
          path: 'list',
          component: vDepartmentList
        }
      ]
    },
    //news新闻
    {
      path: '/news/',
      component: vNewsCenter,
      children: [
        {
          path: 'detail',
          component: vNewDetail,
        },
        {
          path: 'list',
          component: vNewList,
        }
      ]
    },
    //专家
    {
      path: '/zhuanjia',
      component: vInfoExports,
      redirect: '/zhuanjia/list',
      children: [
        {
          path: 'list',
          component: vExportList,
        },
        {
          path: 'partlist',
          component: vExportPartList
        },
        {
          path: 'detail',
          component: vExportDetail
        }
      ]
    },
    //医生
    {
      path: '/yisheng',
      component: vInfoExports,
      redirect: '/yisheng/list',
      children: [
        {
          path: 'list',
          component: vExportList,
        },
        {
          path: 'partlist',
          component: vExportPartList
        },
        {
          path: 'detail',
          component: vExportDetail
        }
      ]
    },
    //护士
    {
      path: '/hushi',
      component: vInfoExports,
      redirect: '/hushi/list',
      children: [
        {
          path: 'list',
          component: vExportList,
        },
        {
          path: 'partlist',
          component: vExportPartList
        },
        {
          path: 'detail',
          component: vExportDetail
        }
      ]
    },

    //指南
    {
      path: '/zhinan/',
      component: vGuide,
      redirect:'/zhinan/list',
      children: [
        {
          path: 'list',
          component:vGuideSpeech,
        }
      ]
    },


    {
      path: '/javascript:;',
      component: develop
    },


  ]
})
