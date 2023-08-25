<script setup>
import { defineProps } from 'vue';

const props = defineProps(['name', 'image', 'link'])
</script>

<template>
  <a :href="props.link">
    <div class="rounded-lg bg-gray-800 px-5 py-4 text-base md:text-lg flex items-center justify-center space-x-3 shadow-md hover:bg-primary-500 transition-all duration-300">
      <img class="w-7 rounded-lg" :src="props.image" alt="Skill Logo">
      <span>{{ props.name }}</span>
    </div>
  </a>
</template>