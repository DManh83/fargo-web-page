<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="intro">
    <div class="intro-content" style="height: 100%; width: 1200px; margin: 0 auto">
      <WhyFargo :cards="cards" />
      <Banner
        title-primary="Need a shipping solution?"
        title-secondary="Request your free quote now!"
        button-text="Request"
        style="margin-bottom: 50px"
      />
      <FeaturedNews />
    </div>
  </section>
</template>

<script setup>
import Banner from '@/components/Banner.vue'
import FeaturedNews from '@/components/FeaturedNews.vue'
import WhyFargo from '@/components/WhyFargo.vue'
import { ref } from 'vue'

const cards = ref([
  {
    id: 1,
    title: 'Extensive and Reliable Global Network',
    content:
      'Fargo Logistics partners with a wide network of agents and carriers worldwide, ensuring seamless international connections and smooth cargo handling across borders.',
  },
  {
    id: 2,
    title: 'Proven and Trusted Industry Expertise',
    content:
      'With years of proven experience in maritime transport and supply chain management, our team delivers reliable, efficient, and innovative logistics solutions tailored to global trade.',
  },
  {
    id: 3,
    title: 'Customer-Centric and Flexible Approach',
    content:
      'We place customers at the heart of every operation, offering personalized services and flexible solutions that adapt to your specific logistics needs in both domestic and international markets.',
  },
])
</script>

<style scoped>
.our-clients {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 50px 0;
}

.our-clients-list {
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 20px; */
}

.our-clients-image {
  width: 294px;
  height: 100px;
  margin-top: 50px;
}
</style>
