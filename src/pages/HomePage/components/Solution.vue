<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="solution">
    <div class="solution-content">
      <h1>{{ $t('home.solution') }}</h1>
      <a-carousel
        :dots="false"
        arrows
        :slides-to-show="3"
        :slides-to-scroll="1"
        :center-mode="true"
        center-padding="0px"
        class="solution-carousel"
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

        <div v-for="(item, i) in items" :key="i" class="card-wrapper">
          <a-card class="card-item">
            <div class="card-img-wrap">
              <img :src="checker" :alt="`solution-${item.index}`" class="card-img" />
            </div>
            <div class="card-content">
              <div class="card-title">{{ item.title }}</div>
              <div class="card-description">{{ item.description }}</div>
            </div>
          </a-card>
        </div>
      </a-carousel>
      <div class="solution-button">
        <a-button class="solution-button-item" size="large" type="default">{{
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
    title: 'Customs brokerage',
    description:
      'Fast and reliable customs clearance services to ensure your shipments comply with regulations and move smoothly across borders.',
  },
  {
    index: 2,
    title: 'Cargo insurance',
    description:
      'Comprehensive protection for your goods, minimizing risks and securing your cargo throughout the journey.',
  },
  {
    index: 3,
    title: 'Warehousing',
    description:
      'Safe, modern, and strategically located warehouses to optimize storage and streamline your supply chain.',
  },
  {
    index: 1,
    title: 'Customs brokerage',
    description:
      'Fast and reliable customs clearance services to ensure your shipments comply with regulations and move smoothly across borders.',
  },
  {
    index: 2,
    title: 'Cargo insurance',
    description:
      'Comprehensive protection for your goods, minimizing risks and securing your cargo throughout the journey.',
  },
  {
    index: 3,
    title: 'Warehousing',
    description:
      'Safe, modern, and strategically located warehouses to optimize storage and streamline your supply chain.',
  },
]
</script>

<style scoped>
.solution {
  width: 100%;
  margin-top: 100px;
  height: 100%;
}

.solution-content {
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 50px;
}

.solution-carousel {
  width: 100%;
  max-width: 1200px;
}

h1 {
  font-size: 48px;
  font-weight: 600;
  color: #052e5e;
  margin: 0;
}

.solution-button {
  padding-top: 10px;
}

.solution-button-item {
  background-color: #ffb23f;
  color: #052e5e;
  font-weight: bold;
}

.card-wrapper {
  width: 380px !important;
  height: 496px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 0 12px;
}

:deep(.card-item .ant-card-body) {
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}

.card-item {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden; /* phòng khi ảnh scale vượt */
  display: flex;
}

.card-img-wrap {
  width: 380px !important;
  height: 330px !important;
  border-radius: 16px;
  overflow: hidden;
  margin: 0 auto 12px;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card-wrapper:hover .card-img {
  transform: scale(1.05);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  cursor: pointer;
}

.card-title {
  font-size: 24px;
  font-weight: 600;
  color: #052e5e;
  font-family: 'Poppins', sans-serif;
  text-align: start;
  padding: 4px 0;
}

.card-description {
  font-size: 16px;
  font-weight: 400;
  color: #052e5e;
  text-align: start;
  font-family: 'Poppins', sans-serif;
}
/* ===== Custom arrows ===== */
:deep(.slick-arrow.custom-slick-arrow) {
  width: 30px; height: 30px; font-size: 35px;
  color: #000000; background: #ffffff;
  transition: ease all 0.3s; opacity: 0.8; z-index: 1;
  border-radius: 50%; position: absolute; top: 50%; transform: translateY(-50%);
}
:deep(.slick-arrow.custom-slick-arrow:before) { display: none; }
:deep(.slick-arrow.custom-slick-arrow:hover) { color: #fff; opacity: 0.5; }

/* Căn giữa slide, KHÔNG dùng line-height để khỏi phá layout */
.solution-carousel :deep(.slick-slide),
.solution-carousel :deep(.slick-slide > div) {
  height: auto;
  line-height: normal;
  display: flex; justify-content: center; align-items: stretch;
}
</style>
