<template>
  <div>
    <ul class="flex">

      <li
        v-for="(theme, name) in getInactiveThemes"
        class="m-1 bg-gray-800 rounded overflow-hidden"
        :key="name">

        <button class="flex p-2" @click="setActiveTheme(name, $event)">
          <span class="sr-only">{{ `${name} Theme`|capitalize }}</span>
          <component :is="theme.icon"></component>
        </button>

      </li>

    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'ThemeSwitcher',
  methods: {
    setActiveTheme(theme, event) {
      this.$store.commit('SET_ACTIVE_THEME', theme)
      event.currentTarget.blur()
    },
  },
  computed: {
    ...mapState(['themes']),
    ...mapGetters(['getActiveTheme', 'getInactiveThemes']),
  },
}
</script>
