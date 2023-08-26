<script setup>
import Hero from "@/sections/Hero.vue";
import AboutMe from "@/sections/AboutMe.vue";
import Works from "@/sections/Works.vue";
import Contact from "@/sections/Contact.vue";
</script>

<template>
  <!-- Main -->
  <main v-scroll-spy="{offset: 50}">
    <Hero/>

    <AboutMe/>

    <Works/>

    <Contact/>
  </main>
  <!-- Main -->
</template>