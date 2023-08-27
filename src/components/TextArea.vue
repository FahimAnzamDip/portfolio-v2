<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <textarea
      autocomplete="off"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="p-3 focus:ring-2 focus:ring-primary-500 focus:ring-offset-4 focus:ring-offset-slate-900 mt-4 border-0 bg-gray-800 rounded-lg shadow-md">
  </textarea>
</template>