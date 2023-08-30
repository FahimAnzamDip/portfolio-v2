<script setup>
defineProps(["designation", "company", "timeline"]);
</script>

<template>
    <div class="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md space-y-6">
        <h3 class="text-xl font-medium">
            {{ designation }} <span class="text-primary-500 dark:text-primary-300 font-semibold">@ {{ company }}</span>
        </h3>
        <div class="bg-primary-600/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-300 px-4 py-2 rounded-full text-sm w-fit">
            {{ timeline }}
        </div>
        <div class="prose dark:prose-invert prose-teal">
            <slot name="description"></slot>
        </div>
    </div>
</template>
