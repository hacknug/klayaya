<template>
  <header id="header" class="sticky pin-t flex flex-col flex-no-shrink w-full md:max-w-xs h-screen p-8 text-white bg-black">

    <g-link :to="{ name: 'home' }" class="flex w-64 h-64 -mx-3 p-3 rounded-full overflow-hidden">
      <h1 class="clip">{{ $static.metaData.siteName }}</h1>
      <img svg-inline svg-sprite class="block fill-current" src="../assets/img/logo.svg" :alt="$static.metaData.siteName + ' logo'" />
    </g-link>

    <nav class="flex flex-col mt-16 text-xl">
      <ul class="list-reset -mx-3">

        <li class="flex mb-1 rounded overflow-hidden">
          <g-link class="flex items-center w-full px-3 py-2" :to="{ name: 'home' }">
            <HomeIcon class="mr-3" /> Inicio
          </g-link>
        </li>

        <li class="flex mb-1 rounded overflow-hidden">
          <g-link class="flex items-center w-full px-3 py-2" :to="{ name: 'store' }">
            <ShoppingBagIcon class="mr-3" /> Tienda
          </g-link>
        </li>

        <li class="flex mb-1 rounded overflow-hidden">
          <g-link class="flex items-center w-full px-3 py-2" :to="{ name: 'releases' }">
            <DiscIcon class="mr-3" /> Trabajos
          </g-link>
        </li>

        <li class="flex mb-1 rounded overflow-hidden">
          <g-link class="flex items-center w-full px-3 py-2" :to="{ name: 'videos' }">
            <VideoIcon class="mr-3" /> Videos
          </g-link>
        </li>

        <li class="flex mb-1 rounded overflow-hidden">
          <g-link class="flex items-center w-full px-3 py-2" :to="{ name: 'archive' }">
            <ArchiveIcon class="mr-3" /> Archivo
          </g-link>
        </li>

        <li class="flex mb-1 rounded overflow-hidden">
          <g-link class="flex items-center w-full px-3 py-2" :to="{ name: 'contact' }">
            <MailIcon class="mr-3" /> Contacto
          </g-link>
        </li>

      </ul>
    </nav>

    <ThemeSwitcher />
    <SocialLinks class="mt-auto" />

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
}
</script>

<style lang="postcss">
#header {
  & svg { stroke-width: 1.5px; }

  & a {
    transition: background-color 0.125s ease-in-out;
    &:hover { @apply bg-grey-darkest-25; }
    &:focus { @apply bg-grey-darkest-50; }
  }

  & li a.active.active--exact { @apply bg-grey-darkest-75; }
}

</style>
