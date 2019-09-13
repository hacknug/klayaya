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
        'data-theme': this.$store.state.activeTheme,
        'class': 'md:flex min-h-screen text-gray-900 bg-gray-300 text-sm md:text-base leading-normal font-sans antialiased',
      },
    }
  },
}
</script>

<style lang="postcss">
  body[data-theme="light"] { @apply text-gray-900 bg-gray-300; }
  body[data-theme="dark"] { @apply text-gray-100 bg-gray-900; }
</style>
