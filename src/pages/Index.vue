<template>
  <Layout>

    <h1 class="clip">KLaYaya</h1>

    <masonry :cols="{default: 4, 1920: 3, 1280: 2, 640: 1}" :gutter="30" class="mb-12 px-6">
      <div v-for="{ node } in $page.allWordPressPost.edges" class="mb-12" :key="node.id">
        <PostCard :node="node" />
      </div>
    </masonry>

    <footer class="flex justify-center mt-auto -mx-2 text-xl">
      <Pager
        class="flex p-3 bg-white shadow rounded"
        linkClass="inline-block mx-1 px-3 py-1"
        prevLabel="Anterior"
        nextLabel="Siguiente"
        :info="$page.allWordPressPost.pageInfo"
      />
    </footer>

  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allWordPressPost (perPage: 16, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          path
          excerpt
          content
          format
          featuredMedia {
            id
            sourceUrl
          }
        }
      }
    }
  }
</page-query>

<script>
  import { Pager } from 'gridsome'
  import PostCard from '~/components/PostCard.vue'

  export default {
    components: { Pager, PostCard },
  }
</script>

<style lang="postcss">
footer {
  & a {
    @apply rounded overflow-hidden;

    transition: background-color 0.125s ease-in-out;

    &:hover { @apply bg-grey-light-25; }
    &:focus { @apply bg-grey-light-50; }

    &.active.active--exact { @apply text-white bg-black; }
  }
}
</style>
