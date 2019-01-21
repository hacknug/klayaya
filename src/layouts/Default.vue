<template>
  <fragment>

    <header class="sticky pin-t flex flex-col flex-no-shrink w-full md:max-w-xs h-screen p-8 text-white bg-black">

      <g-link :to="{ name: 'home' }">
        <h1>{{ $static.metaData.siteName }}</h1>
        <img svg-inline svg-sprite class="icon" src="../assets/img/logo.svg" alt="{{ $static.metaData.siteName }} logo" />
      </g-link>

      <nav class="flex flex-col">
        <g-link class="" :to="{ name: 'home' }">Home</g-link>
        <g-link class="" :to="{ name: 'about' }">About</g-link>
      </nav>

      <nav class="mt-auto">
        <ul class="list-reset flex flex-wrap -mx-2">
          <li class="px-2"><a href="//www.instagram.com/klayaya13">Instagram</a></li>
          <li class="px-2"><a href="//www.twitter.com/KLaYaya">Twitter</a></li>
          <li class="px-2"><a href="//www.youtube.com/channel/UCIeCiOxUbuQ0nhpuf9NOWng">YouTube</a></li>
        </ul>
      </nav>

    </header>

    <main class="px-4 py-8">
      <slot />
    </main>

  </fragment>
</template>

<static-query>
  query Home {
    metaData {
      siteName
    }
  }
</static-query>
