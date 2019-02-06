<template>
  <fragment>

    <SiteHeader />
    <main class="px-4 py-8"><slot /></main>

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
