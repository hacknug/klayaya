<template>
  <form :name="name" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" :value="name" />
    <slot />
  </form>
</template>

<script>
export default {
  name: 'BaseForm',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
