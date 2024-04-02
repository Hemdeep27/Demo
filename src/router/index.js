import Vue from "vue";
import VueRouter from "vue-router";
import BoardView from "../views/BoardView.vue";
import BoardView2 from "../views/BoardView2.vue";
import BoardView3 from "../views/BoardView3.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/boardview1",
    name: "boardview1",
    component: BoardView,
  },
  {
    path: "/boardview2",
    name: "boardview2",
    component: BoardView2,
  },
  {
    path: "/boardview3",
    name: "boardview3",
    component: BoardView3,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
