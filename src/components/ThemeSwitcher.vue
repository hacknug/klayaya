<template>
  <ul class="list-reset flex mt-16 -m-3">

    <li
      v-for="(theme, name) in themes"
      v-if="name !== getActiveTheme"
      class="m-1 bg-grey-darkest-25 rounded overflow-hidden"
      :key="name">

      <button class="flex p-2" @click="setActiveTheme(name, $event)">
        <span class="clip">{{ `${name} Theme`|capitalize }}</span>
        <component :is="theme.icon"></component>
      </button>

    </li>

  </ul>
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
    ...mapGetters(['getActiveTheme']),
  },
}
</script>
