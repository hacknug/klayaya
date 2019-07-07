import Vue from 'vue'
import Vuex from 'vuex'
import { SunIcon, MoonIcon } from 'vue-feather-icons'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeTheme: 'light', // This will match one of themes.key
    themes: {
      light: { icon: SunIcon },
      dark: { icon: MoonIcon },
    },
  },
  getters: {
    getActiveTheme: (state) => state.activeTheme,
    getInactiveThemes(state) {
      return Object.fromEntries(
        Object.entries(state.themes).filter(
          ([name, theme]) => name !== state.activeTheme
        )
      )
    },
  },
  mutations: {
    SET_ACTIVE_THEME(state, theme) {
      state.activeTheme = theme
    },
  },
  actions: {

  },
})
