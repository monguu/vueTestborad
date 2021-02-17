import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Borad from "@/components/borad.vue";
import Detailcontent from "@/components/detailcontent.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/borad/open/",
      name: "borad",
      component: Borad,
    },
    {
      path: "/borad/open/detailcontent/:contentId",
      name: "detailcontent",
      component: Detailcontent,
    },
  ],
});
