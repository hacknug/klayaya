<template>
  <header id="header" :class="classes.header">

    <g-link to="/" class="md:w-64 md:h-64 md:my-0 hover:border-white flex w-32 h-32 p-3 -m-3 overflow-hidden border border-transparent rounded-full">
      <h1 class="sr-only">{{ $static.metadata.siteName }}</h1>
      <img svg-inline class="block w-full fill-current" src="../assets/img/logo.svg" :alt="$static.metadata.siteName + ' logo'" />
    </g-link>

    <nav :class="classes.nav">
      <ul :class="classes.list">
        <li :class="classes.item"><g-link :class="classes.link" to="/"><HomeIcon :class="classes.icon" /> Inicio</g-link></li>
        <li :class="classes.item"><g-link :class="classes.link" to="/store"><ShoppingBagIcon :class="classes.icon" /> Tienda</g-link></li>
        <li :class="classes.item"><g-link :class="classes.link" to="/contact"><MailIcon :class="classes.icon" /> Contacto</g-link></li>
        <li :class="classes.item"><g-link :class="classes.link" to="/releases"><DiscIcon :class="classes.icon" /> Trabajos</g-link></li>
        <li :class="classes.item"><g-link :class="classes.link" to="/videos"><VideoIcon :class="classes.icon" /> Videos</g-link></li>
        <li :class="classes.item"><g-link :class="classes.link" to="/archive"><ArchiveIcon :class="classes.icon" /> Archivo</g-link></li>
      </ul>
    </nav>

    <div class="md:flex-row md:items-baseline md:mt-auto flex flex-col-reverse items-end justify-between -m-3">
      <SocialLinks />
      <div class="flex">
        <ThemeSwitcher />
        <button @click="isMenuOpen = !isMenuOpen" :class="classes.button">Menu</button>
      </div>
    </div>

  </header>
</template>

<static-query>
query Home {
  metadata {
    siteName
  }
}
</static-query>

<script>
import { mapGetters } from 'vuex'
import { HomeIcon, ShoppingBagIcon, DiscIcon, VideoIcon, ArchiveIcon, MailIcon } from 'vue-feather-icons'

import ThemeSwitcher from '~/components/ThemeSwitcher.vue'
import SocialLinks from '~/components/SocialLinks.vue'

export default {
  name: 'SiteHeader',
  components: {
    HomeIcon, ShoppingBagIcon, DiscIcon, VideoIcon, ArchiveIcon, MailIcon,
    ThemeSwitcher, SocialLinks,
  },
  data() {
    return {
      isMenuOpen: false,
      // TODO: Add config to Vue.prototype
      // https://discordapp.com/channels/476372673564246017/504192730667155466/552423644073164800
      mediaQuery: () => {
        return window ? window.matchMedia('(min-width: 768px)') : { matches: false }
      },
    }
  },
  computed: {
    ...mapGetters(['getActiveTheme']),

    classes() {
      return {
        header: [
          'md:sticky top-0',
          'flex flex-wrap md:flex-no-wrap md:flex-col flex-shrink-0 justify-between',
          'w-full md:max-w-xs md:h-screen p-4 md:p-8 text-white bg-gray-900',
        ],
        nav: [
          'order-1 md:order-0',
          this.isMenuOpen || this.mediaQuery.matches ? 'flex flex-col' : 'hidden md:flex',
          'w-full mt-8 md:my-16 text-base md:text-xl',
        ],
        list: [ 'flex-grow -mx-1 col-gap-4 md:col-gap-0 col-count-2 md:col-count-auto' ],
        item: [ 'flex mb-2' ],
        link: [ 'flex items-center w-full p-2 border border-transparent rounded overflow-hidden' ],
        icon: [ 'flex-shrink-0 mr-3' ],
        button: [ 'md:hidden m-1 px-3 py-2 leading-none rounded overflow-hidden' ],
      }
    },
  },
}
</script>

<style lang="postcss">
  #header {
    @nest body[data-theme="light"] & { @apply bg-gray-900; }
    @nest body[data-theme="dark"] & { @apply bg-black; }

    & svg {
      stroke-width: 1.5px;
    }

    & :matches(a, button) {
      transition:
        background-color 0.125s ease-in-out,
        border-color 0.125s ease-in-out;

      &:matches(:hover, :focus) {
        @apply bg-gray-800-50;
      }
    }

    & li a.active.active--exact {
      @apply bg-gray-800-75;
    }
  }
</style>
