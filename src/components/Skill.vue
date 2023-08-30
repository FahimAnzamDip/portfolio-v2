<script setup>
const props = defineProps(["name", "image", "link"]);
</script>

<template>
    <a :href="link">
        <div class="rounded-lg bg-secondary-300 dark:bg-gray-800 px-5 py-4 text-base md:text-lg flex items-center justify-center space-x-3 shadow-md hover:bg-secondary-400 dark:hover:bg-primary-500 transition-all duration-300">
            <img class="w-7 rounded-lg" :src="image" alt="Skill Logo" />
            <span>{{ name }}</span>
        </div>
    </a>
</template>
