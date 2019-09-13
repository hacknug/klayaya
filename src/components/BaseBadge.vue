<template>
  <g-link :data-badge="theme || 'default'" :class="classes.link" :to="url">{{ label }}</g-link>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BaseBadge',
  props: {
    url: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: false,
    },
  },

  computed: {
    ...mapGetters(['getActiveTheme']),

    classes() {
      return {
        link: [
          'inline-block px-2 py-1 border rounded',
          this.theme === 'primary'
            ? 'text-pink-700 bg-pink-200 border-pink-300 hocus:border-pink-500'
            : 'text-gray-700 bg-gray-200 border-gray-300 hocus:border-gray-500',
        ],
      }
    },
  },
}
</script>

<style lang="postcss">
  [data-badge="default"] {
    @nest body[data-theme="light"] & {
      @apply text-light-700 bg-light-200 border-light-300;
      &:matches(:hover, :focus) { @apply border-light-500 };
    }
    @nest body[data-theme="dark"] & {
      @apply text-gray-700 bg-gray-200 border-gray-300;
      &:matches(:hover, :focus) { @apply border-gray-500 };
    }
  }
</style>
