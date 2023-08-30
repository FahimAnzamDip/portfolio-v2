<script setup>
defineProps(["modelValue", "error"]);
defineEmits(["update:modelValue"]);
</script>

<template>
    <input autocomplete="off" :value="modelValue" :class="error ? 'border-red-600 !important' : 'border-gray-200 dark:border-gray-700'" @input="$emit('update:modelValue', $event.target.value)" class="p-3 focus:ring-2 focus:ring-primary-500 focus:ring-offset-4 focus:ring-offset-white dark:focus:ring-offset-slate-900 mt-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md border-2 dark:focus:border-gray-700 focus:border-gray-200" />
</template>
