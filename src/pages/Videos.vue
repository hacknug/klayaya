<template>
  <Layout>

    <PageHeader title="Category: Videos" />

    <masonry :cols="{ default: 4, 1920: 3, 1280: 2, 640: 1 }" :gutter="30" class="mb-12 px-2 md:px-6">
      <div v-for="{ node } in $page.allWordPressPost.edges" class="mb-12" :key="node.id">
        <PostCard :node="node" />
      </div>
    </masonry>

    <footer class="flex justify-center mt-auto -mx-2 text-xl">
      <BasePager :info="$page.allWordPressPost.pageInfo"></BasePager>
    </footer>

  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allWordPressPost (perPage: 16, page: $page, filter: { format: { eq: "video" } }) @paginate {
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
import PageHeader from '~/components/PageHeader.vue'
import BasePager from '~/components/BasePager.vue'

export default {
  components: {
    PostCard, PageHeader, BasePager,
  },
}
</script>
