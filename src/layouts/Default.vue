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
  * {
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    word-break: break-all;
    word-break: break-word;
    hyphens: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  small,
  input,
  textarea,
  select,
  button {
    padding: 0;
    color: inherit;
    background-color: transparent;
    font: inherit;
    text-align: inherit;
    text-transform: inherit;
    letter-spacing: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  small {
    font: inherit;
  }

  body[data-theme="light"] { @apply text-gray-900 bg-gray-300; }
  body[data-theme="dark"] { @apply text-gray-100 bg-gray-900; }
</style>
