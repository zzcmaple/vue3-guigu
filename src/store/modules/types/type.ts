export type token = string | null
import type { RouteRecordRaw } from 'vue-router'
export interface useUserStoreType {
  token: token
  menuRoutes: RouteRecordRaw[]
}
