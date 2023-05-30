import { defineStore } from 'pinia'

export const useUserStore = defineStore('User', {
  state: () => {
    return {
      token: '11111',
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
  },
  getters: {
    getToken: (state) => {
      return state.token + '11111111111'
    },
  },
})
