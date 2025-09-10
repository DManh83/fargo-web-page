<template>
  <section>
    <BgHeader
      :title="$t('about.about')"
      :subtitle="$t('services.warehousing.title')"
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
      style="font-size: 32px; font-weight: 600; color: #052e5e; font-family: 'Poppins', sans-serif"
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
      background-color: #052e5e;
      clip-path: ellipse(100% 100% at 50% 100%);
      padding: 1px 0 50px 0;
      margin: 50px auto;
    "
  >
    <CarouselCard :title="$t('services.relatedSolutions')" :items="i18nSolutions" titleColor="#ffffff" />
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
import FeaturedNews from '@/components/FeaturedNews.vue'
import Banner from '@/components/Banner.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { solutions } from '@/data/solutions'

import overviewWarehousing from '@/assets/images/warehousing.png'
import introWarehousing from '@/assets/images/intro_about_us.png'
import secureFacilities from '@/assets/images/secure_facilities.png'
import flexibleSolutions from '@/assets/images/flexible_solutions2.png'
import costEfficiency from '@/assets/images/cost_efficiency.png'
import technologyIntegration from '@/assets/images/technology_integration2.png'

const { t } = useI18n()

const overviewList = computed(() => [
  {
    id: 1,
    title: t('contact.description'),

    imageSrc: introWarehousing,
    height: '388px',
    reverse: false,
    buttonText: t('btn.requestQuote'),
    center: 'center',
  },
  {
    id: 2,
    title: t('services.overview'),
    paragraphs: [
      t('services.warehousing.overviewDescription'),
    ],
    imageSrc: overviewWarehousing,
    height: '388px',
    reverse: true,
  },
])
const advantagesList = computed(() => [
  {
    id: 1,
    title: t('services.warehousing.secureFacilities'),
    paragraphs: [
      t('services.warehousing.secureFacilitiesDescription'),
    ],
    imageSrc: secureFacilities,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 2,
    title: t('services.warehousing.flexibleSolutions'),
    paragraphs: [
      t('services.warehousing.flexibleSolutionsDescription'),
    ],
    imageSrc: flexibleSolutions,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
  {
    id: 3,
    title: t('services.warehousing.costEfficiency'),
    paragraphs: [
      t('services.warehousing.costEfficiencyDescription'),
    ],
    imageSrc: costEfficiency,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 4,
    title: t('services.warehousing.technologyIntegration'),
    paragraphs: [
      t('services.warehousing.technologyIntegrationDescription'),
    ],
    imageSrc: technologyIntegration,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
])

const i18nSolutions = computed(() => {
  const relatedSolutions = solutions.filter((solution) => solution.title !== t(`services.warehousing.title`))
  return relatedSolutions.map(solution => ({
    ...solution,
    title: t(`services.${solution.title}`),
    description: t(`services.${solution.description}`)
  }))
})
</script>
