<script setup>
import Hero from "@/sections/Hero.vue";
import AboutMe from "@/sections/AboutMe.vue";
import Works from "@/sections/Works.vue";
import Contact from "@/sections/Contact.vue";
</script>

<template>
    <Hero
        v-motion
        :initial="{
            opacity: 0,
        }"
        :enter="{
            opacity: 1,
            transition: {
                duration: 500,
            },
        }"
    />

    <AboutMe
        v-motion
        :initial="{
            opacity: 0,
        }"
        :visible="{
            opacity: 1,
            transition: {
                delay: 100,
                duration: 600,
            },
        }"
    />

    <Works
        v-motion
        :initial="{
            opacity: 0,
        }"
        :visible="{
            opacity: 1,
            transition: {
                delay: 100,
                duration: 600,
            },
        }"
    />

    <Contact
        v-motion
        :initial="{
            opacity: 0,
        }"
        :visible="{
            opacity: 1,
            transition: {
                delay: 100,
                duration: 600,
            },
        }"
    />
</template>
