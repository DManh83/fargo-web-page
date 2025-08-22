<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <section class="news-container">
    <BgHeader
      title="About"
      subtitle="News & Insights"
      :imageSrc="bgNews"
      :description="description"
    />
  </section>
  <section class="featured-news-container">
    <FeaturedNews />
  </section>
  <section class="latest-news-container">
    <LatestNews />
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
import bgNews from '@/assets/images/news-insights.png'
import { LatestNews, FeaturedNews } from './components'
import Banner from '@/components/Banner.vue'

const description = `"In logistics, every move matters — stay informed, stay ahead"`
</script>

<style scoped>
.featured-news-container {
  width: 1200px;
  height: auto;
  margin: 0 auto;
  margin-top: 50px;
}

.latest-news-container {
  width: 1200px;
  height: auto;
  margin: 0 auto;
  margin-top: 50px;
  /* background-color: #f0f0f0; */
}

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
