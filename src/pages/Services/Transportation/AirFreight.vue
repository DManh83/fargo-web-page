<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <BgHeader
      :title="$t('about.about')"
      :subtitle="$t('services.airFreight.title')"
      :imageSrc="airFreight"
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
    <h1 class="title">{{ $t('services.advantages') }}</h1>
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
  <section class="service-container">
    <CarouselCard :items="services" :title="$t('services.services')" />
  </section>
  <section class="related-solutions-container">
    <RelatedSolutions :items="relatedSolutions" />
  </section>
  <section class="featured-news-container">
    <FeaturedNews title="News" />
  </section>
  <section class="banner-container">
    <Banner />
  </section>
</template>

<script setup>
import BgHeader from '@/components/BgHeader.vue'
import Card from '@/components/Card.vue'
import CarouselCard from '@/components/CarouselCard.vue'
import RelatedSolutions from '@/components/RelatedSolutions.vue'
import FeaturedNews from '@/components/FeaturedNews.vue'
import Banner from '@/components/Banner.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

import airFreight from '@/assets/images/air_freight.png'
import overviewSea from '@/assets/images/overview_sea.png'
import aboutAirFreight from '@/assets/images/about_air_freight.png'
import overviewAir from '@/assets/images/overview_air.png'
import speedAndEfficiency from '@/assets/images/speed_and_efficiency.png'
import globalReach from '@/assets/images/wide_global_network.png'
import secureHandling from '@/assets/images/secure_handling.png'
import flexibleSolutions from '@/assets/images/flexible_solutions.png'
import LCL from '@/assets/images/LCL.png'
import FCL from '@/assets/images/FCL.png'
import CLAS from '@/assets/images/clas.png'
import BC from '@/assets/images/bc.png'

const { t } = useI18n()

const bgDescription = 'services.transportationDescription'
const overviewList = computed(() => [
  {
    id: 1,
    title: t('contact.description'),

    imageSrc: aboutAirFreight,
    height: '388px',
    reverse: false,
    buttonText: t('btn.requestQuote'),
    center: 'center',
  },
  {
    id: 2,
    title: t('services.overview'),
    paragraphs: [t('services.airFreight.overviewDescription')],
    imageSrc: overviewAir,
    height: '388px',
    reverse: true,
  },
])
const advantagesList = computed(() => [
  {
    id: 1,
    title: t('services.airFreight.speedAndEfficiency'),
    paragraphs: [
      t('services.airFreight.speedAndEfficiencyDescription'),
    ],
    imageSrc: speedAndEfficiency,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 2,
    title: t('services.airFreight.globalReach'),
    paragraphs: [
      t('services.airFreight.globalReachDescription'),
    ],
    imageSrc: globalReach,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
  {
    id: 3,
    title: t('services.airFreight.secureHandling'),
    paragraphs: [
      t('services.airFreight.secureHandlingDescription'),
    ],
    imageSrc: secureHandling,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 4,
    title: t('services.airFreight.flexibleSolutions'),
    paragraphs: [
      t('services.airFreight.flexibleSolutionsDescription'),
    ],
    imageSrc: flexibleSolutions,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
])
const services = computed(() => [
  {
    title: t('services.lcl'),
    description: t('services.lclDescription'),
    image: [LCL],
  },
  {
    title: t('services.fcl'),
    description: t('services.fclDescription'),
    image: [FCL],
  },
  {
    title: t('services.customsLegalAdvisoryServices'),
    description: t('services.customsLegalAdvisoryServicesDescription'),
    image: [CLAS],
  },
  {
    title: t('services.buyersConsolidation'),
    description: t('services.buyersConsolidationDescription'),
    image: [BC],
  },
])
const relatedSolutions = computed(() => [
  {
    id: 'transportation/sea-freight',
    title: t('services.seaFreight.title'),
    image: overviewSea,
    paragraphs: [
      t('services.seaFreight.description'),
    ],
    height: '356px',
    titleColor: '#ffff',
    textColor: '#ffff',
    reverse: true,
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
.service-container {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.related-solutions-container {
  margin-top: 50px;
}
.featured-news-container {
  margin-top: 50px;
}
.banner-container {
  width: 1200px;
  margin: 50px auto;
}
</style>
