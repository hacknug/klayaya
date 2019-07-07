<template>
  <g-link class="px-2 py-1 text-gray-700 bg-gray-200 border border-gray-300 hocus:border-gray-500 rounded" :to="url">{{label}}</g-link>
</template>

<script>
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
  },
}
</script>
