import Layout from "@/layouts/index.vue";

const routers: any[] = [
  {
    path: "",
    component: Layout,
    redirect: "/index",
    hidden: true,
    children: [
      { path: "/index", component: () => import("@/pages/index.vue") },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routers,
});

export default router;
