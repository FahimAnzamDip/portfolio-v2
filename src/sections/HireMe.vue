<script setup>
import LinkButton from '@/components/LinkButton.vue';
</script>

<template>
    <!-- Hire Me -->
    <section class="relative pt-28 lg:pt-36">
        <div class="container mx-auto max-w-6xl 2xl:max-w-7xl">
            <div class="grid grid-cols-1">
                <div
                    class="bg-gradient-to-r from-sky-500 to-indigo-700 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 shadow-md rounded-lg py-7 px-5 md:py-14 md:px-20 flex flex-col items-center justify-center relative"
                >
                    <h2
                        class="font-medium md:font-semibold text-2xl md:text-4xl text-center text-white tracking-wide mb-5 md:mb-10 leading-loose"
                    >
                        I am available for project based or part time offers!
                    </h2>
                    <LinkButton
                        target="_blank"
                        link="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=dfahimanzam@gmail.com&amp;&amp;su=Need to disscuss with Mr. Fahim&amp;body=Hello, I need to talk about a project"
                        class="px-5 py-3 text-md md:text-lg"
                    >
                        <span class="dark:tracking-wide">Hire Me</span>
                        <template #icon>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-5 w-5 md:w-6 m:h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                                />
                            </svg>
                        </template>
                    </LinkButton>
                </div>
            </div>
        </div>
    </section>
    <!-- Hire Me -->
</template>
