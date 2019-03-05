<template>
  <article :class="classes.article">

    <figure v-if="node.featuredMedia" class="-mt-6 md:-mt-8 -mx-4 md:-mx-6 mb-6">
      <g-image class="block" :src="node.featuredMedia.sourceUrl" />
    </figure>

    <h2 :class="classes.h2">
      <router-link :to="node.path" v-html="node.title" />
    </h2>

    <section v-if="node.excerpt" class="mt-4 md:mt-6 break-words" v-html="node.excerpt" />

  </article>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PostCard',
  props: { node: Object },
  computed: {
    ...mapGetters(['getActiveTheme']),
    classes() {
      return {
        article: [
          'flex flex-col px-4 md:px-6 py-6 md:py-8',
          this.getActiveTheme === 'light'
            ? this.node.format === 'link' ? 'bg-black' : 'border-black border-t-4 bg-white'
            : this.node.format === 'link' ? 'bg-white' : 'border-white border-t-4 bg-black',
          'rounded-b shadow hover:shadow-md',
        ],
        h2: [
          '-mt-1',
          this.getActiveTheme === 'light'
            ? this.node.format === 'link' ? 'text-white' : 'text-black'
            : this.node.format === 'link' ? 'text-black' : 'text-white',
          'text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight md:leading-none',
        ],
      }
    },
  },
}
</script>

<style lang="postcss">
/* TODO: Use Tailwind for this once updated */
article section { word-break: break-all; }
</style>
