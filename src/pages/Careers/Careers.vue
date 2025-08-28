<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <BgHeader title="About" subtitle="Careers" :imageSrc="bgCareers" :description="bgDescription" />
  </section>
  <section v-for="card in cardList" :key="card.id" class="card-container">
    <Card
      :title="card.title"
      :paragraphs="card.paragraphs"
      :imageSrc="card.imageSrc"
      :height="card.height"
      :reverse="card.reverse"
    />
  </section>
  <section class="why-fargo-container">
    <WhyFargo :cards="cards" />
  </section>
  <section class="jobs-container">
    <Jobs />
  </section>
</template>

<script setup>
import BgHeader from '@/components/BgHeader.vue'
import Card from '@/components/Card.vue'
import bgCareers from '@/assets/images/bg_careers.png'
import WhyFargo from '@/components/WhyFargo.vue'
import Jobs from '@/pages/Careers/components/Jobs.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
const { t } = useI18n()
import job_opportunities from '@/assets/images/job_opportunities.png'
import working_environment from '@/assets/images/working_environment.png'
import company_culture from '@/assets/images/company_culture.png'

const bgDescription = `careers.description`
const cardList = computed(() => [
  {
    id: 1,
    title: t('careers.jobOpportunities'),
    paragraphs: [
      t('careers.jobOpportunitiesDescription1'),
      t('careers.jobOpportunitiesDescription2'),
      t('careers.jobOpportunitiesDescription3'),
    ],
    imageSrc: job_opportunities,
    height: '388px',
    reverse: false,
  },
  {
    id: 2,
    title: t('careers.workingEnvironment'),
    paragraphs: [
      t('careers.workingEnvironmentDescription1'),
      t('careers.workingEnvironmentDescription2'),
      t('careers.workingEnvironmentDescription3'),
    ],
    imageSrc: working_environment,
    height: '388px',
    reverse: true,
  },
  {
    id: 3,
    title: t('careers.companyCulture'),
    paragraphs: [
      t('careers.companyCultureDescription1'),
      t('careers.companyCultureDescription2'),
      t('careers.companyCultureDescription3'),
    ],
    imageSrc: company_culture,
    height: '388px',
    reverse: false,
  },
])
const cards = computed(() => [
  {
    id: 1,
    title: t('careers.careerGrowthOpportunities'),
    content:
      t('careers.careerGrowthOpportunitiesDescription'),
  },
  {
    id: 2,
    title: t('careers.dynamicAndSupportiveEnvironment'),
    content:
      t('careers.dynamicAndSupportiveEnvironmentDescription'),
  },
  {
    id: 3,
    title: t('careers.globalExposureAndStability'),
    content:
      t('careers.globalExposureAndStabilityDescription'),
  },
])
</script>

<style scoped>
.card-container {
  width: 1200px;
  height: 388px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;
}

.why-fargo-container {
  width: 1200px;
  height: auto;
  margin: 0 auto 50px;
}
.jobs-container {
  width: 100%;
  height: auto;
  margin: 0 auto 50px;
  background-color: #cee5ff;
}
</style>
