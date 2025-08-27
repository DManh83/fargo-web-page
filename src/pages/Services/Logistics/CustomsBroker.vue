<template>
  <section>
    <BgHeader
      title="About"
      subtitle="Customs Broker"
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
    <CarouselCard title="Related Solutions" :items="relatedSolutions" titleColor="#ffffff" />
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

import { solutions } from '@/data/solutions'

import overviewCustomsBroker from '@/assets/images/customs_brokerage.png'
import introCustomsBroker from '@/assets/images/intro_about_us.png'
import regulatoryExpertise from '@/assets/images/regulatory_expertise.png'
import timeEfficiency from '@/assets/images/time_efficiency.png'
import costSavings2 from '@/assets/images/cost_savings2.png'
import customerSupport from '@/assets/images/customer_support.png'


const bgDescription = `"Smart moves. Strong supply chains"`

const overviewList = [
  {
    id: 1,
    title: `Contact us today to receive a tailored logistics quote for your international shipping needs.`,

    imageSrc: introCustomsBroker,
    height: '388px',
    reverse: false,
    buttonText: 'Request a Quote',
    center: 'center',
  },
  {
    id: 2,
    title: 'Overview',
    paragraphs: [
      `Our customs brokerage services simplify complex clearance procedures and ensure compliance with all international trade regulations. With a team of experienced specialists, we provide guidance on documentation, tariffs, and duties, helping businesses avoid delays at borders. By combining efficiency with accuracy, we make sure every shipment is processed quickly and smoothly for global trade success.`,
    ],
    imageSrc: overviewCustomsBroker,
    height: '388px',
    reverse: true,
  },
]
const advantagesList = [
  {
    id: 1,
    title: 'Regulatory Expertise',
    paragraphs: [
      `Our specialists understand customs laws and provide accurate guidance to minimize risks, avoid costly errors, and ensure smooth customs clearance processes.`,
    ],
    imageSrc: regulatoryExpertise,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 2,
    title: 'Time Efficiency',
    paragraphs: [
      `We streamline documentation and coordinate with customs authorities to reduce delays, allowing shipments to pass through quickly and efficiently every time.`,
    ],
    imageSrc: timeEfficiency,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
  {
    id: 3,
    title: 'Cost Savings',
    paragraphs: [
      `By optimizing tariff classifications and duty management, we help companies cut expenses while staying fully compliant with global trade regulations standards.`,
    ],
    imageSrc: costSavings2,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 4,
    title: 'Dedicated Support',
    paragraphs: [
      `Our team offers 24/7 assistance with clear updates and proactive solutions, ensuring clients receive reliable service at every logistics shipment stage worldwide.`,
    ],
    imageSrc: customerSupport,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
]

const relatedSolutions = solutions.filter((solution) => solution.title !== 'Customs brokerage')
</script>

<style scoped></style>
