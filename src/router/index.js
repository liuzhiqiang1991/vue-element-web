import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

// 必然加载
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/book',
    component: Layout,
    redirect: '/book/list',
    meta: { title: 'book manage', icon: 'documentation' },
    children: [
      {
        path: '/book/create',
        component: () => import('@/views/book/create'),
        meta: { title: 'upload book', icon: 'edit' }
      },
      {
        name: 'bookEdit',
        path: '/book/edit/:fileName',
        component: () => import('@/views/book/edit'),
        meta: { title: '编辑图书', icon: 'edit' }
      },
      {
        path: '/book/list',
        component: () => import('@/views/book/list'),
        meta: { title: 'list book', icon: 'list' }
      }

    ]
  },

  {
    path: '/user',
    component: Layout,
    redirect: '/user/list',
    meta: { title: 'user manage', icon: 'documentation' }, // , roles: ['admin']
    children: [
      {
        path: '/user/create',
        component: () => import('@/views/user/create'),
        meta: { title: 'create user', icon: 'edit' } // , roles: ['admin']
      },
      {
        name: 'userEdit',
        path: '/user/edit/:username',
        component: () => import('@/views/user/edit'),
        meta: { title: '编辑用户信息', icon: 'edit' }
      },
      {
        path: '/user/list',
        component: () => import('@/views/user/list'),
        meta: { title: 'list user', icon: 'list' } // , roles: ['admin']
      }
    ]
  },

  {
    path: '/gis',
    component: Layout,
    redirect: '/gis/list',
    meta: { title: 'gis信息处理', icon: 'documentation' },
    children: [
      {
        path: '/gis/lonlat_distance',
        component: () => import('@/views/gis/lonlat_distance'),
        meta: { title: '经纬度点计算距离', icon: 'edit' }
      },
      {
        path: '/gis/create',
        component: () => import('@/views/gis/create'),
        meta: { title: '新增gis点', icon: 'edit' }
      },
      {
        path: '/gis/list',
        component: () => import('@/views/gis/list'),
        meta: { title: 'gis信息展示', icon: 'list' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
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
