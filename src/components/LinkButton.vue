<script setup>
const props = defineProps(["btnType", "link", "smooth"]);
</script>

<template>
    <router-link :to="link" :class="btnType === 'filled' ? 'bg-primary-600 text-white border-primary-600 hover:bg-primary-500 dark:hover:bg-primary-500 hover:border-primary-500' : 'border-secondary-600 dark:bg-slate-900 bg-slate-100 dark:text-white hover:text-white hover:bg-secondary-500 dark:hover:bg-secondary-600 dark:hover:border-secondary-600 hover:border-secondary-500'" class="w-full md:w-auto font-heading font-medium rounded-lg border-2 transition-all duration-300 text-center flex items-center space-x-2 justify-center shadow-md">
        <slot></slot>
        <slot name="icon"></slot>
    </router-link>
</template>
