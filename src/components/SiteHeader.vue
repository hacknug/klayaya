<template>
  <header id="header" class="sticky pin-t flex flex-col flex-no-shrink w-full md:max-w-xs h-screen p-8 text-white bg-black">

    <g-link :to="{ name: 'home' }" class="flex w-64 h-64 -m-3 p-3 rounded-full overflow-hidden">
      <h1 class="clip">{{ $static.metaData.siteName }}</h1>
      <img svg-inline svg-sprite class="block fill-current" src="../assets/img/logo.svg" :alt="$static.metaData.siteName + ' logo'" />
    </g-link>

    <nav class="flex flex-col mt-16 text-xl">
      <ul class="list-reset -mx-3">

        <li class="flex mb-1 rounded overflow-hidden">
          <g-link class="flex items-center w-full px-3 py-2" :to="{ name: 'home' }">
            <feather class="mr-3" type="home"></feather> Inicio
          </g-link>
        </li>

        <li class="flex mb-1 rounded overflow-hidden">
          <g-link class="flex items-center w-full px-3 py-2" :to="{ name: 'store' }">
            <feather class="mr-3" type="shopping-bag"></feather> Tienda
          </g-link>
        </li>

        <li class="flex mb-1 rounded overflow-hidden">
          <g-link class="flex items-center w-full px-3 py-2" :to="{ name: 'releases' }">
            <feather class="mr-3" type="disc"></feather> Trabajos
          </g-link>
        </li>

        <li class="flex mb-1 rounded overflow-hidden">
          <g-link class="flex items-center w-full px-3 py-2" :to="{ name: 'videos' }">
            <feather class="mr-3" type="video"></feather> Videos
          </g-link>
        </li>

        <li class="flex mb-1 rounded overflow-hidden">
          <g-link class="flex items-center w-full px-3 py-2" :to="{ name: 'archive' }">
            <feather class="mr-3" type="archive"></feather> Archivo
          </g-link>
        </li>

        <li class="flex mb-1 rounded overflow-hidden">
          <g-link class="flex items-center w-full px-3 py-2" :to="{ name: 'contact' }">
            <feather class="mr-3" type="mail"></feather> Contacto
          </g-link>
        </li>

      </ul>
    </nav>

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
import SocialLinks from '~/components/SocialLinks.vue'

export default {
  name: 'SiteHeader',
  components: {
    SocialLinks
  }
}
</script>

<style lang="postcss">
#header {
  & i.feather svg { stroke-width: 1.5px; }

  & a {
    transition: background-color 0.125s ease-in-out;
    &:hover { @apply bg-grey-darkest-25; }
    &:focus { @apply bg-grey-darkest-50; }
  }

  & li a.active.active--exact { @apply bg-grey-darkest-75; }
}

</style>
