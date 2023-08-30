<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import Typed from "typed.js";
import LinkButton from "@/components/LinkButton.vue";

const typedElement = ref(null);
let typed;

onMounted(() => {
    typed = new Typed(typedElement.value, {
        strings: ["Full Stack Web Developer", "Crafting Digital Experiences"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 5000,
        loop: true,
        cursorChar: "_",
    });
});

onBeforeUnmount(() => {
    if (typed) {
        typed.destroy();
    }
});
</script>

<template>
    <!-- Hero -->
    <section id="home" class="relative min-h-[calc(100vh-85px)] overflow-x-clip bg-slate-100 dark:bg-[#0B1120]">
        <div class="absolute top-0 left-0 right-0 bottom-0 bg-hero-pattern dark:hidden block"></div>
        <div class="absolute top-0 left-0 right-0 bottom-0 bg-hero-pattern-dark hidden dark:block"></div>
        <div class="absolute right-[28%] top-0 h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-teal-600 to-teal-400 blur-3xl filter block opacity-30 dark:opacity-10 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
        <div class="absolute bottom-44 -left-64 h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 dark:opacity-30 blur-3xl filter block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 dark:lg:opacity-20 lg:opacity-30 xl:h-40 xl:w-[400px]"></div>
        <div class="absolute left-[28%] top-28 hidden rotate-12 rounded-3xl bg-sky-800 blur-3xl filter opacity-20 dark:opacity-30 lg:h-32 lg:w-[450px] lg:block xl:h-44 xl:w-[600px]"></div>

        <div class="container mx-auto px-3 flex flex-col justify-center items-center min-h-[calc(100vh-85px)] max-w-6xl 2xl:max-w-7xl">
            <h1
                v-motion
                :initial="{
                    opacity: 0,
                }"
                :enter="{
                    opacity: 1,
                    transition: {
                        duration: 500,
                        delay: 700,
                    },
                }"
                class="text-4xl md:text-6xl lg:text-8xl font-bold font-heading dark:text-slate-100 mb-5 text-center"
            >
                I'm <span class="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500 dark:from-sky-400 dark:to-teal-400">Fahim Anzam</span>
            </h1>
            <h2
                v-motion
                :initial="{
                    opacity: 0,
                }"
                :enter="{
                    opacity: 1,
                    transition: {
                        duration: 500,
                        delay: 900,
                    },
                }"
                class="text-2xl md:text-5xl font-semibold font-heading dark:text-slate-100 text-center"
            >
                <span ref="typedElement"></span>
            </h2>

            <div
                v-motion
                :initial="{
                    opacity: 0,
                }"
                :enter="{
                    opacity: 1,
                    transition: {
                        duration: 500,
                        delay: 1100,
                    },
                }"
                class="flex justify-center mt-10 md:mt-16 space-x-6 dark:text-slate-300 text-gray-600"
            >
                <a href="https://github.com/FahimAnzamDip" target="_blank" class="group flex items-center space-x-3">
                    <img class="w-[1.5rem] md:w-[1.7rem]" src="/images/github.png" alt="Fahim's Github" />
                    <span class="text-lg group-hover:text-gray-700 dark:group-hover:text-white font-medium transition-all duration-300">Github</span>
                </a>
                <a href="https://www.linkedin.com/in/fahim-anzam-dip/" target="_blank" class="group flex items-center space-x-3">
                    <img class="w-[1.5rem] md:w-[1.7rem]" src="/images/linkedin.png" alt="Fahim's Linkedin" />
                    <span class="text-lg group-hover:text-gray-700 dark:group-hover:text-white font-medium transition-all duration-300">Linkedin</span>
                </a>
            </div>

            <div
                v-motion
                :initial="{
                    opacity: 0,
                }"
                :enter="{
                    opacity: 1,
                    transition: {
                        duration: 500,
                        delay: 1300,
                    },
                }"
                class="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-16 space-y-4 md:space-x-7 md:space-y-0 w-full"
            >
                <LinkButton link="#about" class="text-sm md:text-xl px-5 py-3 md:px-7 md:py-4"> About Me </LinkButton>
                <LinkButton btn-type="filled" link="#works" class="text-sm md:text-xl px-5 py-3 md:px-7 md:py-4">
                    <span>See My Works</span>
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 md:h-6 md:w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                        </svg>
                    </template>
                </LinkButton>
            </div>
        </div>
    </section>
    <!-- Hero -->
</template>

<style scoped></style>
