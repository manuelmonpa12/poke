import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favoriteList: []
  },
  mutations: {
    SET_EDITING_OBJECT(state, payload) {
      state[payload.key] = payload.value
    },
  },
  actions: {},
  modules: {}
})