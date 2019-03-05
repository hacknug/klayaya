<template>
  <button class="px-4 py-3 text-white bg-black rounded" :type="type"><slot /></button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: String,
  },
}
</script>
