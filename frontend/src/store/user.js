import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: localStorage.getItem('user') || null
  }),
  actions: {
    setUser(user) {
      this.user = user
      localStorage.setItem('user', user)
    },
    clearUser() {
      this.user = null
      localStorage.removeItem('user')
    }
  }
})
