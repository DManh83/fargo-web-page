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
      Advantages
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
    <CarouselCard :items="solutions" titleColor="#ffffff" />
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
      background-color: #052e5e;
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

import { solutions } from '@/data/solutions'

import overviewLasc from '@/assets/images/overview_lasc.png'
import aboutLasc from '@/assets/images/intro_about_us.png'
import globalNetwork from '@/assets/images/wide_global_network.png'
import costOptimization from '@/assets/images/cost_optimization.png'
import technologyIntegration from '@/assets/images/technology_integration.png'
import customerSupport from '@/assets/images/customer_support2.png'
import overviewTransportation from '@/assets/images/overview_transportation.png'

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

const relatedServices = {
  title: 'Logistics and Supply chain ',
  imageSrc: overviewTransportation,
  paragraphs: [
    `We deliver integrated logistics and supply chain solutions, including freight forwarding, warehousing, and distribution. With advanced systems and a global network, Fargo Logistics ensures efficiency, cost savings, and reliability across every shipment.`,
  ],
}
</script>

<style scoped></style>
