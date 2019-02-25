import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeTheme: 'dark',
    themes: ['light', 'dark'],
  },
  mutations: {
    SET_ACTIVE_THEME(state, theme) {
      state.activeTheme = theme
    },
  },
  actions: {

  },
  getters: {
    getActiveTheme: state => state.activeTheme,
  }
})
