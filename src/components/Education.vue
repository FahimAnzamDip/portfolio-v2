<script setup>
defineProps(['degree', 'institute', 'timeline', 'website'])
</script>

<template>
  <div class="bg-gray-800 p-8 rounded-lg shadow-md space-y-6">
    <div>
      <h3 class="text-xl mb-1">{{ degree }}</h3>
      <h5 class="text-md text-slate-300 transition-all duration-300 hover:text-primary-300">
        <a target="_blank" :href="website">{{ institute }}</a>
      </h5>
    </div>
    <div class="bg-primary-400/10 text-primary-300 px-4 py-2 rounded-full text-sm w-fit">
      {{ timeline }}
    </div>
    <div class="prose prose-invert">
      <slot name="description"></slot>
    </div>
  </div>
</template>