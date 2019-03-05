<template>
  <PageLayout>
    ...
  </PageLayout>
</template>

<page-query>
  query Category ($path: String!) {
    wordPressCategory (path: $path) {
      title
    }
  }
</page-query>

<script>
  export default {}
</script>
