import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage/HomePage.vue'
import AboutUs from './pages/AboutUs/AboutUs.vue'
import NewsInsights from './pages/News&Insights/News&Insights.vue'
import NewsDetail from './pages/NewsDetail/NewsDetail.vue'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
