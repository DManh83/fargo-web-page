<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="intro">
    <div class="intro-content" style="height: 100%; width: 1200px; margin: 0 auto">
      <WhyFargo :cards="cards" />
      <Banner style="margin-bottom: 50px" />
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
    title: 'intro.extensiveAndReliableGlobalNetwork',
    content: 'intro.extensiveAndReliableGlobalNetworkContent',
  },
  {
    id: 2,
    title: 'intro.provenAndTrustedIndustryExpertise',
    content: 'intro.provenAndTrustedIndustryExpertiseContent',
  },
  {
    id: 3,
    title: 'intro.customerCentricAndFlexibleApproach',
    content: 'intro.customerCentricAndFlexibleApproachContent',
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
