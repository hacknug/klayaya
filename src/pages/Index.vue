<template>
  <Layout>

    <h1 class="clip">KLaYaya</h1>

    <ul class="list-reset flex flex-wrap">
      <li class="w-full xl:w-1/2 px-4" v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <article class="mb-16 border-t">

          <h2 class="my-6 text-5xl leading-none">
            <router-link :to="node.path" v-html="node.title" />
          </h2>

          <section v-html="node.excerpt" />

        </article>
      </li>
    </ul>

    <Pager
      class="flex justify-center -mx-2 text-xl"
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
        }
      }
    }
  }
</page-query>

<script>
  import { Pager } from 'gridsome'

  export default {
    components: {
      Pager
    }
  }
</script>
