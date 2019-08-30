<template>
  <Layout>

    <PageHeader :title="`Category: ${$page.wordPressCategory.title}`" />

    <masonry :cols="{ default: 4, 1920: 3, 1280: 2, 640: 1 }" :gutter="30" class="md:px-6">
      <div v-for="{ node } in $page.wordPressCategory.belongsTo.edges" class="mb-4 md:mb-12" :key="node.id">
        <PostCard :node="node" />
      </div>
    </masonry>

    <footer class="sticky bottom-3 flex justify-center mt-auto -mx-2 text-xl">
      <BasePager :info="$page.wordPressCategory.belongsTo.pageInfo"></BasePager>
    </footer>

  </Layout>
</template>

<page-query>
query Category ($path: String, $page: Int) {
  wordPressCategory (path: $path) {
    title
    belongsTo (page: $page, perPage: 10) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on WordPressPost {
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
  }
}
</page-query>

<script>
import PageHeader from '~/components/PageHeader.vue'
import PostCard from '~/components/PostCard.vue'
import BasePager from '~/components/BasePager.vue'

export default {
  components: { PageHeader, PostCard, BasePager },
  metaInfo () {
    return {
      title: this.$page.wordPressCategory.title
    }
  }
}
</script>
