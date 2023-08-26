<script setup>
const props = defineProps(['btnType', 'type', 'class'])
</script>

<template>
  <button v-if="props.btnType === 'outlined'" :type="props.type" :class="props.class" class="w-full md:w-auto font-heading font-medium text-white rounded-lg border-2 border-primary-500 bg-slate-900 hover:bg-primary-600 transition-all duration-300 text-center flex items-center space-x-2 justify-center">
    <slot></slot>
    <slot name="icon"></slot>
  </button>
  <button v-if="props.btnType === 'filled'" :type="props.type" :class="props.class" class="w-full md:w-auto font-heading font-medium bg-primary-500 text-white rounded-lg border-2 border-primary-500 hover:bg-primary-600 transition-all duration-300 text-center flex items-center space-x-2 justify-center">
    <span><slot></slot></span>
    <slot name="icon"></slot>
  </button>
</template>