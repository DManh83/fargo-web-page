<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <BgHeader
      :title="$t('about.about')"
      :subtitle="$t('services.logisticsAndSupplyChain.title')"
      :imageSrc="bgTransportation"
      :description="$t('services.logisticsAndSupplyChain.description')"
    />
  </section>
  <section class="overview-container" style="margin: 50px auto 0; width: 1200px; height: auto">
    <div v-for="item in overviewList" :key="item.id" class="overview-list" style="margin-top: 30px">
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
  <section
    class="advantages-container"
    style="
      width: 1200px;
      height: auto;
      margin: 50px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    "
  >
    <h1
      class="title"
      style="
        font-size: 32px;
        font-weight: 600;
        color: var(--secondary);
        font-family: 'Poppins', sans-serif;
      "
    >
      {{ $t('services.advantages') }}
    </h1>
    <div
      v-for="item in advantagesList"
      :key="item.id"
      class="advantages-list"
      style="margin-top: 30px"
    >
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
  <section
    class="carousel-container"
    style="
      background-color: var(--secondary);
      clip-path: ellipse(100% 100% at 50% 100%);
      padding: 1px 0 50px 0;
      margin: 50px auto;
    "
  >
    <CarouselCard :items="i18nSolutions" titleColor="var(--primary)" />
  </section>
  <section style="margin: 50px auto">
    <SpecializedLogistics />
  </section>
  <section
    class="related-services-container"
    style="
      width: 100%;
      height: auto;
      margin: 100px auto 0;
      background-color: var(--secondary);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    "
  >
    <RelatedServices :item="relatedServices" />
  </section>
  <section style="margin: 50px auto">
    <FeaturedNews title="News" />
  </section>
  <section class="banner-container" style="width: 1200px; margin: 50px auto">
    <Banner
      title-primary="Need a shipping solution?"
      title-secondary="Request your free quote now!"
      button-text="Request"
    />
  </section>
</template>

<script setup>
import BgHeader from '@/components/BgHeader.vue'
import bgTransportation from '@/assets/images/bg_transportation.png'
import Card from '@/components/Card.vue'
import CarouselCard from '@/components/CarouselCard.vue'
import SpecializedLogistics from '@/components/SpecializedLogistics.vue'
import RelatedServices from '@/components/RelatedServices.vue'
import FeaturedNews from '@/components/FeaturedNews.vue'
import Banner from '@/components/Banner.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { solutions } from '@/data/solutions'

import overviewLasc from '@/assets/images/overview_lasc.png'
import aboutLasc from '@/assets/images/intro_about_us.png'
import globalNetwork from '@/assets/images/wide_global_network.png'
import costOptimization from '@/assets/images/cost_optimization.png'
import technologyIntegration from '@/assets/images/technology_integration.avif'
import customerSupport from '@/assets/images/customer_support2.png'
import overviewTransportation from '@/assets/images/overview_transportation.avif'

const { t } = useI18n()

const overviewList = computed(() => [
  {
    id: 1,
    title: t('contact.description'),

    imageSrc: aboutLasc,
    height: '388px',
    reverse: false,
    buttonText: t('btn.requestQuote'),
    center: 'center',
  },
  {
    id: 2,
    title: t('services.overview'),
    paragraphs: [t('services.logisticsAndSupplyChain.relatedSolutionsDescription')],
    imageSrc: overviewLasc,
    height: '388px',
    reverse: true,
  },
])
const advantagesList = computed(() => [
  {
    id: 1,
    title: t('services.logisticsAndSupplyChain.globalNetwork'),
    paragraphs: [t('services.logisticsAndSupplyChain.globalNetworkDescription')],
    imageSrc: globalNetwork,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 2,
    title: t('services.logisticsAndSupplyChain.costOptimization'),
    paragraphs: [t('services.logisticsAndSupplyChain.costOptimizationDescription')],
    imageSrc: costOptimization,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
  {
    id: 3,
    title: t('services.logisticsAndSupplyChain.technologyIntegration'),
    paragraphs: [t('services.logisticsAndSupplyChain.technologyIntegrationDescription')],
    imageSrc: technologyIntegration,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 4,
    title: t('services.logisticsAndSupplyChain.customerSupport'),
    paragraphs: [t('services.logisticsAndSupplyChain.customerSupportDescription')],
    imageSrc: customerSupport,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
])
const i18nSolutions = computed(() => {
  return solutions.map((solution) => ({
    ...solution,
    title: t(`services.${solution.title}`),
    description: t(`services.${solution.description}`),
  }))
})
const relatedServices = computed(() => ({
  title: t('services.transportation.title'),
  imageSrc: overviewTransportation,
  paragraphs: [t('services.transportation.relatedSolutionsDescription')],
  path: '/transportation',
}))
</script>

<style scoped>
.title:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 32px !important;
  font-weight: 600 !important;
}
</style>
