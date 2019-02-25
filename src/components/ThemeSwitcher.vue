<template>
  <ul class="list-reset flex mt-16 -mx-1">

    <li v-for="theme in themes" :key="theme" :class="[ 'm-1', theme === getActiveTheme ? 'opacity-100' : 'opacity-50' ]">

      <button class="flex p-1 border rounded-full overflow-hidden" @click="setActiveTheme(theme)">
        <span class="clip">{{ theme }}</span>
        <span class="block w-6 h-6 bg-white rounded-full"></span>
      </button>

    </li>

  </ul>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'ThemeSwitcher',
  methods: {
    setActiveTheme(theme) {
      this.$store.commit('SET_ACTIVE_THEME', theme)
    },
  },
  computed: {
    ...mapState(['themes']),
    ...mapGetters(['getActiveTheme']),
  },
}
</script>
