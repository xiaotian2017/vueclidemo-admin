import Cookie from 'js-cookie'
export default {
  state: {
    token: ''
  },
  mutations: {
    setToken(state, val) {
      state.token = val
      Cookie.set('token', val)
    },
    clearToken(state) {
      state.token = ''
      Cookie.remove('token')
    },
    // 防止刷新后丢失token，设置获取token的方法
    getToken(state) {
      state.token = Cookie.get('token')
    }
  },
  actions: {}
}
