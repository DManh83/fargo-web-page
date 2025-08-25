<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <BgHeader
      title="About"
      subtitle="Sea Freight"
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
  <section class="service-container">
    <CarouselCard :items="services" title="Our Services" />
  </section>
  <section class="related-solutions-container">
    <RelatedSolutions :items="relatedSolutions" />
  </section>
  <section class="featured-news-container">
    <FeaturedNews title="News" />
  </section>
  <section class="banner-container">
    <Banner
      title-primary="Need a shipping solution?"
      title-secondary="Request your free quote now!"
      button-text="Request"
    />
  </section>
</template>

<script setup>
import BgHeader from '@/components/BgHeader.vue'
import Card from '@/components/Card.vue'
import bgTransportation from '@/assets/images/bg_transportation.png'
import introAboutUs from '@/assets/images/intro_about_us.png'
import overviewSea from '@/assets/images/overview_sea.png'
import wideGlobalNetwork from '@/assets/images/wide_global_network.png'
import costSavings from '@/assets/images/cost_savings.png'
import flexibleOptions from '@/assets/images/flexible_options.png'
import safeAndReliable from '@/assets/images/safe_and_reliable.png'
import CarouselCard from '@/components/CarouselCard.vue'
import LCL from '@/assets/images/LCL.png'
import FCL from '@/assets/images/FCL.png'
import CLAS from '@/assets/images/clas.png'
import BC from '@/assets/images/bc.png'
import RelatedSolutions from '@/components/RelatedSolutions.vue'
import FeaturedNews from '@/components/FeaturedNews.vue'
import Banner from '@/components/Banner.vue'

const bgDescription = `"Beyond Shipping, We Move Possibilities"`
const overviewList = [
  {
    id: 1,
    title: `Contact us today to receive a tailored logistics quote for your international shipping needs.`,

    imageSrc: introAboutUs,
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
    imageSrc: overviewSea,
    height: '388px',
    reverse: true,
  },
]
const advantagesList = [
  {
    id: 1,
    title: 'Wide Global Network',
    paragraphs: [
      `Direct access to major international ports with strong global partnerships ensures reliable shipping routes and smooth connections across all major global trade lanes.`,
    ],
    imageSrc: wideGlobalNetwork,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 2,
    title: 'Cost Savings',
    paragraphs: [
      `Sea freight is the most economical option for bulk shipments, helping companies significantly minimize overall transportation expenses while still maintaining consistent high service quality.`,
    ],
    imageSrc: costSavings,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
  {
    id: 3,
    title: 'Flexible Options',
    paragraphs: [
      `We offer both Full Container Load (FCL) and Less-than-Container Load (LCL), providing truly flexible shipping choices carefully tailored to suit different cargo sizes and specific business needs.`,
    ],
    imageSrc: flexibleOptions,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 4,
    title: 'Safe and Reliable',
    paragraphs: [
      `All shipments are handled under strict safety protocols and supported by advanced real-time monitoring and tracking systems to ensure secure, timely, and completely worry-free delivery.`,
    ],
    imageSrc: safeAndReliable,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
]
const services = [
  {
    title: 'LCL (Less Than Container Load)',
    description:
      'Cost-effective solution for smaller shipments, combining multiple cargos into one container with reliable schedules.',
    image: [LCL],
  },
  {
    title: 'FCL (Full Container Load)',
    description:
      'Dedicated containers for a single customer, ensuring faster handling, greater security, and optimized delivery times.',
    image: [FCL],
  },
  {
    title: 'Customs legal advisory services',
    description:
      'Professional support for customs clearance and compliance, reducing delays and ensuring smooth cross-border trade.',
    image: [CLAS],
  },
  {
    title: "Buyer's consolidation",
    description:
      'Consolidate goods from multiple suppliers into one shipment, lowering costs and simplifying international logistics.',
    image: [BC],
  },
]
const relatedSolutions = [
  {
    title: 'Sea Freight',
    image: overviewSea,
    paragraphs: [
      'Sea freight is a fast and efficient way to transport goods across the world, with reliable schedules and competitive rates.',
    ],
    height: '356px',
    titleColor: '#ffff',
    textColor: '#ffff',
    reverse: true,
  },
]
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
