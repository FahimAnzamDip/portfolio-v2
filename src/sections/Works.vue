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
        <div :class="showAllWork ? '' : 'h-[2100px] overflow-y-hidden md:h-[1650px]'" class="grid grid-cols-1 gap-16 md:gap-24">
          <Project
              image="images/project_1.jpg"
              category="Open Source"
              title="Triangle POS & Inventory"
              :tags="['Bootstrap', 'Laravel', 'Livewire']"
              code-link="https://github.com/FahimAnzamDip/triangle-pos"
          >
            <template #description>
              <p>Triangle POS is an open source Inventory Management with POS System. Developed with Laravel 10, Bootstrap
                4 & Livewire 2.0.</p>
            </template>
          </Project>

          <Project
              image="images/project_2.jpg"
              category="Client Project"
              title="Kutub Shop"
              :tags="['Tailwind CSS', 'Alpine.js', 'Laravel', 'Livewire']"
              live-link="https://kutubshop.com"
          >
            <template #description>
              <p><a href="https://www.facebook.com/kutubshopbd" target="_blank">Kutub Shop</a> is an ecommerce website focused on selling books. I worked on both frontend and backend in this project for one of my client (<a href="https://triangletech.com.bd" target="_blank">Triangle Technologies Ltd.</a>) and it was built with TALL stack in the frontend and backend in Laravel 8.</p>
            </template>
          </Project>

          <Project
              image="images/project_3.jpg"
              category="Client Project"
              title="Canbe BD"
              :tags="['Bootstrap', 'Laravel', 'Livewire']"
              live-link="http://canbebd.com"
          >
            <template #description>
              <p>It's a company profile with ecommerce website for a well known medical instrument distributor in Bangladesh. It was one my project based work for a client built with Laravel 8, Bootstrap & Livewire.</p>
            </template>
          </Project>

          <Project
              image="images/project_4.jpg"
              category="Job/Office Project"
              title="Jamia Kashiful Uloom"
              :tags="['Bootstrap', 'Laravel', 'Jquery', 'Ajax', 'Livewire']"
              live-link="https://kashifululoombd.com"
          >
            <template #description>
              <p>It's a madrasa management system (student management, hostel management, admission management, employee management etc) with frontend cms for a well known <a href="https://www.facebook.com/syedanuwarabullah" target="_blank">madrasa</a> in Bangladesh. I worked actively in this project for both frontend and backend in my job at Haste IT.</p>
            </template>
          </Project>

          <Project
              image="images/project_5.jpg"
              category="Job/Office Project"
              title="Almodina Battery House"
              :tags="['Bootstrap', 'Laravel', 'Livewire', 'Jquery']"
          >
            <template #description>
              <p>It's a work flow management software (sales, purchase, raw material stock, vehicle stock, customer/supplier management, employee management, basic accounting etc) for a auto manufacturing company in Bangladesh. I worked heavily in this project in my job at Haste IT. I was also involved in user requirement analysis and training on how to use the software. </p>
            </template>
          </Project>

          <Project
              image="images/project_6.jpg"
              category="Client Project"
              title="Ihyaussunnah Foundation"
              :tags="['Bootstrap', 'Jquery', 'Laravel', 'Livewire']"
              live-link="https://ihyaussunnah.com"
          >
            <template #description>
              <p>It's a website for welfare foundation in Bangladesh called <a href="https://www.facebook.com/ihyaussunnahbd" target="_blank">Ihyaussunnah Foundation</a>. It also has a separate ecommerce module for selling books. The project was from my my client (<a href="https://triangletech.com.bd" target="_blank">Triangle Technologies Ltd.</a>) and the backend is built with Laravel 10.</p>
            </template>
          </Project>
        </div>

        <div v-if="!showAllWork" class="absolute z-20 inset-x-0 bottom-0 flex justify-center bg-gradient-to-t pt-72 pb-8 from-[#0B1120]">
          <NButton @click="showAllWork = !showAllWork" btn-type="filled" class="px-4 py-2 text-lg font-normal tracking-wide" type="button">
            <span>See More</span>
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
              </svg>
            </template>
          </NButton>
        </div>

        <div v-else class="flex justify-center mt-20 group">
          <NButton @click="showAllWork = !showAllWork" btn-type="filled" class="px-4 py-2 text-lg font-normal tracking-wide" type="button">
            <span>See Less</span>
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
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