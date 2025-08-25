<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <BgHeader
      title="About"
      subtitle="Air Freight"
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
import airFreight from '@/assets/images/air_freight.png'
import aboutAirFreight from '@/assets/images/about_air_freight.png'
import overviewAir from '@/assets/images/overview_air.png'
import speedAndEfficiency from '@/assets/images/speed_and_efficiency.png'
import globalReach from '@/assets/images/wide_global_network.png'
import secureHandling from '@/assets/images/secure_handling.png'
import flexibleSolutions from '@/assets/images/flexible_solutions.png'
import CarouselCard from '@/components/CarouselCard.vue'
import RelatedSolutions from '@/components/RelatedSolutions.vue'
import FeaturedNews from '@/components/FeaturedNews.vue'
import Banner from '@/components/Banner.vue'
import LCL from '@/assets/images/LCL.png'
import FCL from '@/assets/images/FCL.png'
import CLAS from '@/assets/images/clas.png'
import BC from '@/assets/images/bc.png'

const bgDescription = `"Beyond Shipping, We Move Possibilities"`
const overviewList = [
  {
    id: 1,
    title: `Contact us today to receive a tailored logistics quote for your international shipping needs.`,

    imageSrc: aboutAirFreight,
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
    imageSrc: overviewAir,
    height: '388px',
    reverse: true,
  },
]
const advantagesList = [
  {
    id: 1,
    title: 'Speed and Efficiency',
    paragraphs: [
      `Air freight provides the fastest possible transit times available, making it the best choice for urgent, time-critical, and high-value shipments across international markets.`,
    ],
    imageSrc: speedAndEfficiency,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 2,
    title: 'Global Reach',
    paragraphs: [
      `With access to major international airports worldwide and long-term partnerships with leading airlines, we guarantee extensive coverage across all key global trade routes.`,
    ],
    imageSrc: globalReach,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
  {
    id: 3,
    title: 'Secure Handling',
    paragraphs: [
      `Every shipment is carefully handled under strict safety protocols and constant professional supervision, minimizing risks and ensuring products always arrive in perfect condition.`,
    ],
    imageSrc: secureHandling,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 4,
    title: 'Flexible Solutions',
    paragraphs: [
      `We provide express, charter, and consolidated air freight services, carefully tailored and customized to meet diverse customer requirements and complex cargo demands.`,
    ],
    imageSrc: flexibleSolutions,
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
    title: 'Air Freight',
    image: airFreight,
    paragraphs: [
      'Air freight is a fast and efficient way to transport goods across the world, with reliable schedules and competitive rates.',
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
