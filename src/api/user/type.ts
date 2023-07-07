// 登录接口的参数类型
export interface LoginFormData {
  userName: string
  password: string
}
export interface loginDataType {
  token?: string
  message?: string
}
export interface loginResData {
  code: number
  data: loginDataType
}
interface userInfoDataType {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
}
interface checkUserDataType {
  checkUser: userInfoDataType
}
// 服务器返回用户信息的数据类型
export interface userInfoResData {
  code: number
  data: checkUserDataType
}
