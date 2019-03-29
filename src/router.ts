import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
      meta:{
        keepAlive: false,
      }
    },
    {
      path: "/index",
      name: "index",
      component: () =>
        import("./views/About.vue"),
      meta: {
        requireAuth: true,
        keepAlive: true,
      }
    }
  ]
});
