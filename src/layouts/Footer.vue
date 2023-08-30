<script setup>
import { useMobileNav } from "@/composables/mobile-nav";

let { loadMobileNav } = useMobileNav()

const year = new Date().getFullYear()
</script>

<template>
  <!-- Footer -->
  <footer :class="loadMobileNav ? 'pb-24 pt-6' : 'py-6'" class="bg-[#0B1120] text-slate-300">
    <p class="text-center text-sm md:text-base">
      {{ year }} &copy; Designed & Built by <a target="_blank" href="https://github.com/FahimAnzamDip" class="text-secondary-500 font-medium hover:underline hover:underline-offset-4">Fahim Anzam Dip</a>
    </p>
  </footer>
  <!-- Footer -->
</template>