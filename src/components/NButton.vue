<script setup>
const props = defineProps(["btnType", "type", "loading"]);
defineEmits(["clicked"]);
</script>

<template>
    <button :type="type" :class="btnType === 'filled' ? 'bg-primary-600' : 'dark:bg-slate-900 bg-slate-100'" class="w-full md:w-auto font-heading font-medium text-white rounded-lg border-2 border-primary-600 hover:bg-primary-500 hover:border-primary-500 transition-all duration-300 text-center flex items-center space-x-2 justify-center shadow-md">
        <slot></slot>
        <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <slot v-else name="icon"></slot>
    </button>
</template>
