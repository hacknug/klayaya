<template>
  <div class="flex flex-col mb-4">

    <label v-if="label" class="mb-2">
      <span>{{ label }}</span>
      <span v-if="required" class="text-red"> *</span>
    </label>

    <textarea v-if="type === 'textarea'"
      class="p-2 border-2 border-grey-light focus:border-grey rounded-sm"
      :placeholder="placeholder"
      :required="required"
      :name="name"
    />

    <input v-else
      class="p-2 border-2 border-grey-light focus:border-grey rounded-sm"
      :placeholder="placeholder"
      :required="required"
      :type="type || 'text'"
      :name="name"
    />

  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    label: String,
    placeholder: String,
    required: Boolean,
    type: String,
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
