<template>
  <Pager :info="info"
    :class="classes.pager"
    linkClass="inline-block mx-1 px-3 py-1 border border-transparent"
    prevLabel="Anterior"
    nextLabel="Siguiente"
  />
</template>

<script>
import { mapGetters } from 'vuex'
import { Pager } from 'gridsome'

export default {
  name: 'BasePager',
  props: { info: Object },
  components: { Pager },
  computed: {
    ...mapGetters(['getActiveTheme']),
    classes() {
      return {
        pager: [
          'pager-default',
          'flex p-3',
          this.getActiveTheme === 'light' ? 'bg-white' : 'bg-black',
          'shadow rounded',
        ],
      }
    }
  }
}
</script>

<style lang="postcss">
.pager-default {
  & a {
    @apply rounded overflow-hidden;

    transition: background-color 0.125s ease-in-out;

    &:matches(:hover, :focus) { @apply border-gray-700; }

    &:matches([aria-label*="Current page"], [aria-label*="Go to page"]) {
      @apply hidden;
      @screen md { @apply block; }
    }

    &.active.active--exact { @apply border-gray-700 text-gray-900 bg-gray-200; }
  }
}
</style>
