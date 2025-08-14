<template>
  <div class="about-us-container">
    <BgHeader
      title="About"
      subtitle="Fargo Logistics "
      :imageSrc="bgAbout"
      :description="description"
    />
  </div>
  <div class="banner-container">
  <Banner
    title-primary="Need a shipping solution?"
      title-secondary="Request your free quote now!"
      button-text="Request"
    />
  </div>
</template>

<script setup>
import BgHeader from '@/components/BgHeader.vue'
import Banner from '@/components/Banner.vue'

import bgAbout from '@/assets/images/bg_about.png'

const description = `"Driven by Precision, Powered by Trust"`
</script>

<style scoped>
.banner-container {
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
