<script setup>

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <div>
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 500ms;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(.6,.15,.35,.8);
}
</style>