import request from '@/utils/request'
import type { LoginFormData, loginResData, userInfoResData } from './type.js'
enum API {
  LOGIN_URL = '/user/login',
  USER_INFO_URL = '/user/info',
}

export const loginReq = (data: LoginFormData) =>
  request.post<any, loginResData>(API.LOGIN_URL, data)
export const userInfo = () =>
  request.get<any, userInfoResData>(API.USER_INFO_URL)
