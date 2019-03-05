<template>
  <PageLayout>
    <PageHeader :title="$page.wordPressPost.title" />
    <div v-html="$page.wordPressPost.content" />
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
