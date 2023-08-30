<script setup>
defineProps(["title", "required"]);
</script>

<template>
    <label class="font-medium after:content-['*'] after:ml-0.5" :class="required === true ? 'after:text-red-500' : 'after:text-transparent'">{{ title }}</label>
</template>
