import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '首页',
        icon: 'dashboard',
        affix: true
      }
    }]
  },

  // {
  //   path: '/system',
  //   component: Layout,
  //   redirect: '/sysUserList',
  //   name: 'system',
  //   meta: { title: '系统管理', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: '/sysUserList',
  //       name: 'sysUserList',
  //       component: () => import('@/views/system/sysUserList'),
  //       meta: { title: '员工管理', icon: 'el-icon-user' }
  //     },
  //     {
  //       path: '/sysRoleList',
  //       name: 'sysRoleList',
  //       component: () => import('@/views/system/sysRoleList'),
  //       meta: { title: '角色管理', icon: 'el-icon-s-data' }
  //     },
  //     {
  //       path: '/sysMenuList',
  //       name: 'sysMenuList',
  //       component: () => import('@/views/system/sysPermissionList'),
  //       meta: { title: '权限管理', icon: 'el-icon-s-claim' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/park',
  //   component: Layout,
  //   redirect: '/parkList',
  //   name: 'park',
  //   meta: { title: '车位管理', icon: 'el-icon-s-help' },
  //   alwaysShow: true,
  //   children: [
  //     {
  //       path: '/parkList',
  //       name: 'parkList',
  //       component: () => import('@/views/park/parkList'),
  //       meta: { title: '车位管理', icon: 'el-icon-user' }
  //     }
  //   ]
  // },

  // {
  //   path: '/upload',
  //   component: Layout,
  //   redirect: '/single',
  //   name: 'upload',
  //   meta: { title: '上传管理', icon: 'el-icon-s-help' },
  //   alwaysShow: true,
  //   children: [
  //     {
  //       path: 'single',
  //       name: 'single',
  //       component: () => import('@/views/upload/single'),
  //       meta: { title: '单一文件上传', icon: 'el-icon-user' }
  //     },
  //     {
  //       path: 'base64',
  //       name: 'base64',
  //       component: () => import('@/views/upload/base64'),
  //       meta: { title: 'base64上传', icon: 'el-icon-user' }
  //     },
  //     {
  //       path: 'thumbnail',
  //       name: 'thumbnail',
  //       component: () => import('@/views/upload/thumbnail'),
  //       meta: { title: '缩略图处理', icon: 'el-icon-user' }
  //     },
  //     {
  //       path: 'el-upload',
  //       name: 'elUpload',
  //       component: () => import('@/views/upload/el-upload'),
  //       meta: { title: 'el-upload', icon: 'el-icon-user' }
  //     }
  //   ]
  // },

  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }]
  }

  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
