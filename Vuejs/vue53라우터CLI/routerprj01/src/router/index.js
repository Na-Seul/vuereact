import Vue from "vue";
import VueRouter from "vue-router";
//외부 파일을 가져다 쓰고 싶으면 import 해줘야 한다(혹은 Aboit처럼 아래에 import)
import Home from "../views/Home.vue";
import Sample from "../views/Sample.vue";

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/sample",
    name: "Sample",
    component: Sample
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
