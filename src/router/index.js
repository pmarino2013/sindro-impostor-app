import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Test from "../views/Test.vue";
import Resultado from "../views/Resultado.vue";
import NotFound from "../views/NotFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/test", name: "Test", component: Test },
    { path: "/about", name: "About", component: About },
    { path: "/resultado", name: "Resultado", component: Resultado },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
