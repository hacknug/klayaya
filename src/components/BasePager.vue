<template>
  <Pager :info="info"
    class="flex p-3 bg-white shadow rounded"
    linkClass="inline-block mx-1 px-3 py-1"
    prevLabel="Anterior"
    nextLabel="Siguiente"
  />
</template>

<script>
import { Pager } from 'gridsome'

export default {
  name: 'BasePager',
  props: {
    info: Object,
  },
  components: {
    Pager,
  }
}
</script>

<style lang="postcss">
  a {
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
</style>
