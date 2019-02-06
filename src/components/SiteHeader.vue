<template>
  <header class="sticky pin-t flex flex-col flex-no-shrink w-full md:max-w-xs h-screen p-8 text-white bg-black">

    <g-link :to="{ name: 'home' }" class="block w-full rounded-full overflow-hidden">
      <h1 class="clip">{{ $static.metaData.siteName }}</h1>
      <img svg-inline svg-sprite class="block fill-current" src="../assets/img/logo.svg" :alt="$static.metaData.siteName + ' logo'" />
    </g-link>

    <nav class="flex flex-col mt-16 text-xl">
      <g-link class="" :to="{ name: 'home' }">Inicio</g-link>
      <g-link class="" :to="{ name: 'home' }">Tienda</g-link>
      <g-link class="" :to="{ name: 'home' }">Trabajos</g-link>
      <g-link class="" :to="{ name: 'home' }">Videos</g-link>
      <g-link class="" :to="{ name: 'home' }">Archivo</g-link>
      <g-link class="" :to="{ name: 'about' }">Contacto</g-link>
    </nav>

    <nav class="mt-auto">
      <ul class="list-reset flex flex-wrap -mx-3">
        <li class="px-3"><a class="block w-6" href="//www.instagram.com/klayaya13">
          <img svg-inline svg-sprite class="fill-current" src="../assets/img/instagram.svg" alt="Instagram" />
        </a></li>
        <li class="px-3"><a class="block w-6" href="//www.twitter.com/KLaYaya">
          <img svg-inline svg-sprite class="fill-current" src="../assets/img/twitter.svg" alt="Twitter" />
        </a></li>
        <li class="px-3"><a class="block w-6" href="//www.youtube.com/channel/UCIeCiOxUbuQ0nhpuf9NOWng">
          <img svg-inline svg-sprite class="fill-current" src="../assets/img/youtube.svg" alt="YouTube" />
        </a></li>
      </ul>
    </nav>

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
export default {
  name: 'Header',
}
</script>
