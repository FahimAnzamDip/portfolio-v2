<script setup></script>

<template>
    <button class="tracking-wide px-4 py-3 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 dark:hover:text-white hover:rounded-lg shadow transition-all duration-300 flex justify-center items-center w-full md:w-fit">
        <slot name="icon"></slot>
        <slot></slot>
    </button>
</template>
