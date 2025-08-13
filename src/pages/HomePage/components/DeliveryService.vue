<template>
  <div class="delivery-service">
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
          <div class="custom-slick-arrow" style="left: -20px; z-index: 1">
            <LeftCircleOutlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: -20px; z-index: 1">
            <RightCircleOutlined />
          </div>
        </template>

        <div v-for="(n, i) in cards" :key="i" class="card-wrapper">
          <a-card class="card-item">
            <img
              src="@/assets/images/Checker.png"
              :alt="`delivery-service-${n}`"
              class="card-img"
            />
            <div class="card-title">Air Freight</div>
          </a-card>
        </div>
      </a-carousel>
      <div class="ds-button">
        <a-button class="ds-button-item" size="large" type="default">{{ $t('home.btn_show_all') }}</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [1, 2, 3, 4, 5, 6, 7]
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
  height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 50px;
}

.ds-carousel {
  width: 100%;
  max-width: 1300px;
}

h1 {
  font-size: 48px;
  font-weight: 600;
  color: #fff;
  margin: 0;
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
  width: 280px !important;
  height: 310px !important;
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

.card-title {
  font-size: 24px;
  font-weight: 600;
  color: #000;
  padding-top: 10px;
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
