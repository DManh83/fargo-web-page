<template>
  <div class="delivery-service">
    <div class="delivery-service-content">
      <h1>Delivery Service</h1>

      <a-carousel
        :dots="false"
        arrows
        :slides-to-show="4"
        :slides-to-scroll="1"
        class="ds-carousel"
      >
        <!-- nút mũi tên trái/phải -->
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
            <LeftCircleOutlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px">
            <RightCircleOutlined />
          </div>
        </template>

        <div v-for="(n, i) in cards" :key="i" class="card-wrapper">
          <a-card>
            <img
              :src="`@/assets/images/delivery_service_${n}.png`"
              :alt="`delivery-service-${n}`"
              class="card-img"
            />
          </a-card>
        </div>
      </a-carousel>
    </div>
  </div>
</template>

<script setup>
const cards = [1, 2, 3, 4, 5, 6, 7, 8]
</script>

<style scoped>
.delivery-service {
  height: 100%;
}

.delivery-service-content {
  background-image: url('@/assets/images/service_thumb.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
}

.card-wrapper {
  padding: 0 50px;
}
.card-img {
  width: 100%;
  height: 100%;
  display: block;
}

/* ===== Custom arrows ===== */
.ds-carousel :deep(.slick-slider) {
  position: relative;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #999999;
  /* background-color: rgba(24, 28, 32, 0.11); */
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}

:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}

:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

/* Ẩn chấm tròn nếu có */
.ds-carousel :deep(.slick-dots) {
  display: none !important;
}
</style>
