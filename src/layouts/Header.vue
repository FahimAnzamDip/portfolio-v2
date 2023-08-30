<script setup>
import NavLink from "@/components/NavLink.vue";
import { ref } from "vue";
import { useMobileNav } from "@/composables/mobile-nav";
import LinkButton from "@/components/LinkButton.vue";
import DarkModeSwitch from "@/components/DarkModeSwitch.vue";

let { mobileNav, loadMobileNav, toggleMobileNav } = useMobileNav();
</script>

<template>
    <header class="py-5 md:py-7 sticky top-0 z-40 shadow backdrop-blur-2xl bg-slate-200/80 dark:bg-[#0B1120]/80">
        <nav class="flex items-center justify-between container mx-auto px-3 max-w-6xl 2xl:max-w-7xl">
            <router-link :to="{ name: 'home' }">
                <img class="w-[170px] md:w-[220px] dark:inline-block hidden" src="/logo.png" alt="Web Developer / Designer" />
                <img class="w-[170px] md:w-[220px] dark:hidden inline-block" src="/logo-dark.png" alt="Web Developer / Designer" />
            </router-link>
            <div class="custom-nav hidden md:block">
                <ul v-scroll-spy-active="{ selector: 'li a.menu-link-1', class: 'active-link' }" class="flex space-x-12">
                    <li>
                        <NavLink :link="'#home'">Home</NavLink>
                    </li>
                    <li>
                        <NavLink :link="'#about'">About</NavLink>
                    </li>
                    <li>
                        <NavLink :link="'#works'">Works</NavLink>
                    </li>
                    <li>
                        <NavLink :link="'#contact'">Contact</NavLink>
                    </li>
                    <li>
                        <DarkModeSwitch />
                    </li>
                </ul>
            </div>

            <div class="flex items-center md:hidden">
                <DarkModeSwitch />
                <button @click="toggleMobileNav()">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 fill-primary-500 dark:fill-primary-400 ml-5" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path></svg>
                </button>
            </div>
        </nav>
    </header>
    <!-- Header -->

    <!-- Mobile Nav -->
    <template v-if="loadMobileNav">
        <transition name="fade" mode="out-in">
            <nav v-show="mobileNav.show" class="py-5 fixed bottom-0 left-0 right-0 bg-slate-200/80 dark:bg-[#0B1120]/80 shadow backdrop-blur-2xl z-40 block md:hidden">
                <ul v-scroll-spy-active="{ selector: 'li a.menu-link', class: 'active-mobile-link' }" class="grid grid-cols-4 gap-6 px-5">
                    <li class="flex justify-center items-center">
                        <router-link to="#home" class="menu-link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </router-link>
                    </li>
                    <li class="flex justify-center items-center">
                        <router-link to="#about" class="menu-link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </router-link>
                    </li>
                    <li class="flex justify-center items-center">
                        <router-link to="#works" class="menu-link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                            </svg>
                        </router-link>
                    </li>
                    <li class="flex justify-center items-center">
                        <router-link to="#contact" class="menu-link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </transition>
    </template>
    <!-- Mobile Nav -->
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
    transform: translateY(70px);
}

.fade-enter-active,
.fade-leave-active {
    transition-duration: 300ms;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.6, 0.15, 0.35, 0.8);
}
</style>
