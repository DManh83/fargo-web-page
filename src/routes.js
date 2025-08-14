import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage/HomePage.vue'
import AboutUs from './pages/AboutUs/AboutUs.vue'

const routes = [
  { name: 'Home', path: '/', component: HomePage, meta: { hideHeader: true, title: 'Home' } },
  { name: 'About Us', path: '/about-us', component: AboutUs, meta: { title: 'About Us' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
