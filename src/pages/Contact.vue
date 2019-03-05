<template>
  <PageLayout>

    <PageHeader>Contact</PageHeader>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>

    <BaseForm class="mt-8" name="contact">
      <BaseInput type="text" name="name" label="Nombre" required />
      <BaseInput type="email" name="email" label="Email" required />
      <BaseInput type="textarea" name="message" label="Mensaje" required />
      <BaseButton type="submit">Enviar</BaseButton>
    </BaseForm>

  </PageLayout>
</template>

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
}
</script>

<style lang="postcss">
form > * + * { @apply mt-4; }
</style>
