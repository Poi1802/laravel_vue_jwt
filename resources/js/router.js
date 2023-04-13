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
    path: "/registration",
    component: () => import("./pages/User/Registr.vue"),
    name: "user.registr",
  },
  {
    path: "/personal",
    component: () => import("./pages/User/Personal.vue"),
    name: "user.personal",
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("./pages/User/Personal.vue"),
    name: "404",
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if ((to.name === 'user.login' || to.name === 'user.registr') && token) {
    return next({ name: from.name });
  }

  if (!token) {
    if (to.name === 'user.login' || to.name === 'user.registr') {
      return next();
    } else {
      if (from.name !== 'user.login' || from.name !== 'user.registr') {
        return next({ name: 'user.login' })
      }

      return next({ name: from.name });
    }
  }

  next();
})

export default router;
