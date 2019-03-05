<template>
  <PageLayout>
    <PageHeader :title="$page.wordPressPost.title" />
    <section v-html="$page.wordPressPost.content" />
  </PageLayout>
</template>

<page-query>
  query Post ($path: String!) {
    wordPressPost (path: $path) {
      title
      content
    }
  }
</page-query>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  components: { PageHeader },
}
</script>

<style lang="postcss">
  section {
    & a { text-decoration: underline; }
    & * + * { @apply mt-6; }
  }
</style>
