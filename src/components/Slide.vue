<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="slide">
    <div
      class="slide-content"
      :style="{
        height: `${height}px`,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <h1 v-if="title">{{ title }}</h1>
      <a-carousel
        :dots="false"
        arrows
        :slides-to-show="slidesToShow"
        :slides-to-scroll="slidesToScroll"
        center-padding="0px"
        class="slide-carousel"
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

        <div
          v-for="(item, i) in items"
          :key="i"
          :style="{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }"
        >
          <a-card class="card-item">
            <img src="@/assets/images/Checker.png" :alt="`slide-${item.index}`" class="card-img" />
            <div v-if="item?.title" class="card-title">{{ item?.title }}</div>
          </a-card>
        </div>
      </a-carousel>
      <div class="slide-button">
        <a-button class="slide-button-item" size="large" type="default">Show All</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { title, items, slidesToShow, slidesToScroll, height, bgImage } = defineProps({
  title: String,
  items: Array,
  slidesToShow: Number,
  slidesToScroll: Number,
  height: Number,
  bgImage: String,
})
</script>

<style scoped>
.slide {
  height: 100%;
}

.slide-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 50px;
}

.slide-carousel {
  width: 100%;
  max-width: 1300px;
}

h1 {
  font-size: 48px;
  font-weight: 600;
  color: #ffb23f;
  margin: 0;
}

.slide-button {
  padding-top: 10px;
}

.slide-button-item {
  background-color: #ffb23f;
  color: #052e5e;
  font-weight: bold;
}
.slide-carousel :deep(.slick-slide > div) {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-item {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.card-title {
  font-size: 24px;
  font-weight: 600;
  color: #000;
  padding-top: 10px;
}


:deep(.slick-arrow.custom-slick-arrow) {
  width: 30px;
  height: 30px;
  font-size: 30px;
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

.ds-carousel :deep(.slick-dots) {
  display: none !important;
}
</style>
