<script setup>
const props = defineProps(["link"]);
</script>

<template>
    <router-link :to="link" class="menu-link-1 font-heading font-medium text-md transition-all ease-in-out duration-300 text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white relative pb-2 hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 after:w-[0px] hover:after:w-[25px] hover:after:h-[2px] dark:hover:after:bg-primary-400 hover:after:bg-primary-600 hover:after:transition-[width] hover:after:duration-300 tracking-wide">
        <slot></slot>
    </router-link>
</template>
