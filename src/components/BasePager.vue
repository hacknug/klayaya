<template>
  <Pager
    :info="info"
    class="pager-default flex p-3 bg-white shadow rounded"
    linkClass="inline-block mx-1 px-3 py-1 border border-transparent"
    prevLabel="Anterior"
    nextLabel="Siguiente"
  />
</template>

<script>
import { Pager } from 'gridsome'

export default {
  name: 'BasePager',
  props: { info: Object },
  components: { Pager },
}
</script>

<style lang="postcss">
  .pager-default {
    @nest body[data-theme="light"] & { @apply bg-white; }
    @nest body[data-theme="dark"] & { @apply bg-black; }

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
