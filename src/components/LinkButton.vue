<script setup>
const props = defineProps(['type', 'link', 'class'])
</script>

<template>
  <a v-if="props.type === 'outlined'" :href="props.link" :class="props.class" class="w-full md:w-auto font-heading font-medium text-white rounded-lg border-2 border-primary-500 bg-slate-900 hover:bg-primary-600 transition-all duration-300 text-center flex items-center space-x-2 justify-center">
    <slot></slot>
    <slot name="icon"></slot>
  </a>
  <a v-if="props.type === 'filled'" :href="props.link" :class="props.class" class="w-full md:w-auto font-heading font-medium bg-primary-500 text-white rounded-lg border-2 border-primary-500 hover:bg-primary-600 transition-all duration-300 text-center flex items-center space-x-2 justify-center">
    <span><slot></slot></span>
    <slot name="icon"></slot>
  </a>
</template>