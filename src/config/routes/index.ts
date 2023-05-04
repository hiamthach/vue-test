import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@/pages/views/HomePage.vue";
import EventsPage from "@/pages/views/EventsPage.vue";
import EventDetailPage from "@/pages/views/EventDetailPage.vue";
import MerchMusicPage from "@/pages/views/MerchMusicPage.vue";
import MerchDetailPage from "@/pages/views/MerchDetailPage.vue";
import NotFound from "@/pages/exceptions/NotFound.vue";
import ComingSoon from "@/pages/exceptions/ComingSoon.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/events",
    name: "Events",
    component: EventsPage,
  },
  {
    path: "/events/:id",
    name: "EventDetail",
    component: EventDetailPage,
  },
  {
    path: "/merch-music",
    name: "MerchMusic",
    component: MerchMusicPage,
  },
  {
    path: "/merch-music/:id",
    name: "MerchDetail",
    component: MerchDetailPage,
  },
  {
    path: "/coming-soon",
    name: "ComingSoon",
    component: ComingSoon,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
