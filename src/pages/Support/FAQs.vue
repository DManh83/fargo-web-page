<template>
  <section>
    <BgHeader
      title="About"
      subtitle="FAQs"
      :imageSrc="bgTransportation"
      :description="bgDescription"
    />
  </section>
  <section style="width: 1200px; display: flex; flex-direction: column; margin: 50px auto">
    <h1
      style="font-size: 32px; font-weight: 600; color: #052e5e; font-family: 'Poppins', sans-serif"
    >
      Frequently asked questions
    </h1>
    <span
      style="font-size: 16px; font-weight: 400; color: #434343; font-family: 'Poppins', sans-serif"
    >
      Common questions about our logistics services.
    </span>
  </section>
  <section>
    <SearchFAQs />
  </section>
  <section style="width: 1200px; margin: 100px auto">
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
import Banner from '@/components/Banner.vue'
import SearchFAQs from './components/SearchFAQs.vue'

const bgDescription = `"Powerful tools. Reliable support"`
</script>
