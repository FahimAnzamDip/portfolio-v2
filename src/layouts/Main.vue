<script setup>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
</script>

<template>
    <Header />

    <!-- Main -->
    <main v-scroll-spy="{ offset: 80 }">
        <router-view></router-view>
    </main>
    <!-- Main -->

    <Footer />
</template>

<style scoped></style>
