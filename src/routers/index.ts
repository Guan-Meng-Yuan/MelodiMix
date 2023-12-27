import { RouteRecordRaw } from "vue-router";

const routers: RouteRecordRaw[] = [
  {
    path: "/", component: () => import("@/pages/index.vue")
  },
  {
    path: '/favorite', component: () => import('@/pages/favorite/index.vue'),
    name: 'favorite'
  },
  {
    path: '/like', component: () => import('@/pages/like/index.vue'),
    name: 'like'
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes: routers,
});

export default router;
