<script setup>
import SectionHeading from "@/components/SectionHeading.vue";
import Project from "@/components/Project.vue";
import NButton from "@/components/NButton.vue";
import { ref } from "vue";
import HireMe from "@/sections/HireMe.vue";
import { projects } from "@/data/projects.json";

let showAllWork = ref(false);
</script>

<template>
    <!-- Works -->
    <section id="works" class="relative py-28 lg:py-36 bg-slate-100 dark:bg-[#0B1120]">
        <div class="container px-3 mx-auto max-w-6xl 2xl:max-w-7xl">
            <SectionHeading>My Works</SectionHeading>

            <div class="relative">
                <div :class="showAllWork ? '' : 'h-[2100px] overflow-y-hidden md:h-[1650px]'" class="grid grid-cols-1 gap-16 md:gap-24">
                    <Project v-for="project in projects" :key="project.id" :image="project.image" :category="project.category" :title="project.title" :tags="project.tags" :code-link="project.code_link" :live-link="project.live_link">
                        <template #description>
                            <div v-html="project.description"></div>
                        </template>
                    </Project>
                </div>

                <div v-if="!showAllWork" class="absolute z-20 inset-x-0 bottom-0 flex justify-center bg-gradient-to-t pt-72 pb-8 from-slate-100 dark:from-[#0B1120]">
                    <NButton @click="showAllWork = !showAllWork" btn-type="filled" class="px-4 py-2 text-lg font-normal tracking-wide" type="button">
                        <span>See More</span>
                        <template #icon>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                            </svg>
                        </template>
                    </NButton>
                </div>

                <div v-else class="flex justify-center mt-20 group">
                    <NButton @click="showAllWork = !showAllWork" btn-type="filled" class="px-4 py-2 text-lg font-normal tracking-wide" type="button">
                        <span>See Less</span>
                        <template #icon>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                            </svg>
                        </template>
                    </NButton>
                </div>
            </div>

            <HireMe />
        </div>
    </section>
    <!-- Works -->
</template>
