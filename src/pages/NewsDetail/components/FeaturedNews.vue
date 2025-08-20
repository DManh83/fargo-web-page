<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="news">
    <h1>Featured News</h1>
    <div class="news-content">
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
          <div class="custom-slick-arrow" style="left: -30px; z-index: 1">
            <LeftCircleOutlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: -30px; z-index: 1">
            <RightCircleOutlined />
          </div>
        </template>

        <div v-for="(item, i) in items" :key="i" class="card-item">
          <div class="card-img-wrap">
            <img :src="checker" :alt="`news-${item.index}`" class="card-img" />
          </div>
          <div class="card-description">{{ item.description }}</div>
        </div>
      </a-carousel>
      <div class="news-button">
        <a-button class="news-button-item" size="large" type="default">{{
          $t('home.btn_show_more')
        }}</a-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import checker from '@/assets/images/Checker.png'

const items = [
  {
    index: 1,
    description:
      'A closer look at how shifting trade agreements and emerging markets are reshaping global shipping lanes and logistics operations.',
  },
  {
    index: 2,
    description:
      'Exploring how artificial intelligence, automation, and smart technologies are revolutionizing supply chains and improving efficiency.',
  },
  {
    index: 3,
    description:
      'Highlighting the rise of eco-friendly logistics practices, from cleaner fuels to carbon-neutral supply chains in international trade.',
  },
  {
    index: 1,
    description:
      'A closer look at how shifting trade agreements and emerging markets are reshaping global shipping lanes and logistics operations.',
  },
  {
    index: 2,
    description:
      'Exploring how artificial intelligence, automation, and smart technologies are revolutionizing supply chains and improving efficiency.',
  },
  {
    index: 3,
    description:
      'Highlighting the rise of eco-friendly logistics practices, from cleaner fuels to carbon-neutral supply chains in international trade.',
  },
]
</script>

<style scoped>
.news {
  margin-top: 100px;
  height: 100%;
}

.news-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 50px;
  position: relative;
  margin-top: 50px;
}

.news-carousel {
  width: 100%;
  max-width: 1200px;
  position: relative;
}

h1 {
  font-size: 48px;
  font-weight: 600;
  color: #052e5e;
  margin: 0;
  margin-bottom: 20px;
}

.news-button {
  padding-top: 10px;
}

.news-button-item {
  background-color: #ffb23f;
  color: #052e5e;
  font-weight: bold;
}

.card-item {
  width: 387px !important;
  height: 300px !important;
  border: none;
  border-radius: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.card-img-wrap {
  width: 380px !important;
  height: 200px !important;
  border-radius: 16px;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 12px;
}

.card-item:hover .card-img {
  transform: scale(1.05);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  cursor: pointer;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease; /* quan trọng */
}

.card-description {
  font-size: 16px;
  font-weight: 400;
  color: #000;
  text-align: start;
  width: 100%;
  max-width: 380px;
  font-family: 'Poppins', sans-serif;
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
</style>
