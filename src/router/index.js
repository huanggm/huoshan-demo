import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/about1",
    name: "About1",
    component: () =>
      import(/* webpackChunkName: "about1" */ "../views/About1.vue"),
  },
  {
    path: "/about2",
    name: "About2",
    component: () =>
      import(/* webpackChunkName: "about2" */ "../views/About2.vue"),
  },
  {
    path: "/pay",
    name: "Pay",
    component: () => import(/* webpackChunkName: "pay" */ "../views/Pay.vue"),
  },
  {
    path: "/testVisiual",
    name: "TestVisiual",
    component: () =>
      import(/* webpackChunkName: "testVisiual" */ "../views/TestVisiual.vue"),
  },
  {
    path: "/page",
    name: "Page",
    component: () =>
      import(/* webpackChunkName: "page" */ "../views/pages/Page.vue"),
    children: [
      {
        path: "page1",
        component: () =>
          import(/* webpackChunkName: "page1" */ "../views/pages/Page1.vue"),
      },
      {
        path: "page2",
        component: () =>
          import(/* webpackChunkName: "page2" */ "../views/pages/Page2.vue"),
      },
      {
        path: "page3",
        component: () =>
          import(/* webpackChunkName: "page3" */ "../views/pages/Page3.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
