<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="news">
    <div class="news-content">
      <h1>{{ $t('home.news') }}</h1>
      <a-carousel
        :dots="false"
        arrows
        :slides-to-show="3"
        :slides-to-scroll="1"
        :center-mode="true"
        center-padding="0px"
        class="news-carousel"
      >
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: -20px; z-index: 1">
            <LeftCircleOutlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: -20px; z-index: 1">
            <RightCircleOutlined />
          </div>
        </template>

        <div v-for="(item, i) in items" :key="i" class="card-wrapper">
          <a-card class="card-item">
            <img :src="checker" :alt="`news-${item.index}`" class="card-img" />
            <div class="card-description">{{ item.description }}</div>
          </a-card>
        </div>
      </a-carousel>
      <div class="news-button">
        <a-button class="news-button-item" size="large" type="default">{{
          $t('home.btn_show_more')
        }}</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import checker from '@/assets/images/Checker.png'

const items = [
  {
    index: 1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor auctor uctor blandit.',
  },
  {
    index: 2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor auctor uctor blandit.',
  },
  {
    index: 3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor auctor uctor blandit.',
  },
  {
    index: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor auctor uctor blandit.',
  },
]
</script>

<style scoped>
.news {
  margin-top: 100px;
  height: 100%;
}

.news-content {
  /* background-image: url('@/assets/images/service_thumb.png'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 426px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 50px;
  position: relative;
}

.news-carousel {
  width: 100%;
  max-width: 1300px;
  position: relative;
}

h1 {
  font-size: 48px;
  font-weight: 600;
  color: #052e5e;
  margin: 0;
}

.news-button {
  padding-top: 10px;
}

.news-button-item {
  background-color: #ffb23f;
  color: #052e5e;
  font-weight: bold;
}

.card-wrapper {
  width: 387px !important;
  height: 300px !important;
  display: flex;
  align-items: stretch;
}

.card-item {
  width: 387px;
  height: 300px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  cursor: pointer;
}

.card-img {
  width: 387px;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
  margin-left: -24px;
  margin-top: -24px;
}

.card-item:hover .card-img {
  transform: scale(1.05);
}

.card-description {
  font-size: 16px;
  font-weight: 400;
  color: #000;
  padding-top: 16px;
  text-align: start;
}

/* ===== Custom arrows ===== */

:deep(.slick-arrow.custom-slick-arrow) {
  width: 30px;
  height: 30px;
  font-size: 35px;
  color: #000000;
  background: #ffffff;
  transition: ease all 0.3s;
  opacity: 0.8;
  z-index: 1;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}

:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

.news-carousel :deep(.slick-slide) {
  height: 300px;
  line-height: 300px;
}
.news-carousel :deep(.slick-slide > div) {
  height: 300px;
  line-height: 300px;
}
</style>
