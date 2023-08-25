<script setup>
  import { ref } from "vue";
  import Skill from "@/components/Skill.vue";
  import AboutTab from "@/components/AboutTab.vue";

  let currentTab = ref(1)
</script>

<template>
  <!-- About -->
  <section id="about" class="relative py-28">
    <div class="container px-3 mx-auto max-w-7xl">
      <div class="text-center mb-24 flex justify-center">
        <h2 id="section-heading" class="relative text-4xl md:text-5xl text-white font-semibold tracking-wide after:content-[''] after:absolute after:left-0 after:-bottom-4 after:w-[40%] after:h-[4px] after:bg-primary-400">About Me</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div class="md:col-span-5 flex justify-center items-start">
          <div class="relative">
            <img class="w-full rounded-lg md:w-[400px] border-8 border-white h-auto" src="/fahim.png" alt="Fahim Anzam Dip">
            <div class="absolute w-full md:w-[400px] h-[400px] bg-primary-400 border-8 border-white rounded-lg -z-10 bottom-5 right-6 hidden md:block"></div>
          </div>
        </div>

        <div class="md:col-span-7">
          <div class="tabs mb-10 border-b border-slate-800 pb-5">
            <ul class="grid grid-cols-2 justify-center md:justify-start gap-y-6 md:flex md:space-x-6 md:gap-y-0 font-medium">
              <li>
                <AboutTab @click="currentTab = 1" :class="currentTab === 1 ? 'bg-slate-800 text-white' : ''">
                  <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-300 mr-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </template>
                  <span>About me</span>
                </AboutTab>
              </li>
              <li>
                <AboutTab @click="currentTab = 2" :class="currentTab === 2 ? 'bg-slate-800 text-white' : ''">
                  <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-300 mr-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                    </svg>
                  </template>
                  Skills
                </AboutTab>
              </li>
              <li>
                <AboutTab @click="currentTab = 3" :class="currentTab === 3 ? 'bg-slate-800 text-white' : ''">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-300 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                  Experience
                </AboutTab>
              </li>
              <li>
                <AboutTab @click="currentTab = 4" :class="currentTab === 4 ? 'bg-slate-800 text-white' : ''">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-300 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                  <span>Education</span>
                </AboutTab>
              </li>
            </ul>
          </div>

          <div class="contents">
            <div v-show="currentTab === 1" class="text-slate-200 tracking-wide">
              <div class="prose prose-invert prose-teal tracking-wide mb-7 text-left md:text-justify">
                <p>Hi, This is <strong>Fahim Anzam Dip</strong></p>
                <p>Highly passionate about <strong>Software Development</strong> & <strong>Programming</strong> in general. I am a Full Stack Web Developer with strong focus on Backend Development. For the past <strong>two & a half years</strong> I have worked with multiple clients in various project based work. Currently working with <a target="_blank" href="https://hasteit.com">Haste IT</a> as a Web Developer.</p>
                <p>I am always open to learning new technologies and build new things that will shape the business of my clients.</p>
              </div>

              <a href="#" class="text-primary-400 hover:text-primary-300 font-medium flex items-center justify-start w-fit transition-all duration-300">
                <span class="mr-2">View my resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </div>
            <div v-show="currentTab === 2" class="text-slate-200">
              <div class="flex flex-wrap gap-4 justify-center md:justify-start">
                <Skill link="#" name="Bootstrap" image="/bootstrap.jpg"/>
                <Skill link="#" name="Tailwind CSS" image="/tailwind.jpg"/>
                <Skill link="#" name="Php" image="/php.jpg"/>
                <Skill link="#" name="Laravel" image="/laravel.jpg"/>
                <Skill link="#" name="Javascript" image="/javascript.jpg"/>
                <Skill link="#" name="Vue.js" image="/vue.jpg"/>
                <Skill link="#" name="Alpine.js" image="/alpine.jpg"/>
                <Skill link="#" name="Livewire" image="/livewire.jpg"/>
                <Skill link="#" name="Github" image="/github.jpg"/>
                <Skill link="#" name="MySQL" image="/sql.jpg"/>
                <Skill link="#" name="PostgreSQL" image="/pgsql.jpg"/>
              </div>
            </div>
            <div v-show="currentTab === 3" class="text-slate-200 tracking-wide">
              <div class="bg-gray-800 p-8 rounded-lg shadow-md space-y-6">
                <h3 class="text-xl">Web Developer - Haste IT</h3>
                <div class="bg-primary-400/10 text-primary-300 px-4 py-2 rounded-full text-sm w-fit">
                  February 2022 - Running
                </div>
                <div class="prose prose-invert">
                  <ul>
                    <li>Develop web applications using Laravel, Go & Vue.js</li>
                    <li>Consult with client for feature requests</li>
                    <li>Maintain and fix bugs on old applications</li>
                  </ul>
                </div>
              </div>
            </div>
            <div v-show="currentTab === 4" class="text-slate-200 tracking-wide space-y-5">
              <div class="bg-gray-800 p-8 rounded-lg shadow-md space-y-6">
                <div>
                  <h3 class="text-xl mb-1">BSc in Computer Science & Engineering</h3>
                  <h5 class="text-md text-slate-300 transition-all duration-300 hover:text-primary-300">
                    <a target="_blank" href="https://green.edu.bd/">Green University of Bangladesh</a>
                  </h5>
                </div>
                <div class="bg-primary-400/10 text-primary-300 px-4 py-2 rounded-full text-sm w-fit">
                  February 2022 - Expected 2026
                </div>
              </div>
              <div class="bg-gray-800 p-8 rounded-lg shadow-md space-y-6">
                <div>
                  <h3 class="text-xl mb-1">Diploma in Computer Technology</h3>
                  <h5 class="text-md text-slate-300 transition-all duration-300 hover:text-primary-300">
                    <a target="_blank" href="https://www.tpi.gov.bd/">Tangail Polytechnic Institute</a>
                  </h5>
                </div>
                <div class="bg-primary-400/10 text-primary-300 px-4 py-2 rounded-full text-sm w-fit">
                  August 2016 - December 2020
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About -->
</template>