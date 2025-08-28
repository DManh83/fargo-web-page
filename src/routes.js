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
import QuoteRequest from './pages/Support/QuoteRequest.vue'
import FAQs from './pages/Support/FAQs.vue'
import ContactUs from './pages/Support/ContactUs.vue'

const routes = [
  { name: 'Home', path: '/', component: HomePage, meta: { hideHeader: true, titleKey: 'routes.home' } },
  { name: 'About Us', path: '/about-us', component: AboutUs, meta: { titleKey: 'routes.aboutUs' } },
  { name: 'News & Insights', path: '/news-insights', component: NewsInsights, meta: { titleKey: 'routes.newsInsights' } },
  {
    name: 'News Detail',
    path: '/news-insights/:id',
    component: NewsDetail,
    meta: {
      titleKey: 'routes.newsDetail',
      breadcrumb: (route) => {
        const hasTitle = !!route.query.title
        return [
          { titleKey: 'routes.newsInsights', path: '/news-insights' },
          hasTitle
            ? { title: route.query.title, noI18n: true } // KHÔNG dịch tiêu đề bài viết
            : { titleKey: 'routes.newsDetail' },         // fallback: dịch key
        ]
      },
    },
  },
  {
    name: 'Careers',
    path: '/careers',
    component: Careers,
    meta: { titleKey: 'routes.careers' },
  },
  {
    name: 'Careers Detail',
    path: '/careers/:id',
    component: CareersDetail,
    meta: {
      titleKey: 'routes.careersDetail',
      breadcrumb: (route) => ([
        { titleKey: 'routes.careers', path: '/careers' },
        { title: route.query.title || 'Careers detail' }
      ]),
    },
  },
  {
    name: 'Transportation',
    path: '/transportation',
    component: Transportation,
    meta: {
      titleKey: 'routes.transportation',
      breadcrumb: () => ([
        { titleKey: 'routes.services' },
        { titleKey: 'routes.transportation' },
      ]),
    }
  },
  {
    name: 'Sea Freight',
    path: '/transportation/sea-freight',
    component: SeaFreight,
    meta: {
      title: 'Sea Freight',
      breadcrumb: () => ([
        { titleKey: 'routes.services' },
        { titleKey: 'routes.transportation', path: '/transportation' },
        { titleKey: 'routes.seaFreight' }
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
        { titleKey: 'routes.services' },
        { titleKey: 'routes.transportation', path: '/transportation' },
        { titleKey: 'routes.airFreight' }
      ]),
    }
  },
  {
    name: 'Logistics and Supply Chain',
    path: '/logistics-and-supply-chain',
    component: LogisticsSupplyChain,
    meta: {
      titleKey: 'routes.logisticsAndSupplyChain',
      breadcrumb: () => ([
        { titleKey: 'routes.services' },
        { titleKey: 'routes.logisticsAndSupplyChain' },
      ]),
    }
  },
  {
    name: 'Customs Broker',
    path: '/logistics-and-supply-chain/customs-broker',
    component: CustomsBroker,
    meta: {
      titleKey: 'routes.customsBroker',
      breadcrumb: () => ([
        { titleKey: 'routes.services' },
        { titleKey: 'routes.logisticsAndSupplyChain', path: '/logistics-and-supply-chain' },
        { titleKey: 'routes.customsBroker' }
      ]),
    }
  },
  {
    name: 'Cargo Insurance',
    path: '/logistics-and-supply-chain/cargo-insurance',
    component: CargoInsurance,
    meta: {
      titleKey: 'routes.cargoInsurance',
      breadcrumb: () => ([
        { titleKey: 'routes.services' },
        { titleKey: 'routes.logisticsAndSupplyChain', path: '/logistics-and-supply-chain' },
        { titleKey: 'routes.cargoInsurance' }
      ]),
    }
  },
  {
    name: 'Warehouse and Storage',
    path: '/logistics-and-supply-chain/warehouse-and-storage',
    component: WarehouseStorage,
    meta: {
      titleKey: 'routes.warehouseAndStorage',
      breadcrumb: () => ([
        { titleKey: 'routes.services' },
        { titleKey: 'routes.logisticsAndSupplyChain', path: '/logistics-and-supply-chain' },
        { titleKey: 'routes.warehouseAndStorage' }
      ]),
    }
  },
  {
    name: 'E-Commerce',
    path: '/logistics-and-supply-chain/e-commerce',
    component: ECommerce,
    meta: {
      titleKey: 'routes.eCommerce',
      breadcrumb: () => ([
        { titleKey: 'routes.services' },
        { titleKey: 'routes.logisticsAndSupplyChain', path: '/logistics-and-supply-chain' },
        { titleKey: 'routes.eCommerce' }
      ]),
    }
  },
  {
    name: 'Quote Request',
    path: '/support/quote-request',
    component: QuoteRequest,
    meta: {
      titleKey: 'routes.quoteRequest',
      breadcrumb: () => ([
        { titleKey: 'routes.support' },
        { titleKey: 'routes.quoteRequest' }
      ]),
    }
  },
  {
    name: 'FAQs',
    path: '/support/faqs',
    component: FAQs,
    meta: {
      titleKey: 'routes.faqs',
      breadcrumb: () => ([
        { titleKey: 'routes.support' },
        { titleKey: 'routes.faqs' }
      ]),
    }
  },
  {
    name: 'Contact Us',
    path: '/support/contact-us',
    component: ContactUs,
    meta: {
      titleKey: 'routes.contactUs',
      breadcrumb: () => ([
        { titleKey: 'routes.support' },
        { titleKey: 'routes.contactUs' }
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
