<template>
  <article :class="classes.article">

    <header class="flex flex-col-reverse">

      <h2 :class="classes.h2"><router-link :to="node.path" v-html="node.title" /></h2>

      <figure v-if="node.featuredMedia" :class="classes.figure">
        <g-image class="block" :src="node.featuredMedia.sourceUrl" />
      </figure>

      <nav v-if="node.categories.length" class="mb-4">
        <ul class="flex flex-wrap text-xs font-medium uppercase tracking-wide">
          <li v-for="category in node.categories" :key="category.slug" class="mr-2">
            <BaseBadge theme="primary" :url="`tag/${category.slug}`" :label="category.title" />
          </li>
        </ul>
      </nav>

    </header>

    <section v-if="node.excerpt" :class="classes.section" v-html="node.excerpt" />

    <footer class="mt-6">
      <nav class="overflow-x-scroll">
        <ul class="flex min-w-max text-xs font-medium uppercase tracking-wide">
          <li v-for="artist in node.artistas" :key="artist.slug" class="mr-2">
            <BaseBadge :url="`tag/${artist.slug}`" :label="artist.title" />
          </li>
        </ul>
      </nav>
    </footer>

  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseBadge from '~/components/BaseBadge'

export default {
  name: 'PostCard',
  props: { node: Object },
  components: { BaseBadge },
  computed: {
    ...mapGetters(['getActiveTheme']),
    classes() {
      return {
        article: [
          'flex flex-col px-4 md:px-6 py-6 md:py-8',
          this.getActiveTheme === 'light'
            ? this.node.format === 'link' ? 'text-white bg-gray-900' : 'text-gray-900 border-gray-900 border-t-4 bg-white'
            : this.node.format === 'link' ? 'text-gray-900 bg-white' : 'text-white border-white border-t-4 bg-gray-900',
          'rounded-b shadow hover:shadow-md',
        ],

        figure: [ '-mt-6 md:-mt-8 -mx-4 md:-mx-6 mb-6 md:mb-8' ],
        h2: [ '-mt-1 text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight font-semibold' ],
        section: [ 'mt-4 md:mt-6' ],
      }
    },
  },
}
</script>
