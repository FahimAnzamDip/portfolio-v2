<script setup>
const props = defineProps(['btnType', 'type'])
defineEmits(['clicked'])
</script>

<template>
  <button  :type="type" :class="btnType === 'filled' ? 'bg-primary-600' : 'dark:bg-slate-900 bg-slate-100'" class="w-full md:w-auto font-heading font-medium text-white rounded-lg border-2 border-primary-600 hover:bg-primary-500 hover:border-primary-500 transition-all duration-300 text-center flex items-center space-x-2 justify-center shadow-md">
    <slot></slot>
    <slot name="icon"></slot>
  </button>
</template>