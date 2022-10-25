import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import GsapAnimations from "@/views/GsapAnimations";
import TypographyView from "@/views/TypographyView";
import ButtonsView from "@/views/ButtonsView";

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
    },
    {
        path: "/buttons",
        name: "buttons",
        component: ButtonsView,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
