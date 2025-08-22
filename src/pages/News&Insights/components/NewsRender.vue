<template>
  <article class="new-render">
    <div>
      <p>{{ item.paragraphs[0] }}</p>
    </div>
    <div class="hero">
      <a-carousel autoplay dots arrows effect="fade">
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
            <LeftCircleOutlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px; z-index: 1">
            <RightCircleOutlined />
          </div>
        </template>
        <template v-for="img in item.image" :key="img">
          <div class="hero_slide">
            <img :src="img" alt="" @error="onImgErr" />
          </div>
        </template>
      </a-carousel>
    </div>

    <div>
      <p v-for="(p, i) in item.paragraphs.slice(1)" :key="i">{{ p }}</p>
    </div>
  </article>
</template>

<script setup>
import { onImgErr } from '@/utils/imgErr'
defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style scoped>
.new-render {
  width: 100%;
  margin: 0 auto;
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.75;
}
.new-render > div:first-child p {
  margin: 0 0 18px 0;
}

.hero {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #eef2f6;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
}
.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero_slide {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: repeating-conic-gradient(#e9eef5 0% 25%, #f7f9fc 0% 50%) 50% / 24px 24px;
  display: grid;
  place-items: center;
}
.hero_slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.content p {
  color: #4b5563;
  line-height: 1.8;
  margin: 10px 0;
  text-align: justify;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
}

.new-render > div:last-of-type p {
  margin: 0 0 14px 0;
}



/* divider */
:deep(.ant-divider) {
  background-color: #0b2e5e !important;
  margin: 40px 0 !important;
}
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
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #686767;
  opacity: 0.5;
}
</style>
