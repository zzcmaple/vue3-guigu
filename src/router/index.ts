// 通过vue-router 实现路由配置
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
import { constantRoutes } from './routes'

const router = createRouter({
  history:
    import.meta.env.NODE_ENV === 'development'
      ? createWebHashHistory()
      : createWebHistory(),
  routes: constantRoutes,
  // 路由切换时的滚动行为
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      // 有保存位置时，直接返回保存位置
      return savedPosition
    } else {
      return { top: 0, left: 0 }
    }
  },
})

export default router
