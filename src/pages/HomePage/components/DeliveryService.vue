<template>
  <section class="delivery-service">
    <div class="delivery-service-content">
      <h1>{{ $t('home.delivery') }}</h1>
      <a-carousel
        :dots="false"
        arrows
        :slides-to-show="4"
        :slides-to-scroll="1"
        :center-mode="true"
        center-padding="0px"
        class="ds-carousel"
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

        <div v-for="n in cards" :key="n.id" class="card-wrapper">
          <div class="card-item">
            <img :src="checker" :alt="`delivery-service-${n}`" class="card-img" />
            <div class="card-title">{{ n.title }}</div>
          </div>
        </div>
      </a-carousel>
      <div class="ds-button">
        <a-button class="ds-button-item" size="large" type="default">{{
          $t('home.btn_show_all')
        }}</a-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import checker from '@/assets/images/Checker.png'
const cards = [
  {
    id: 1,
    title: 'Air Freight',
  },
  {
    id: 2,
    title: 'Sea Freight',
  },
  {
    id: 3,
    title: 'Inland trucking & Cross border',
  },
  {
    id: 4,
    title: 'Rail Freight',
  },
  {
    id: 1,
    title: 'Air Freight',
  },
  {
    id: 2,
    title: 'Sea Freight',
  },
  {
    id: 3,
    title: 'Inland trucking & Cross border',
  },
  {
    id: 4,
    title: 'Rail Freight',
  },
]
</script>

<style scoped>
.delivery-service {
  position: relative;
  isolation: isolate;
  height: 100%;
  background: url('@/assets/images/service_thumb.png') center/cover no-repeat;
}

.delivery-service::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(5, 46, 94, 0.4);
  z-index: 0;
}

.delivery-service-content {
  height: 600px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 50px;
  position: relative;
  z-index: 1;
}

.ds-carousel {
  width: 100%;
  max-width: 1200px;
}

h1 {
  font-size: 48px;
  font-weight: 600;
  color: #fff;
  margin: 0;
  z-index: 1;
}

.ds-button {
  padding-top: 10px;
}

.ds-button-item {
  background-color: #ffb23f;
  color: #052e5e;
  font-weight: bold;
}

.card-wrapper {
  width: 290px !important;
  height: 330px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 16px;
}

.card-title {
  font-size: 24px;
  font-weight: 600;
  color: #000;
  width: 80%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
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
