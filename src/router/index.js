import { createRouter, createWebHistory } from "vue-router";
import Home from "../views";
import Login from "@/views/login";
import store from "@/store";

const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/movie",
    name: "Movie",
    component: () =>
      import(/* webpackChunkName: "Information" */ "@/views/movie"),
    props: true,
  },
  {
    path: "/movie-chart",
    name: "MovieChart",
    component: () =>
      import(/* webpackChunkName: "Information" */ "@/views/moviechart"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isLogin = store.getters["auth/isLoggedIn"];
    if (!isLogin) {
      next({
        name: "Login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
