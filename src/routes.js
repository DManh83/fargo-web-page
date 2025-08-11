import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage/HomePage.vue'

const routes = [
  { name: 'home', path: '/', component: HomePage },
  { name: 'home', path: '/#home', component: HomePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
