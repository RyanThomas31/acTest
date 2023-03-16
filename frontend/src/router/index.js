import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import Admin from '../views/AdminView.vue'
import Profile from '../views/ProfileView.vue'
import Contact from '../views/ContactView.vue'
import Login from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'ProductsView',
    component: ProductsView
  },
  {
    path: '/my-account',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/contact-us',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
