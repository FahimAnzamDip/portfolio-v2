<script setup>
  const props = defineProps(['link'])
</script>

<template>
  <a v-smooth-scroll :href="props.link"
     class="font-heading font-medium text-md transition-all ease-in-out duration-300 hover:text-white relative pb-2 hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 after:w-[0px] hover:after:w-[25px] hover:after:h-[2px] hover:after:bg-primary-400 hover:after:transition-[width] hover:after:duration-300">
    <slot></slot>
  </a>
</template>