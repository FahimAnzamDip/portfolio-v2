import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/layouts/Main.vue";

const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        } else {
            return {
                top: 0,
                behavior: 'smooth',
            }
        }
    },
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Main
        },
    ]
})

export default router
