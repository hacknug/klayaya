<template>
  <header id="header" :class="classes.header">

    <g-link to="/" class="flex w-32 md:w-64 h-32 md:h-64 -m-3 md:my-0 p-3 rounded-full overflow-hidden">
      <h1 class="clip">{{ $static.metaData.siteName }}</h1>
      <img svg-inline class="block w-full fill-current" src="../assets/img/logo.svg" :alt="$static.metaData.siteName + ' logo'" />
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

    <div class="flex flex-col-reverse md:flex-row justify-between items-end md:items-baseline -m-3 md:mt-auto">
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
  metaData {
    siteName
  }
}
</static-query>

<script>
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
      // TODO: Add config to Vue.prototype: https://discordapp.com/channels/476372673564246017/504192730667155466/552423644073164800
      mediaQuery: () => {
        return window ? window.matchMedia('(min-width: 768px)') : { matches: false }
      },
    }
  },
  computed: {
    classes() {
      return {
        header: [
          'md:sticky top-0',
          'flex flex-wrap md:flex-no-wrap md:flex-col flex-shrink-0 justify-between',
          'w-full md:max-w-xs md:h-screen p-6 md:p-8 text-white bg-black',
        ],
        nav: [
          'order-1 md:order-0',
          this.isMenuOpen || this.mediaQuery.matches ? 'flex flex-col' : 'hidden md:flex',
          'w-full mt-8 md:my-16 text-lg md:text-xl',
        ],
        list: [ 'flex-grow -mx-3 col-gap-4 md:col-gap-0 col-count-2 md:col-count-auto' ],
        item: [ 'flex mb-1' ],
        link: [ 'flex items-center w-full px-3 py-2 rounded overflow-hidden' ],
        icon: [ 'flex-shrink-0 mr-3' ],
        button: [ 'md:hidden m-1 px-3 py-2 leading-none rounded overflow-hidden' ],
      }
    },
  },
}
</script>

<style lang="postcss">
  #header {
    & svg { stroke-width: 1.5px; }

    & :matches(a, button) {
      transition: background-color 0.125s ease-in-out;
      /* &:hover { @apply bg-grey-darkest-25; }
      &:focus { @apply bg-grey-darkest-50; } */
    }

    /* & li a.active.active--exact { @apply bg-grey-darkest-75; } */
  }
</style>
