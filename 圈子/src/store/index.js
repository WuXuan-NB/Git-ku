import Vue from 'vue'
import Vuex from 'vuex'
import Logger from 'vuex/dist/logger'

Vue.use(Vuex)

import home from './modules/home'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home
  },
  plugins:[Logger()]
})
