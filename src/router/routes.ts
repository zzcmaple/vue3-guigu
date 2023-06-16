// 常量路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', // 命名路由
    meta: {
      title: '登录',
      isHidden: true,
    },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: 'test',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '测试',
        },
      },
    ],
    meta: {
      title: '布局',
    },
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      isHidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*', // 此处需特别注意置于最底部
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
      isHidden: true,
    },
  },
]
