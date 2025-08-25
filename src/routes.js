import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage/HomePage.vue'
import AboutUs from './pages/AboutUs/AboutUs.vue'
import NewsInsights from './pages/News&Insights/News&Insights.vue'
import NewsDetail from './pages/News&Insights/NewsDetail.vue'
import Careers from './pages/Careers/Careers.vue'
import CareersDetail from './pages/Careers/CareersDetail.vue'
import Transportation from './pages/Services/Transportation/Transportation.vue'
import SeaFreight from './pages/Services/Transportation/SeaFreight.vue'
import AirFreight from './pages/Services/Transportation/AirFreight.vue'
import LogisticsSupplyChain from './pages/Services/Logistics/LogisticsSupplyChain.vue'
import CustomsBroker from './pages/Services/Logistics/CustomsBroker.vue'
import CargoInsurance from './pages/Services/Logistics/CargoInsurance.vue'
import WarehouseStorage from './pages/Services/Logistics/WarehouseStorage.vue'
import ECommerce from './pages/Services/Logistics/ECommerce.vue'

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
  {
    name: 'Transportation',
    path: '/transportation',
    component: Transportation,
    meta: { title: 'Transportation' }
  },
  {
    name: 'Sea Freight',
    path: '/transportation/sea-freight',
    component: SeaFreight,
    meta: {
      title: 'Sea Freight',
      breadcrumb: () => ([
        { title: 'Transportation', path: '/transportation' },
        { title: 'Sea Freight' }
      ]),
    }
  },
  {
    name: 'Air Freight',
    path: '/transportation/air-freight',
    component: AirFreight,
    meta: {
      title: 'Air Freight',
      breadcrumb: () => ([
        { title: 'Transportation', path: '/transportation' },
        { title: 'Air Freight' }
      ]),
    }
  },
  {
    name: 'Logistics and Supply Chain',
    path: '/logistics-and-supply-chain',
    component: LogisticsSupplyChain,
    meta: {
      title: 'Logistics and Supply Chain',
    }
  },
  {
    name: 'Customs Broker',
    path: '/logistics-and-supply-chain/customs-broker',
    component: CustomsBroker,
    meta: {
      title: 'Customs Broker',
      breadcrumb: () => ([
        { title: 'Logistics and Supply Chain', path: '/logistics-and-supply-chain' },
        { title: 'Customs Broker' }
      ]),
    }
  },
  {
    name: 'Cargo Insurance',
    path: '/logistics-and-supply-chain/cargo-insurance',
    component: CargoInsurance,
    meta: {
      title: 'Cargo Insurance',
      breadcrumb: () => ([
        { title: 'Logistics and Supply Chain', path: '/logistics-and-supply-chain' },
        { title: 'Cargo Insurance' }
      ]),
    }
  },
  {
    name: 'Warehouse and Storage',
    path: '/logistics-and-supply-chain/warehouse-and-storage',
    component: WarehouseStorage,
    meta: {
      title: 'Warehouse and Storage',
      breadcrumb: () => ([
        { title: 'Logistics and Supply Chain', path: '/logistics-and-supply-chain' },
        { title: 'Warehouse and Storage' }
      ]),
    }
  },
  {
    name: 'E-Commerce',
    path: '/logistics-and-supply-chain/e-commerce',
    component: ECommerce,
    meta: {
      title: 'E-Commerce',
      breadcrumb: () => ([
        { title: 'Logistics and Supply Chain', path: '/logistics-and-supply-chain' },
        { title: 'E-Commerce' }
      ]),
    }
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
