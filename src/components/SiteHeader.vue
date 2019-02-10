<template>
  <header class="sticky pin-t flex flex-col flex-no-shrink w-full md:max-w-xs h-screen p-8 text-white bg-black">

    <g-link :to="{ name: 'home' }" class="flex w-full rounded-full overflow-hidden">
      <h1 class="clip">{{ $static.metaData.siteName }}</h1>
      <img svg-inline svg-sprite class="block fill-current" src="../assets/img/logo.svg" :alt="$static.metaData.siteName + ' logo'" />
    </g-link>

    <nav class="flex flex-col mt-16 text-xl">
      <ul class="list-reset -mx-3">
        <li class="flex rounded overflow-hidden"><g-link class="w-full px-3 py-2 hover:bg-grey-darkest" :to="{ name: 'home' }">Inicio</g-link></li>
        <li class="flex rounded overflow-hidden"><g-link class="w-full px-3 py-2 hover:bg-grey-darkest" :to="{ name: 'about' }">Tienda</g-link></li>
        <li class="flex rounded overflow-hidden"><g-link class="w-full px-3 py-2 hover:bg-grey-darkest" :to="{ name: 'about' }">Trabajos</g-link></li>
        <li class="flex rounded overflow-hidden"><g-link class="w-full px-3 py-2 hover:bg-grey-darkest" :to="{ name: 'about' }">Videos</g-link></li>
        <li class="flex rounded overflow-hidden"><g-link class="w-full px-3 py-2 hover:bg-grey-darkest" :to="{ name: 'about' }">Archivo</g-link></li>
        <li class="flex rounded overflow-hidden"><g-link class="w-full px-3 py-2 hover:bg-grey-darkest" :to="{ name: 'about' }">Contacto</g-link></li>
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
