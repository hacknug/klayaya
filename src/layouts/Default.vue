<template>
  <fragment>

    <SiteHeader />
    <main class="flex flex-col w-full px-4 py-8"><slot /></main>

  </fragment>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'

export default {
  components: { SiteHeader },
  metaInfo() {
    return {
      bodyAttrs: {
        class: [
          'md:flex min-h-screen',
          this.$store.state.activeTheme === 'light'
            ? 'text-black bg-grey-lightest'
            : 'text-white bg-grey-darkest',
          'text-base leading-normal font-sans antialiased'
        ].join(' '),
      },
    }
  },
}
</script>
