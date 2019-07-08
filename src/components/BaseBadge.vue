<template>
  <g-link :class="classes.link" :to="url">{{ label }}</g-link>
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
          this.getActiveTheme === 'light'
            ? this.theme === 'primary' ? 'text-pink-700 bg-pink-200 border-pink-300 hocus:border-pink-500' : 'text-gray-700 bg-gray-200 border-gray-300 hocus:border-gray-500'
            : this.theme === 'primary' ? 'text-pink-700 bg-pink-200 border-pink-300 hocus:border-pink-500' : 'text-gray-700 bg-gray-200 border-gray-300 hocus:border-gray-500',
        ],
      }
    },
  },
}
</script>
