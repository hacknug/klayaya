<template>
  <header class="mb-4">
    <h1 class="text-3xl xl:text-5xl leading-tight md:leading-none font-medium" v-html="title" />
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
