<script setup></script>

<template>
    <router-view></router-view>
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
    transition-timing-function: cubic-bezier(0.6, 0.15, 0.35, 0.8);
}
</style>
