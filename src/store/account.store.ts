import { defineStore } from 'pinia'

const useAccountStore = defineStore('account', {
  state: () => {
    return {
      isLogin: false,
      token: '',
      user: {
        name: '',
        position: '',
        menus: '',
      },
    }
  },
  actions: {
    setData(user: { name: string; position: string; menus: string }, token: string) {
      this.user = user
      this.isLogin = true
      this.token = token
      localStorage.setItem('token', token)
    },
  },
})

export default useAccountStore
