import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      token: '',
    },
  },
  mutations: {},
  actions: {
    FedLogOut() {
      // 这里处理退出的操作，
      // 比如清除token,清除用户信息,回到登陆页
    },
  },
  modules: {},
})
