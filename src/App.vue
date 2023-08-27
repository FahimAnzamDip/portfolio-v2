<script setup>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
</script>

<template>
  <Header/>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <Footer/>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 200ms;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(.6,.15,.35,.8);
}
</style>