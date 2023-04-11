import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./pages/Main.vue"),
    name: "main",
  },
  {
    path: "/login",
    component: () => import("./pages/User/Login.vue"),
    name: "user.login",
  },
  {
    path: "/registr",
    component: () => import("./pages/User/Registr.vue"),
    name: "user.registr",
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
