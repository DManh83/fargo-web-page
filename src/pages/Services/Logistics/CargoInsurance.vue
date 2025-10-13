<template>
  <section>
    <BgHeader
      :title="$t('about.about')"
      :subtitle="$t('services.cargoInsurance.title')"
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
    <CarouselCard
      :title="$t('services.relatedSolutions')"
      :items="i18nSolutions"
      titleColor="var(--primary)"
    />
  </section>
  <section style="margin: 50px auto">
    <FeaturedNews title="News" />
  </section>
  <section class="banner-container" style="width: 1200px; margin: 50px auto">
    <Banner />
  </section>
</template>

<script setup>
import BgHeader from '@/components/BgHeader.vue'
import bgTransportation from '../../../../public/images/bg_transportation.png'
import Card from '@/components/Card.vue'
import CarouselCard from '@/components/CarouselCard.vue'
import FeaturedNews from '@/components/FeaturedNews.vue'
import Banner from '@/components/Banner.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { solutions } from '@/data/solutions'

import overviewCargoInsurance from '@/assets/images/cargo_insurance.png'
import introCargoInsurance from '@/assets/images/intro_about_us.png'
import comprehensiveCoverage from '../../../../public/images/comprehensive_coverage.png'
import costProtection from '../../../../public/images/cost_protection.png'
import flexibleOptions from '../../../../public/images/flexible_options.png'
import peaceOfMind from '../../../../public/images/peace_of_mind.png'

const { t } = useI18n()

const overviewList = computed(() => [
  {
    id: 1,
    title: t('contact.description'),

    imageSrc: introCargoInsurance,
    height: '388px',
    reverse: false,
    buttonText: t('btn.requestQuote'),
    center: 'center',
  },
  {
    id: 2,
    title: t('services.overview'),
    paragraphs: [t('services.cargoInsurance.overviewDescription')],
    imageSrc: overviewCargoInsurance,
    height: '388px',
    reverse: true,
  },
])
const advantagesList = [
  {
    id: 1,
    title: t('services.cargoInsurance.comprehensiveCoverage'),
    paragraphs: [t('services.cargoInsurance.comprehensiveCoverageDescription')],
    imageSrc: comprehensiveCoverage,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 2,
    title: t('services.cargoInsurance.costProtection'),
    paragraphs: [t('services.cargoInsurance.costProtectionDescription')],
    imageSrc: costProtection,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
  {
    id: 3,
    title: t('services.cargoInsurance.flexibleOptions'),
    paragraphs: [t('services.cargoInsurance.flexibleOptionsDescription')],
    imageSrc: flexibleOptions,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 4,
    title: t('services.cargoInsurance.peaceOfMind'),
    paragraphs: [t('services.cargoInsurance.peaceOfMindDescription')],
    imageSrc: peaceOfMind,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
]

const i18nSolutions = computed(() => {
  const relatedSolutions = solutions.filter(
    (solution) => solution.title !== t(`services.cargoInsurance.title`),
  )
  return relatedSolutions.map((solution) => ({
    ...solution,
    title: t(`services.${solution.title}`),
    description: t(`services.${solution.description}`),
  }))
})
</script>

<style>
.title:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 32px !important;
  font-weight: 600 !important;
}
</style>
