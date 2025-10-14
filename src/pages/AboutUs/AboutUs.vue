<template>
  <section class="about-us-container">
    <BgHeader
      :title="$t('about.about')"
      :subtitle="$t('about.subtitle')"
      :imageSrc="bgAbout"
      :description="$t('about.description')"
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
    <Banner />
  </section>
</template>

<script setup>
import BgHeader from '../../components/BgHeader.vue'
import Banner from '@/components/Banner.vue'
import { WhoAreWe, MissionVision, CoreValue } from './components'
import bgAbout from '../../../public/images/bg_about.png'
</script>

<style scoped>
.banner-container {
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: var(--secondary);
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
  background: var(--primary);
  clip-path: ellipse(70% 100% at 50% 100%);
}

.core-value-container {
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
