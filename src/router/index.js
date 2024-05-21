import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import DoneTodosView from "../views/DoneTodosView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainView,
  },
  {
    path: "/done",
    name: "DoneTodos",
    component: DoneTodosView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
