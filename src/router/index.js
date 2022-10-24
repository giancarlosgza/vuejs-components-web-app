import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import GsapAnimations from "@/views/GsapAnimations";
import TypographyView from "@/views/TypographyView";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/gsap",
        name: "gsap",
        component: GsapAnimations,
    },
    {
        path: "/typography",
        name: "typography",
        component: TypographyView,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
