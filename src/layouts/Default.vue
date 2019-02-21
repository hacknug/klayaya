<template>
  <fragment>

    <SiteHeader />
    <main class="flex flex-col w-full px-4 py-8 bg-grey-lightest"><slot /></main>

  </fragment>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'

export default {
  components: {
    SiteHeader
  }
}
</script>
