import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PlaceIndex from "../views/PlaceIndex.vue";
import PlaceNew from "../views/PlaceNew.vue";
import PlaceShow from "../views/PlacesShow.vue";
import PlacesEdit from "../views/PlacesEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/places", name: "Index", component: PlaceIndex },
  { path: "/newplaces", name: "PlaceNew", component: PlaceNew },
  { path: "/places/:id", name: "PlaceShow", component: PlaceShow },
  { path: "/places/:id/edit", name: "PlacesEdit", component: PlacesEdit },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
