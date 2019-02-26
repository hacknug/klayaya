<template>
  <fragment>

    <SiteHeader />
    <main :class="classArray"><slot /></main>

  </fragment>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'

export default {
  components: { SiteHeader },
  computed: {
    classArray() {
      return [
        'flex flex-col w-full px-4 py-8',
        this.$store.state.activeTheme === 'light'
          ? 'bg-grey-lightest'
          : 'bg-grey-darkest',
      ]
    }
  },
}
</script>
