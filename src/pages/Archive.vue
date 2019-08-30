<template>
  <PageLayout>

    <PageHeader title="Archive" />

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>

    <BaseForm class="mt-8" name="contact">
      <BaseInput type="select" name="artists" label="Artistas" required :options="artists.reverse()" />
      <BaseInput type="select" name="categories" label="Categorías" required :options="categories.reverse()" />
    </BaseForm>

  </PageLayout>
</template>

<page-query>
query Archive {
  artists: allWordPressArtistas {
    edges {
      node {
        id
        title
        slug
        path
      }
    }
  }
  categories: allWordPressCategory {
    edges {
      node {
        id
        title
        slug
        path
      }
    }
  }
}
</page-query>

<script>
import PageHeader from '~/components/PageHeader.vue'
import BaseForm from '~/components/BaseForm.vue'
import BaseInput from '~/components/BaseInput.vue'
import BaseButton from '~/components/BaseButton.vue'

export default {
  components: {
    PageHeader,
    BaseForm, BaseInput, BaseButton,
  },
  computed: {
    artists() {
      return this.$page.artists.edges.map(edge =>  edge.node.title)
    },
    categories() {
      return this.$page.categories.edges.map(edge =>  edge.node.title)
    },
  }
}
</script>
