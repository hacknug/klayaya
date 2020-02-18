<template>
  <Layout>

    <h1 class="sr-only">KLaYaya</h1>

    <masonry :cols="{ default: 4, 1920: 3, 1280: 2, 640: 1 }" :gutter="30" class="md:px-6">
      <div v-for="{ node } in $page.allWordPressPost.edges" class="mb-4 md:mb-12" :key="node.id">
        <PostCard :node="node" />
      </div>
    </masonry>

    <footer class="sticky bottom-3 flex justify-center mt-auto -mx-2 text-xl">
      <BasePager :info="$page.allWordPressPost.pageInfo"></BasePager>
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
          categories {
            id
            title
            slug
            path
          }
          artistas {
            id
            title
            slug
            path
          }
        }
      }
    }
  }
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'
import BasePager from '~/components/BasePager.vue'

export default {
  components: { PostCard, BasePager },
}
</script>
