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
            <img
              src="@/assets/images/Checker.png"
              :alt="`news-${item.index}`"
              class="card-img"

            />
            <div class="card-description">{{ item.description }}</div>
          </a-card>
        </div>
      </a-carousel>
      <div class="news-button">
        <a-button class="news-button-item" size="large" type="default">{{ $t('home.btn_show_more') }}</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    index: 1,
    description: 'We provide comprehensive customs brokerage services, ensuring smooth import and export processes for our clients.',
  },
  {
    index: 2,
    description: 'We offer secure and efficient warehousing solutions, providing a safe and organized storage space for your goods.',
  },
  {
    index: 3,
    description: 'We offer comprehensive freight forwarding services, ensuring timely and efficient transportation of your goods.',
  },
  {
    index: 4,
    description: 'We offer comprehensive supply chain management services, ensuring seamless and efficient logistics operations for our clients.',
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
}

.news-carousel {
  width: 100%;
  max-width: 1300px;
}

h1 {
  font-size: 48px;
  font-weight: 600;
  color: #052E5E;
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
  align-items: center;
  justify-content: center;
}

.card-item {
  width: 387px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-img {
  width: 387px;
  height: 200px;
}

.card-description {
  font-size: 16px;
  font-weight: 400;
  color: #000;
  padding-top: 10px;
  text-align: center;
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
