import { defineStore } from 'pinia'
import { loginReq } from '@/api/user'
import type { LoginFormData, loginDataType } from '@/api/user/type'
import type { useUserStoreType } from './types/type'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token.ts'
// 引入常量路由
import { constantRoutes } from '@/router/routes.ts'
export const useUserStore = defineStore('User', {
  state: (): useUserStoreType => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoutes,
    }
  },
  actions: {
    async userLogin(formData: LoginFormData) {
      const { code, data }: { code: number; data: loginDataType } =
        await loginReq(formData)
      if (code === 200) {
        this.token = data.token as string
        SET_TOKEN(data.token as string)
      } else {
        return Promise.reject(data.message)
      }
    },
  },
  getters: {},
})
