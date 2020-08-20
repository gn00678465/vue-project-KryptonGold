import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { // 前台
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Home/Index.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/Home/Products.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/Home/Product.vue'),
      },
      {
        path: 'tips',
        component: () => import('../views/Home/Tips.vue'),
      },
      {
        path: 'carts',
        component: () => import('../views/Home/Carts.vue'),
      },
      {
        path: 'contactus',
        component: () => import('../views/Home/ContactUs.vue'),
      },
    ],
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
        path: 'editproducts',
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
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
