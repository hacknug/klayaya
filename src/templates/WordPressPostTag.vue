<template>
  <PageLayout>
    ...
  </PageLayout>
</template>

<page-query>
  query PostTag ($path: String!) {
    wordPressPostTag (path: $path) {
      id
      title
      path
    }
  }
</page-query>

<script>
  export default {}
</script>
