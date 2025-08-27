<template>
  <section>
    <BgHeader
      title="About"
      subtitle="Warehouse and Storage"
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

import overviewWarehousing from '@/assets/images/warehousing.png'
import introWarehousing from '@/assets/images/intro_about_us.png'
import secureFacilities from '@/assets/images/secure_facilities.png'
import flexibleSolutions from '@/assets/images/flexible_solutions2.png'
import costEfficiency from '@/assets/images/cost_efficiency.png'
import technologyIntegration from '@/assets/images/technology_integration2.png'

const bgDescription = `"Smart moves. Strong supply chains"`

const overviewList = [
  {
    id: 1,
    title: `Contact us today to receive a tailored logistics quote for your international shipping needs.`,

    imageSrc: introWarehousing,
    height: '388px',
    reverse: false,
    buttonText: 'Request a Quote',
    center: 'center',
  },
  {
    id: 2,
    title: 'Overview',
    paragraphs: [
      `Our warehouse and storage services ensure goods are kept safe, organized, and accessible at all times. With modern facilities and advanced monitoring, we provide flexible short-term and long-term solutions. These services help businesses optimize inventory management, reduce costs, and maintain a smooth supply chain.`,
    ],
    imageSrc: overviewWarehousing,
    height: '388px',
    reverse: true,
  },
]
const advantagesList = [
  {
    id: 1,
    title: 'Secure Facilities',
    paragraphs: [
      `Our warehouses are fully equipped with advanced security, monitoring, and fire prevention systems, ensuring goods remain safe under every possible condition worldwide.`,
    ],
    imageSrc: secureFacilities,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 2,
    title: 'Flexible Solutions',
    paragraphs: [
      `We provide both short-term and long-term storage options, allowing businesses to adapt quickly and manage inventory with greater efficiency and flexibility.`,
    ],
    imageSrc: flexibleSolutions,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
  {
    id: 3,
    title: 'Cost Efficiency',
    paragraphs: [
      `Optimized storage plans reduce handling expenses and help companies achieve better supply chain savings without compromising overall service quality levels.`,
    ],
    imageSrc: costEfficiency,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 4,
    title: 'Technology Integration',
    paragraphs: [
      `With real-time tracking and smart warehouse management tools, clients can monitor inventory, plan operations, and improve productivity seamlessly every single day.`,
    ],
    imageSrc: technologyIntegration,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
]

const relatedSolutions = solutions.filter((solution) => solution.title !== 'Warehousing')
</script>
