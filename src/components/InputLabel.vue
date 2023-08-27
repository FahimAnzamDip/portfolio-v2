<script setup>
defineProps(['title', 'required'])
</script>

<template>
  <label class="font-medium" :class="required ? 'after:content-[\'*\'] after:ml-0.5 after:text-red-500' : ''">{{ title }}</label>
</template>