// import Vue from 'vue'
// import Router from 'vue-router'

// // import vMain from '@/components/vMain'
// // import develop from '@/components/developing'

// // 医院概况
// // import vBasicProfile from '@/components/vBasicProfile'
// // import vLeader from '@/components/basicProfile/vLeader'
// // import vleaderDetail from '@/components/basicProfile/vleaderDetail'
// // import vleaderSpeech from '@/components/basicProfile/vleaderSpeech'
// // import vleaderDevelopment from '@/components/basicProfile/vleaderDevelopment'

// // 科室介绍
// // import vDepartment from '@/components/vDepartment'
// // import vDepartmentDetail from '@/components/department/vDepartmentDetail'
// // import vDepartmentList from '@/components/department/vDepartmentList'

// //news 新闻
// // import vNewsCenter from '@/components/vNewsCenter'
// // import vNewDetail from '@/components/news/vNewDetail'
// // import vNewList from '@/components/news/vNewList'

// // //专家
// // import vInfoExports from '@/components/vInfoExports'
// // import vExportDetail from '@/components/exports/vExportDetail'
// // import vExportList from '@/components/exports/vExportList'
// // import vExportPartList from '@/components/exports/vExportPartList'

// // import vGuide from '@/components/vGuide'
// // import vGuideSpeech from '@/components/guide/vGuideSpeech'


// Vue.use(Router);

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       // name: 'v-main',
//       component: resolve  => require(['@/components/vMain'],resolve)
//     },
//     //医院概况
//     {
//       path: "/gaikuang/",
//       component: resolve => require(['@/components/vBasicProfile'],resolve),
//       redirect: '/gaikuang/lindao',
//       children: [
//         {
//           path: 'lindao/',
//           // component: vLeader,
//           component: resolve => require(['@/components/basicProfile/vLeader'],resolve),
//           name: 'v-Profiles',
//         },
//         {
//           path: 'lindao/xaingqing',
//           name: "v-basic-profile",
//           // component: vleaderDetail,
//           component: resolve => require(['@/components/basicProfile/vleaderDetail'],resolve),
//         },
//         {
//           path: 'zhici',
//           // component: vleaderSpeech,
//           component: resolve => require(['@/components/basicProfile/vleaderSpeech'],resolve),
//         }, {
//           path: 'fazhan',
//           // component: vleaderDevelopment
//           component: resolve => require(['@/components/basicProfile/vleaderDevelopment'],resolve),
//         }, {
//           path: 'jigou',
//           // component: vleaderDevelopment,
//           component: resolve => require(['@/components/basicProfile/vleaderDevelopment'],resolve),
//         }, {
//           path: 'tongxunlu',
//           // component: vleaderDevelopment
//           component: resolve => require(['@/components/basicProfile/vleaderDevelopment'],resolve),          
//         },
//       ]
//     },
//     //科室介绍
//     {
//       path: "/keshi/",
//       // component: vDepartment,
//       component: resolve  => require(['@/components/vDepartment'],resolve),
//       redirect: '/keshi/class',
//       children: [
//         {
//           path: 'class/',
//           name: "v-department-detail",
//           // component: vDepartmentDetail
//           component: resolve  => require(['@/components/department/vDepartmentDetail'],resolve),
//         },
//         {
//           path: 'list',
//           // component: vDepartmentList,
//           component: resolve  => require(['@/components/department/vDepartmentList'],resolve),

//         }
//       ]
//     },
//     //news新闻
//     {
//       path: '/news/',
//       // component: vNewsCenter,
//       component: resolve  => require(['@/components/vNewsCenter'],resolve),
//       children: [
//         {
//           path: 'detail',
//           // component: vNewDetail,
//           component: resolve  => require(['@/components/news/vNewDetail'],resolve),

//         },
//         {
//           path: 'list',
//           // component: vNewList,
//           component: resolve  => require(['@/components/news/vNewList'],resolve),
//         }
//       ]
//     },
//     //专家
//     {
//       path: '/zhuanjia',
//       // component: vInfoExports,
//       component: resolve  => require(['@/components/vInfoExports'],resolve),
//       redirect: '/zhuanjia/list',
//       children: [
//         {
//           path: 'list',
//           // component: vExportList,
//           component: resolve  => require(['@/components/exports/vExportList'],resolve),

//         },
//         {
//           path: 'partlist',
//           // component: vExportPartList
//           component: resolve  => require(['@/components/exports/vExportPartList'],resolve),
//         },
//         {
//           path: 'detail',
//           // component: vExportDetail
//           component: resolve  => require(['@/components/exports/vExportDetail'],resolve),
//         }
//       ]
//     },
//     //医生
//     {
//       path: '/yisheng',
//       // component: vInfoExports,
//       component: resolve  => require(['@/components/vInfoExports'],resolve),
//       redirect: '/yisheng/list',
//       children: [
//         {
//           path: 'list',
//           // component: vExportList,
//           component: resolve  => require(['@/components/exports/vExportList'],resolve),
//         },
//         {
//           path: 'partlist',
//           // component: vExportPartList
//           component: resolve  => require(['@/components/exports/vExportPartList'],resolve),
//         },
//         {
//           path: 'detail',
//           // component: vExportDetail
//           component: resolve  => require(['@/components/exports/vExportDetail'],resolve),
//         }
//       ]
//     },
//     //护士
//     {
//       path: '/hushi',
//       // component: vInfoExports,
//       component: resolve  => require(['@/components/vInfoExports'],resolve),
//       redirect: '/hushi/list',
//       children: [
//         {
//           path: 'list',
//           // component: vExportList,
//           component: resolve  => require(['@/components/exports/vExportList'],resolve),
//         },
//         {
//           path: 'partlist',
//           // component: vExportPartList
//           component: resolve  => require(['@/components/exports/vExportPartList'],resolve),
//         },
//         {
//           path: 'detail',
//           // component: vExportDetail
//           component: resolve  => require(['@/components/exports/vExportDetail'],resolve),
//         }
//       ]
//     },

//     //指南
//     {
//       path: '/zhinan/',
//       // component: vGuide,
//       component: resolve  => require(['@/components/vGuide'],resolve),
//       redirect:'/zhinan/list',
//       children: [
//         {
//           path: 'list',
//           // component:vGuideSpeech,
//           component: resolve  => require(['@/components/guide/vGuideSpeech'],resolve),
//         }
//       ]
//     },


//     {
//       path: '/javascript:;',
//       // component: develop
//       component: resolve  => require(['@/components/developing'],resolve),

//     },


//   ]
// })
