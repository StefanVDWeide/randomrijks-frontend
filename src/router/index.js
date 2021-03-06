import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  // Error routes
  {
    path: "/404",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/errors/404.vue"),
    meta: {
      title: "Pagina niet gevonden!"
    }
  },
  // Catch all route which redirects to the 404 page
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
