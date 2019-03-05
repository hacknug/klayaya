<template>
  <Pager :info="info"
    :class="classes.pager"
    linkClass="inline-block mx-1 px-3 py-1"
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

    &:matches([aria-label*="Current page"], [aria-label*="Go to page"]) {
      @apply hidden;
      @screen md { @apply block; }
    }

    &:hover { @apply bg-grey-light-25; }
    &:focus { @apply bg-grey-light-50; }

    &.active.active--exact { @apply text-white bg-black; }
  }
}
</style>
