<template>
  <article :data-card="node.format" :class="classes.article">

    <header class="flex flex-col-reverse">

      <h2 :class="classes.h2">{{ node.title }}</h2>
      <router-link :to="node.path" class="absolute inset-0" />

      <figure v-if="node.featuredMedia" :class="classes.figure">
        <g-image class="block" :src="node.featuredMedia.sourceUrl" />
      </figure>

      <nav v-if="node.categories.length" class="-mt-10 md:-mt-12 mb-3 md:mb-5">
        <ul class="flex flex-wrap text-xs font-medium uppercase tracking-wide">
          <li v-for="node in node.categories" :key="node.id" class="mr-2">
            <BaseBadge theme="primary" :url="node.path" :label="node.title" />
          </li>
        </ul>
      </nav>

    </header>

    <section v-if="node.excerpt" :class="classes.section" v-html="node.excerpt" />

    <footer v-if="node.artistas.length" class="mt-6">
      <nav class="overflow-x-scroll">
        <ul class="flex min-w-max text-xs font-medium uppercase tracking-wide">
          <li v-for="node in node.artistas" :key="node.id" class="mr-2">
            <BaseBadge :url="node.path" :label="node.title" />
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
          'relative flex flex-col px-4 py-6',
          this.node.format === 'link' ? 'text-white bg-gray-900' : 'text-gray-900 border-gray-900 border-t-4 bg-white',
          'rounded-b shadow hover:shadow-md',
        ],

        figure: [ '-mt-6 -mx-4 mb-6 md:mb-8' ],
        h2: [ '-mt-1 text-xl md:text-2xl leading-tight font-semibold' ],
        section: [ 'mt-4 md:mt-6' ],
      }
    },
  },
}
</script>

<style lang="postcss">
  [data-card] {
    @nest body[data-theme="light"] & {
      @apply text-gray-900 border-gray-900 border-t-4 bg-white;
      &[data-card="link"] { @apply text-white bg-gray-900; }
    }
    @nest body[data-theme="dark"] & {
      @apply text-white border-white border-t-4 bg-gray-900;
      &[data-card="link"] { @apply text-gray-900 bg-white; }
    }
  }
</style>
