<template>
  <section class="about-us-container">
    <BgHeader
      title="About"
      subtitle="Fargo Logistics "
      :imageSrc="bgAbout"
      :description="description"
    />
  </section>
  <section class="who-are-we-container">
    <WhoAreWe />
  </section>
  <section class="mission-vision-container">
    <MissionVision />
  </section>
  <section class="core-value-container">
    <CoreValue />
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
import Banner from '@/components/Banner.vue'
import WhoAreWe from './components/WhoAreWe.vue'
import MissionVision from './components/MissionVision.vue'
import CoreValue from './components/CoreValue.vue'
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
.who-are-we-container {
  width: 1200px;
  height: 617px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;
}
.mission-vision-container {
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #052e5e;
  position: relative;
  overflow: hidden;
}
.mission-vision-container::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: 0;
  width: 100%;
  height: 150px;
  background: white;
  clip-path: ellipse(70% 100% at 50% 100%);
}

.core-value-container {
  width: 1200px;
  height: 528px;
  margin: 0 auto;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
