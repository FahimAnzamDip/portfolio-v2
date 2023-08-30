<script setup>
const props = defineProps(["image", "category", "title", "tags", "codeLink", "liveLink", "caseStudy"]);
</script>

<template>
    <!-- Single Project -->
    <div class="single-project grid grid-cols-12 gap-6 md:gap-0 items-center dark:text-slate-200 group">
        <div class="col-span-12 project-image relative">
            <img class="rounded-lg shadow-md" :src="image" alt="Project Screenshot" />
            <div class="bg-slate-900/40 absolute inset-0 group-hover:bg-gray-800/0 transition-all duration-300 rounded-lg dark:block hidden"></div>
        </div>
        <div class="col-span-12 project-content z-10">
            <h3 class="subtitle text-primary-600 dark:text-primary-300 mb-2">{{ category }}</h3>
            <h4 class="title text-3xl font-semibold mb-6 dark:tracking-wide">{{ title }}</h4>
            <div class="description bg-gray-200/70 dark:bg-slate-800/70 backdrop-blur-lg px-5 py-1 shadow-md rounded-lg prose dark:prose-invert prose-primary mb-4">
                <slot name="description"></slot>
            </div>
            <div class="tags flex flex-wrap gap-3 mb-6">
                <div v-for="(tag, index) in tags" :key="index" class="bg-primary-600/10 text-primary-600 dark:bg-primary-400/10 dark:text-primary-300 py-1 px-3 rounded-full text-sm w-fit">
                    {{ tag }}
                </div>
            </div>
            <div class="links flex justify-center md:justify-start flex-wrap gap-5 items-center">
                <a target="_blank" v-if="props.codeLink" :href="codeLink" class="transition-all duration-300 hover:text-secondary-500 dark:hover:text-secondary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                </a>
                <a target="_blank" v-if="props.liveLink" :href="liveLink" class="transition-all duration-300 hover:text-secondary-500 dark:hover:text-secondary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>
                <a target="_blank" v-if="props.caseStudy" :href="caseStudy" class="flex items-center space-x-2 text-lg transition-all duration-300 hover:text-secondary-500 dark:hover:text-secondary-400">
                    <span>Case Study</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <!-- Single Project -->
</template>
