// 封装本地存储数据与读取数据方法
import type { token } from '@/store/modules/types/type.ts'
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
}

export const GET_TOKEN = (): token => {
  return localStorage.getItem('TOKEN')
}
