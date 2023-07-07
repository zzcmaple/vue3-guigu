import { createApp } from 'vue'
import App from './App.vue'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg用到的配置
import 'virtual:svg-icons-register'
// 引入全局组件
import globalComponent from '@/components/index.ts'
// 引入全局样式
import '@/styles/index.scss'
// 引入路由
import router from '@/router/index.ts'
// 引入pinia
import pinia from '@/store/index.ts'
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router)
app.use(pinia)
app.use(globalComponent)
// 将应用挂载到dom中
app.mount('#app')
