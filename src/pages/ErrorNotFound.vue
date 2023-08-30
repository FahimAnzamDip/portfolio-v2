<script setup>
import LinkButton from "@/components/LinkButton.vue";
</script>

<template>
    <div class="h-screen w-100 flex justify-center items-center">
        <div class="flex flex-col items-center">
            <h1 class="text-8xl font-bold text-red-500 mb-5">404</h1>
            <p class="text-2xl dark:text-white">Requested Page Not Found !</p>
            <LinkButton :to="{ name: 'home' }" class="mt-10 px-5 py-3">
                <span>Go to Home</span>
                <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
                    </svg>
                </template>
            </LinkButton>
        </div>
    </div>
</template>
