<template>
  <section>
    <BgHeader
      title="About"
      subtitle="E-Commerce"
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

import overviewECommerce from '@/assets/images/e_commerce.png'
import introECommerce from '@/assets/images/intro_about_us.png'
import fastFulfillment from '@/assets/images/fast_fulfillment.png'
import scalableSolutions from '@/assets/images/scalable_solutions.png'
import customerExperience from '@/assets/images/customer_experience.png'
import technologyDriven from '@/assets/images/technology_driven.png'

const bgDescription = `"Smart moves. Strong supply chains"`

const overviewList = [
  {
    id: 1,
    title: `Contact us today to receive a tailored logistics quote for your international shipping needs.`,

    imageSrc: introECommerce,
    height: '388px',
    reverse: false,
    buttonText: 'Request a Quote',
    center: 'center',
  },
  {
    id: 2,
    title: 'Overview',
    paragraphs: [
      `Our e-commerce logistics solutions ensure fast order fulfillment, reliable delivery, and real-time tracking. We help businesses handle high volumes efficiently while keeping customers satisfied and loyal. With scalable systems and smart technology, companies can expand operations smoothly and stay competitive in the digital marketplace.`,
    ],
    imageSrc: overviewECommerce,
    height: '388px',
    reverse: true,
  },
]
const advantagesList = [
  {
    id: 1,
    title: 'Fast Fulfillment',
    paragraphs: [
      `We process and dispatch orders quickly, ensuring customers receive their purchases on time, with accuracy, and consistent quality service delivery.`,
    ],
    imageSrc: fastFulfillment,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 2,
    title: 'Scalable Solutions',
    paragraphs: [
      `Our systems adapt to seasonal peaks, promotions, or business growth, giving companies reliable support for sustainable long-term expansion worldwide.`,
    ],
    imageSrc: scalableSolutions,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
  {
    id: 3,
    title: 'Customer Experience',
    paragraphs: [
      `By offering accurate tracking, flexible delivery options, and timely communication, we enhance customer trust, satisfaction, and overall strong brand loyalty.`,
    ],
    imageSrc: customerExperience,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 4,
    title: 'Technology Driven',
    paragraphs: [
      `We integrate advanced platforms and smart analytics to optimize operations, improve decision-making, and deliver stronger results across the entire e-commerce supply chain.`,
    ],
    imageSrc: technologyDriven,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
]

const relatedSolutions = solutions.filter((solution) => solution.title !== 'E-commerce (Air-express)')
</script>
