import { createRouter, createWebHistory } from "vue-router";
import Main from "@/layouts/Main.vue";

const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            };
        } else {
            return {
                top: 0,
                behavior: "smooth",
            };
        }
    },
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: Main,
            children: [
                {
                    path: "",
                    name: "home",
                    component: () => import("@/pages/HomePage.vue"),
                },
            ],
        },
        {
            path: "/:catchAll(.*)*",
            name: "not-found",
            component: () => import("@/pages/ErrorNotFound.vue"),
        },
    ],
});

export default router;
