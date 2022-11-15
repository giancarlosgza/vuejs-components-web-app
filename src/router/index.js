import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import GsapAnimations from "@/views/GsapAnimations";
import TypographyView from "@/views/TypographyView";
import ButtonsView from "@/views/ButtonsView";
import CardsView from "@/views/CardsView";
import TextFieldsView from "@/views/TextFieldsView";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/buttons",
        name: "buttons",
        component: ButtonsView,
    },
    {
        path: "/cards",
        name: "cards",
        component: CardsView,
    },
    {
        path: "/gsap",
        name: "gsap",
        component: GsapAnimations,
    },
    {
        path: "/text-fields",
        name: "text-fields",
        component: TextFieldsView,
    },
    {
        path: "/typography",
        name: "typography",
        component: TypographyView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
