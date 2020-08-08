import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { // 前台
    path: '/',
    name: 'Home',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/login',
    component: () => import('../views/DashBoard/Login.vue'),
  },
  { // 後台
    path: '/:path',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '/admin',
        name: 'Dashboard',
        component: () => import('../views/DashBoard/Main.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/DashBoard/Products.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/DashBoard/Coupons.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/DashBoard/Orders.vue'),
      },
      {
        path: 'storage',
        component: () => import('../views/DashBoard/Storage.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
