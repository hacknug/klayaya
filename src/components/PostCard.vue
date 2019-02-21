<template>
  <article :class="classes.article">

    <figure v-if="node.featuredMedia" class="-mt-6 -mx-6 mb-6">
      <g-image class="block" :src="node.featuredMedia.sourceUrl" />
    </figure>

    <h2 class="text-5xl leading-none">
      <router-link :to="node.path" v-html="node.title" />
    </h2>

    <section v-if="node.excerpt" class="mt-6 break-words" v-html="node.excerpt" />

  </article>
</template>

<script>
export default {
  name: 'PostCard',
  props: { node: Object },
  data() {
    return {
      classes: {
        article: [
          'flex flex-col p-6 pb-8',
          this.node.format === 'link' ? 'text-white bg-black' : 'border-black border-t-4 bg-white',
          'rounded-b shadow hover:shadow-md',
        ],
      },
    }
  },
}
</script>

<style lang="postcss">
/* TODO: Use Tailwind for this once updated */
article section { word-break: break-all; }
</style>
