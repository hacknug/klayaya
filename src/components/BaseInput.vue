<template>
  <label class="flex flex-col mb-4">

    <span v-if="label" class="mb-2 text-gray-600">
      {{ label }}<span v-if="required" class="text-red-500">&nbsp;*</span>
    </span>

    <textarea v-if="type === 'textarea'"
      class="form-textarea"
      :class="classes.base"
      :placeholder="placeholder"
      :required="required"
      rows="6"
      :name="name"
    />

    <select v-else-if="type === 'select'"
      class="form-select"
      :class="classes.base"
      :required="required"
      :name="name"
    >
      <option v-if="placeholder !== false" selected disabled>{{ placeholder || 'Please Choose…' }}</option>
      <option v-for="(option, key) in options" :key="key">{{ option }}</option>
    </select>

    <input v-else
      class="form-input"
      :class="classes.base"
      :placeholder="placeholder"
      :required="required"
      :type="type || 'text'"
      :name="name"
    />

  </label>
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
    options: Array,
  },
  data: () => ({
    classes: {
      base: ['p-2 border-2 border-gray-400 focus:border-gray-500 rounded'],
    }
  }),
}
</script>
