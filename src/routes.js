import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage/HomePage.vue'
import AboutUs from './pages/AboutUs/AboutUs.vue'

const routes = [
  { name: 'home', path: '/', component: HomePage },
  { name: 'about-us', path: '/about-us', component: AboutUs },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
