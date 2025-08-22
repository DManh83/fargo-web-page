import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage/HomePage.vue'
import AboutUs from './pages/AboutUs/AboutUs.vue'
import NewsInsights from './pages/News&Insights/News&Insights.vue'
import NewsDetail from './pages/News&Insights/NewsDetail.vue'
import Careers from './pages/Careers/Careers.vue'
import CareersDetail from './pages/Careers/CareersDetail.vue'

const routes = [
  { name: 'Home', path: '/', component: HomePage, meta: { hideHeader: true, title: 'Home' } },
  { name: 'About Us', path: '/about-us', component: AboutUs, meta: { title: 'About Us' } },
  { name: 'News & Insights', path: '/news-insights', component: NewsInsights, meta: { title: 'News & Insights' } },
  {
    name: 'News Detail',
    path: '/news-insights/:id',
    component: NewsDetail,
    meta: {
      breadcrumb: (route) => ([
        { title: 'News & Insights', path: '/news-insights' },
        { title: route.query.title || 'News detail' }
      ]),
      title: 'News Detail',
    },
  },
  {
    name: 'Careers',
    path: '/careers',
    component: Careers,
    meta: { title: 'Careers' },
  },
  {
    name: 'Careers Detail',
    path: '/careers/:id',
    component: CareersDetail,
    meta: {
      title: 'Careers Detail',
      breadcrumb: (route) => ([
        { title: 'Careers', path: '/careers' },
        { title: route.query.title || 'Careers detail' }
      ]),
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return { ...savedPosition, behavior: 'smooth' }
    }
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
