<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <BgHeader
      title="About"
      subtitle="Transportation"
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
  <section class="related-solutions-container">
    <RelatedSolutions :items="items" title="Transportation Solutions" />
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
import overviewTransportation from '@/assets/images/overview_transportation.png'
import globalCoverage from '@/assets/images/global_coverage.png'
import costEfficiency from '@/assets/images/cost_efficiency.png'
import onTimeDelivery from '@/assets/images/on_time_delivery.png'
import customerSupport from '@/assets/images/customer_support.png'
import RelatedSolutions from '@/components/RelatedSolutions.vue'
import SpecializedLogistics from '@/components/SpecializedLogistics.vue'
import RelatedServices from '@/components/RelatedServices.vue'
import logisticsAndSupplyChainRSE from '@/assets/images/logistics_and_supply_chain_rse.png'
import FeaturedNews from '@/components/FeaturedNews.vue'
import Banner from '@/components/Banner.vue'
import seaFreight from '@/assets/images/sea_freight.png'
import airFreight from '@/assets/images/air_freight.png'

const items = [
  {
    id: 1,
    title: 'Air Freight',
    image: airFreight,
  },
  {
    id: 2,
    title: 'Sea Freight',
    image: seaFreight,
  },
]

const relatedServices = {
  title: 'Logistics and Supply chain ',
  imageSrc: logisticsAndSupplyChainRSE,
  paragraphs: [
    `We deliver integrated logistics and supply chain solutions, including freight forwarding, warehousing, and distribution. With advanced systems and a global network, Fargo Logistics ensures efficiency, cost savings, and reliability across every shipment.`,
  ],
}

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
      `At Fargo Logistics, our transportation services cover sea, air, and land solutions tailored to meet the needs of global trade. With a strong network of partners and advanced tracking technology, we ensure shipments are delivered safely, on time, and cost-effectively. From international freight forwarding to domestic distribution, we provide seamless logistics that connect businesses and markets worldwide.`,
    ],
    imageSrc: overviewTransportation,
    height: '388px',
    reverse: true,
  },
]
const advantagesList = [
  {
    id: 1,
    title: 'Global Coverage',
    paragraphs: [
      `With an extensive international network of partners and agents, Fargo Logistics connects major trade hubs worldwide. We provide seamless shipping across sea, air, and land, ensuring businesses can expand their reach with confidence.`,
    ],
    imageSrc: globalCoverage,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 2,
    title: 'Cost Efficiency',
    paragraphs: [
      `Our team focuses on optimizing shipping routes and consolidating cargo to minimize costs. By collaborating with trusted carriers, we deliver competitive pricing without compromising service quality.`,
    ],
    imageSrc: costEfficiency,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
  {
    id: 3,
    title: 'On-Time Delivery',
    paragraphs: [
      `Through advanced planning, real-time tracking, and proactive communication, we guarantee timely deliveries. Our process minimizes delays, keeping your supply chain reliable and efficient.`,
    ],
    imageSrc: onTimeDelivery,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 4,
    title: 'Customer Support',
    paragraphs: [
      `We pride ourselves on offering personalized, 24/7 customer care. From inquiries to problem-solving, our dedicated team ensures smooth operations and peace of mind for every client.`,
    ],
    imageSrc: customerSupport,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
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
