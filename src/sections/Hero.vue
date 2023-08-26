<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import Typed from "typed.js";
import LinkButton from "@/components/LinkButton.vue";

const typedElement = ref(null)
let typed

onMounted(() => {
  typed = new Typed(typedElement.value, {
    strings: ['Developer', 'Designer'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay:3000,
    loop: true,
    cursorChar: '_',
  });
})

onBeforeUnmount(() => {
  if (typed) {
    typed.destroy()
  }
})
</script>

<template>
  <!-- Hero -->
  <section id="home" class="relative min-h-[calc(100vh-85px)] overflow-x-clip bg-[#0B1120] bg-hero-pattern">
    <div class="absolute right-[28%] top-0 h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-teal-600 to-teal-400 blur-3xl filter block opacity-10 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
    <div class="absolute bottom-44 -left-64 h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div>
    <div class="absolute left-[28%] top-28 hidden rotate-12 rounded-3xl bg-sky-800 blur-3xl filter opacity-30 lg:h-32 lg:w-[450px] lg:block xl:h-44 xl:w-[600px]"></div>

    <div class="container mx-auto px-3 flex flex-col justify-center items-center min-h-[calc(100vh-85px)] max-w-6xl 2xl:max-w-7xl">
      <h1 class="text-5xl md:text-6xl lg:text-8xl font-bold font-heading text-slate-100 mb-5 text-center">I'm <span class="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-teal-400">Fahim Anzam</span></h1>
      <h2 class="text-4xl md:text-6xl font-semibold font-heading text-slate-100 text-center">Web <span ref="typedElement"></span></h2>

      <div class="flex justify-center mt-10 md:mt-16 space-x-6">
        <a href="#" target="_blank" class="group flex items-center space-x-3">
          <img class="w-[1.5rem] md:w-[1.7rem]" src="/github.png" alt="Fahim's Github">
          <span class="text-lg group-hover:text-white font-medium transition-all duration-300">Github</span>
        </a>
        <a href="#" target="_blank" class="group flex items-center space-x-3">
          <img class="w-[1.5rem] md:w-[1.7rem]" src="/linkedin.png" alt="Fahim's Linkedin">
          <span class="text-lg group-hover:text-white font-medium transition-all duration-300">Linkedin</span>
        </a>
      </div>

      <div class="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-16 space-y-4 md:space-x-7 md:space-y-0 w-full">
        <LinkButton type="outlined" link="#about" class="text-md md:text-xl px-5 py-3 md:px-7 md:py-4">
          About Me
        </LinkButton>
        <LinkButton type="filled" link="#works" class="text-md md:text-xl px-5 py-3 md:px-7 md:py-4">
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