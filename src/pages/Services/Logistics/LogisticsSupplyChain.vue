<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <BgHeader
      title="About"
      subtitle="Logistics and Supply chain"
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
    <h1 class="title">Advantages</h1>
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
        gap="40px"
      />
    </div>
  </section>
</template>

<script setup>
import BgHeader from '@/components/BgHeader.vue'
import bgTransportation from '@/assets/images/bg_transportation.png'
import Card from '@/components/Card.vue'
import overviewLasc from '@/assets/images/overview_lasc.png'
import aboutLasc from '@/assets/images/intro_about_us.png'
import globalNetwork from '@/assets/images/wide_global_network.png'
import costOptimization from '@/assets/images/cost_efficiency.png'
import technologyIntegration from '@/assets/images/on_time_delivery.png'
import customerSupport from '@/assets/images/customer_support.png'

const bgDescription = `"Smart moves. Strong supply chains"`

const overviewList = [
  {
    id: 1,
    title: `Contact us today to receive a tailored logistics quote for your international shipping needs.`,

    imageSrc: aboutLasc,
    height: '388px',
    reverse: false,
    buttonText: 'Request a Quote',
    center: 'center',
  },
  {
    id: 2,
    title: 'Overview',
    paragraphs: [
      `Sea freight remains the most cost-effective and reliable method for transporting large volumes across international markets. Fargo Logistics offers both FCL (Full Container Load) and LCL (Less-than-Container Load) services with flexible schedules and competitive rates. With strong partnerships with major carriers, we ensure smooth operations, safe handling, and timely delivery for all shipments.`,
    ],
    imageSrc: overviewLasc,
    height: '388px',
    reverse: true,
  },
]
const advantagesList = [
  {
    id: 1,
    title: 'Global Network',
    paragraphs: [
      `With offices and partners worldwide, we guarantee smooth cross-border operations, giving customers access to an extensive logistics infrastructure system.`,
    ],
    imageSrc: globalNetwork,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 2,
    title: 'Cost Optimization',
    paragraphs: [
      `Our solutions are tailored to reduce unnecessary costs while maintaining high-quality service, helping clients achieve efficiency and sustainable business growth.`,
    ],
    imageSrc: costOptimization,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
  {
    id: 3,
    title: 'Technology Integration',
    paragraphs: [
      `We apply smart tracking systems and digital platforms to provide real-time shipment visibility, transparency, and operational control.`,
    ],
    imageSrc: technologyIntegration,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 4,
    title: 'Customer Support',
    paragraphs: [
      `A dedicated service team is available 24/7, ensuring responsive communication and professional handling of every shipping requirement request.`,
    ],
    imageSrc: customerSupport,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
]
</script>

<style scoped></style>
