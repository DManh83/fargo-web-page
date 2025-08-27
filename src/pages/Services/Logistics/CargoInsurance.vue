<template>
  <section>
    <BgHeader
      title="About"
      subtitle="Cargo Insurance"
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

import overviewCargoInsurance from '@/assets/images/cargo_insurance.png'
import introCargoInsurance from '@/assets/images/intro_about_us.png'
import comprehensiveCoverage from '@/assets/images/comprehensive_coverage.png'
import costProtection from '@/assets/images/cost_protection.png'
import flexibleOptions from '@/assets/images/flexible_options.png'
import peaceOfMind from '@/assets/images/peace_of_mind.png'

const bgDescription = `"Smart moves. Strong supply chains"`

const overviewList = [
  {
    id: 1,
    title: `Contact us today to receive a tailored logistics quote for your international shipping needs.`,

    imageSrc: introCargoInsurance,
    height: '388px',
    reverse: false,
    buttonText: 'Request a Quote',
    center: 'center',
  },
  {
    id: 2,
    title: 'Overview',
    paragraphs: [
      `Cargo insurance protects shipments from loss or damage during sea, air, or land transit. It covers accidents, natural disasters, and theft, helping businesses reduce risks and maintain financial security. With tailored plans, companies gain peace of mind and stronger trust across the supply chain.`,
    ],
    imageSrc: overviewCargoInsurance,
    height: '388px',
    reverse: true,
  },
]
const advantagesList = [
  {
    id: 1,
    title: 'Comprehensive Coverage',
    paragraphs: [
      `We protect cargo against accidents, natural disasters, and theft, ensuring goods remain safe, fully protected, and financially secure throughout the entire international journey.`,
    ],
    imageSrc: comprehensiveCoverage,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 2,
    title: 'Cost Protection',
    paragraphs: [
      `Insurance reduces unexpected losses and prevents major financial setbacks, giving businesses greater stability, confidence, and resilience in their ongoing global trading activities.`,
    ],
    imageSrc: costProtection,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
  {
    id: 3,
    title: 'Flexible Options',
    paragraphs: [
      `Policies can be tailored to shipment size, transport mode, and client requirements, providing reliable, practical solutions that fit every unique logistics operation worldwide.`,
    ],
    imageSrc: flexibleOptions,
    height: '221px',
    reverse: false,
    grid: '1fr 1.4fr',
  },
  {
    id: 4,
    title: 'Peace of Mind',
    paragraphs: [
      `With strong protection and trusted support, companies can focus on growth while knowing their valuable cargo is always insured, monitored, and completely safeguarded everywhere.`,
    ],
    imageSrc: peaceOfMind,
    height: '221px',
    reverse: true,
    grid: '1.4fr 1fr',
  },
]

const relatedSolutions = solutions.filter((solution) => solution.title !== 'Cargo insurance')
</script>
