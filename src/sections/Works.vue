<script setup>
import SectionHeading from "@/components/SectionHeading.vue";
import Project from "@/components/Project.vue";
import NButton from "@/components/NButton.vue";
import { ref } from "vue";
import HireMe from "@/sections/HireMe.vue";

let showAllWork = ref(false)
</script>

<template>
  <!-- Works -->
  <section id="works" class="relative py-28 lg:py-36 bg-[#0B1120]">
    <div class="container px-3 mx-auto max-w-6xl 2xl:max-w-7xl">
      <SectionHeading>My Works</SectionHeading>

      <div class="relative">
        <div :class="showAllWork ? '' : 'h-[2100px] overflow-y-hidden md:h-[1500px]'" class="grid grid-cols-1 gap-16 md:gap-24">
          <Project
              image="/project_1.jpg"
              category="Open Source"
              title="Triangle POS & Inventory"
              :tags="['Bootstrap', 'Laravel', 'Livewire']"
              code-link="#"
              live-link="#"
          >
            <template #description>
              <p>Triangle POS is an open source Inventory Management with POS System. Developed with Laravel 10, Bootstrap
                4 & Livewire 2.0.</p>
            </template>
          </Project>

          <Project
              image="/project_1.jpg"
              category="Open Source"
              title="Triangle POS & Inventory"
              :tags="['Bootstrap', 'Laravel', 'Livewire']"
              code-link="#"
              live-link="#"
          >
            <template #description>
              <p>Triangle POS is an open source Inventory Management with POS System. Developed with Laravel 10, Bootstrap
                4 & Livewire 2.0.</p>
            </template>
          </Project>

          <Project
              image="/project_1.jpg"
              category="Open Source"
              title="Triangle POS & Inventory"
              :tags="['Bootstrap', 'Laravel', 'Livewire']"
              code-link="#"
              live-link="#"
          >
            <template #description>
              <p>Triangle POS is an open source Inventory Management with POS System. Developed with Laravel 10, Bootstrap
                4 & Livewire 2.0.</p>
            </template>
          </Project>

          <Project
              image="/project_1.jpg"
              category="Open Source"
              title="Triangle POS & Inventory"
              :tags="['Bootstrap', 'Laravel', 'Livewire']"
              code-link="#"
              live-link="#"
          >
            <template #description>
              <p>Triangle POS is an open source Inventory Management with POS System. Developed with Laravel 10, Bootstrap
                4 & Livewire 2.0.</p>
            </template>
          </Project>
        </div>

        <div :class="showAllWork ? 'hidden' : 'block'" class="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t pt-72 pb-8 from-[#0B1120]">
          <NButton @click="showAllWork = !showAllWork" btn-type="filled" class="px-4 py-2 text-lg font-normal tracking-wide" type="button">
            <span>See More</span>
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
              </svg>
            </template>
          </NButton>
        </div>
      </div>

      <HireMe/>
    </div>
  </section>
  <!-- Works -->
</template>