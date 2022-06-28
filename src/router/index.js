import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import GsapAnimations from "@/views/GsapAnimations";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/gsap",
        name: "GsapAnimations",
        component: GsapAnimations,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
