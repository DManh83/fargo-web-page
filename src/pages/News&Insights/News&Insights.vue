<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="news-container">
    <BgHeader
      title="About"
      subtitle="News & Insights"
      :imageSrc="bgNews"
      :description="description"
    />
  </div>
  <div class="featured-news-container">
    <FeaturedNews />
  </div>
  <div class="latest-news-container">
    <LatestNews />
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
import bgNews from '@/assets/images/news-insights.png'
import FeaturedNews from './components/FeaturedNews.vue'
import Banner from '@/components/Banner.vue'
import LatestNews from './components/LatestNews.vue'

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