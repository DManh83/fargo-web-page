<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="industries">
    <div class="industries-content">
      <h1>{{ $t('home.industries') }}</h1>
      <a-carousel
        :dots="false"
        arrows
        :slides-to-show="6"
        :slides-to-scroll="1"
        :center-mode="true"
        center-padding="0px"
        class="industries-carousel"
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
          <img :src="checker" :alt="`industries-${item.index}`" class="img" />
          <div class="title">{{ item.title }}</div>
        </div>
      </a-carousel>
    </div>
  </section>
</template>

<script setup>
import checker from '@/assets/images/Checker.png'

const items = [
  {
    index: 1,
    title: 'Electronics',
  },
  {
    index: 2,
    title: 'Automotive',
  },
  {
    index: 3,
    title: 'Food & Beverage',
  },
  {
    index: 4,
    title: 'Healthcare/Pharmaceuticals',
  },
  {
    index: 5,
    title: 'Retail & E-commerce',
  },
  {
    index: 6,
    title: 'Construction & Materials',
  },
  {
    index: 7,
    title: 'Oil & Gas',
  },
]
</script>

<style scoped>
.industries {
  margin-top: 100px;
  height: 100%;
}

.industries-content {
  background: #052e5e;
  height: 430px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 50px;
}

.industries-carousel {
  width: 100%;
  max-width: 1300px;
}

h1 {
  font-size: 48px;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.card-wrapper {
  width: 183px !important;
  height: 250px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.img {
  width: 183px;
  height: 183px;
  border-radius: 50%;
}

.title {
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  padding-top: 20px;
  line-height: 1.2;
}

/* ===== Custom arrows ===== */

:deep(.slick-arrow.custom-slick-arrow) {
  width: 35px;
  height: 35px;
  font-size: 35px;
  color: #000000;
  background: #ffffff;
  transition: ease all 0.3s;
  opacity: 0.8;
  z-index: 1;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-120%);
}

:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}

:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

.industries-carousel :deep(.slick-slide),
.industries-carousel :deep(.slick-slide > div) {
  height: 250px;
}
</style>
