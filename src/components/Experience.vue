<script setup>
defineProps(['designation', 'company', 'timeline'])
</script>

<template>
  <div class="bg-gray-800 p-8 rounded-lg shadow-md space-y-6">
    <h3 class="text-xl">{{ designation }} <span class="text-primary-300 font-medium">@ {{ company }}</span></h3>
    <div class="bg-primary-400/10 text-primary-300 px-4 py-2 rounded-full text-sm w-fit">
      {{ timeline }}
    </div>
    <div class="prose prose-invert">
      <slot name="description"></slot>
    </div>
  </div>
</template>