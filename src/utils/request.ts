import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
})
// 请求拦截器
request.interceptors.request.use((config) => {
  return config
})

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    ElMessage.error(error.msg)
    return Promise.reject(error)
  },
)

export default request
