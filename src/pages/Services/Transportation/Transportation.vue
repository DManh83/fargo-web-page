<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <BgHeader
      :title="$t('about.about')"
      :subtitle="subtitle"
      :imageSrc="bgTransportation"
      :description="bgDescription"
    />
  </section>
  <section class="overview-container">
    <div v-for="item in overviewList" :key="item.id" class="overview-list">
      <Card
        :title="item.title"
        :paragraphs="item.paragraphs"
        :imageSrc="item.imageSrc"
        :height="item.height"
        :buttonText="item.buttonText"
        :center="item.center"
        :reverse="item.reverse"
      />
    </div>
  </section>
  <section class="advantages-container">
    <h1 class="title">{{ t('services.advantages') }}</h1>
    <div v-for="item in advantagesList" :key="item.id" class="advantages-list">
      <Card
        :title="item.title"
        :paragraphs="item.paragraphs"
        :imageSrc="item.imageSrc"
        :height="item.height"
        :buttonText="item.buttonText"
        :reverse="item.reverse"
        :grid="item.grid"
        titleSize="20px"
        pSize="16px"
        gap="40px"
      />
    </div>
  </section>
  <section class="related-solutions-container">
    <RelatedSolutions :items="items" :title="t('services.transportationSolutions')" />
  </section>
  <section class="specialized-logistics-container">
    <SpecializedLogistics />
  </section>
  <section class="related-services-container">
    <RelatedServices :item="relatedServices" />
  </section>
  <section class="featured-news-container">
    <FeaturedNews title="News" />
  </section>
  <section class="banner-container">
    <Banner
    />
  </section>
</template>

<script setup>
import BgHeader from '@/components/BgHeader.vue'
import Card from '@/components/Card.vue'
import RelatedSolutions from '@/components/RelatedSolutions.vue'
import SpecializedLogistics from '@/components/SpecializedLogistics.vue'
import RelatedServices from '@/components/RelatedServices.vue'
import FeaturedNews from '@/components/FeaturedNews.vue'
import Banner from '@/components/Banner.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

import bgTransportation from '@/assets/images/bg_transportation.png'
import introAboutUs from '@/assets/images/intro_about_us.png'
import overviewTransportation from '@/assets/images/overview_transportation.png'
import globalCoverage from '@/assets/images/global_coverage.png'
import costEfficiency from '@/assets/images/cost_efficiency.png'
import onTimeDelivery from '@/assets/images/on_time_delivery.png'
import customerSupport from '@/assets/images/customer_support.png'
import overviewLasc from '@/assets/images/overview_lasc.png'
import seaFreight from '@/assets/images/sea_freight.png'
import airFreight from '@/assets/images/air_freight.png'

const { t } = useI18n()

const bgDescription = 'services.transportationDescription'
const subtitle = 'services.transportation.title'

const items = computed(() => [
  {
    id: 'transportation/air-freight',
    title: t('services.airFreight.title'),
    image: airFreight,
  },
  {
    id: 'transportation/sea-freight',
    title: t('services.seaFreight.title'),
    image: seaFreight,
  },
])

const relatedServices = computed(() => ({
  title: t('services.logisticsAndSupplyChain.title'),
  imageSrc: overviewLasc,
  paragraphs: [
    t('services.logisticsAndSupplyChain.relatedSolutionsDescription'),
  ],
  path: '/logistics-and-supply-chain',
}))

const overviewList = computed(() => [
  {
    id: 1,
    title: t('contact.description'),

    imageSrc: introAboutUs,
    height: '388px',
    reverse: false,
    buttonText: t('btn.requestQuote'),
    center: 'center',
  },
  {
    id: 2,
    title: t('services.overview'),
    paragraphs: [
      t('services.transportation.overviewDescription'),
    ],
    imageSrc: overviewTransportation,
    height: '388px',
    reverse: true,
  },
])

const advantagesList = computed(() => [
  {
    id: 1,
    title: t('services.transportation.globalCoverage'),
    paragraphs: [
      t('services.transportation.globalCoverageDescription'),
    ],
    imageSrc: globalCoverage,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 2,
    title: t('services.transportation.costEfficiency'),
    paragraphs: [
      t('services.transportation.costEfficiencyDescription'),
    ],
    imageSrc: costEfficiency,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
  {
    id: 3,
    title: t('services.transportation.onTimeDelivery'),
    paragraphs: [
      t('services.transportation.onTimeDeliveryDescription'),
    ],
    imageSrc: onTimeDelivery,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 4,
    title: t('services.transportation.customerSupport'),
    paragraphs: [
      t('services.transportation.customerSupportDescription'),
    ],
    imageSrc: customerSupport,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
])
</script>

<style scoped>
.overview-container {
  width: 1200px;
  height: 100%;
  margin: 100px auto 0;
}
.overview-list {
  margin-top: 30px;
}
.advantages-container {
  width: 1200px;
  height: 100%;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.advantages-container .title {
  font-size: 32px;
  font-weight: 600;
  color: #052e5e;
  font-family: 'Poppins', sans-serif;
}
.advantages-list {
  margin-top: 30px;
}
.related-solutions-container {
  width: 100%;
  margin: 100px auto 0;
}
.specialized-logistics-container {
  width: 1200px;
  height: 100%;
  margin: 50px auto;
}
.related-services-container {
  width: 100%;
  height: 100%;
  margin: 100px auto 0;
  background-color: #052e5e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.featured-news-container {
  width: 100%;
  height: 100%;
  margin: 50px auto 0;
}
.banner-container {
  width: 1200px;
  height: 100%;
  margin: 50px auto;
}
</style>
