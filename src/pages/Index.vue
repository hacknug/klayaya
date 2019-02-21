<template>
  <Layout>

    <h1 class="clip">KLaYaya</h1>

    <masonry :cols="{default: 4, 1920: 3, 1280: 2, 640: 1}" :gutter="30" class="px-6">
      <div v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <PostCard :node="node" />
      </div>
    </masonry>

    <Pager
      class="flex justify-center mt-auto -mx-2 text-xl"
      linkClass="mx-2 text-red"
      prevLabel="Anterior"
      nextLabel="Siguiente"
      :info="$page.allWordPressPost.pageInfo"
    />

  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allWordPressPost (perPage: 10, page: $page) @paginate {
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
    components: {
      Pager, PostCard
    }
  }
</script>
