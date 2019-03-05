<template>
  <form :name="name" method="POST" data-netlify="true"><slot /></form>
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
