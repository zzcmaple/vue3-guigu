// 常量路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login', // 命名路由
    meta: {
      title: '登录',
      isHidden: true,
    },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'Layout',
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'House',
        },
      },
    ],
    meta: {
      title: '布局',
    },
  },
  {
    name: 'Screen',
    path: '/screen',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '数据查看',
      icon: 'DataLine',
    },
  },
  {
    name: 'Test',
    path: '/test',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        name: 'WorkOrder',
        path: '/test/workOrder',
        component: () => import('@/views/test/workOrder/index.vue'),
        meta: {
          title: '工单',
          icon: 'ChatDotRound',
        },
      },
      {
        name: 'Order',
        path: '/test/order',
        component: () => import('@/views/test/order/index.vue'),
        meta: {
          title: '订单',
          icon: 'ChatLineSquare',
        },
      },
      {
        name: 'AfterSales',
        path: '/test/afterSales',
        component: () => import('@/views/test/afterSales/index.vue'),
        meta: {
          title: '售后',
          icon: 'Compass',
        },
      },
    ],
    meta: {
      title: '测试',
      icon: 'MuteNotification',
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
