<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="sl">
    <h1>{{ $t('services.specializedLogistics') }}</h1>
    <div class="sl-content">
      <a-carousel
        :dots="false"
        arrows
        :slides-to-show="4"
        :slides-to-scroll="1"
        :center-mode="true"
        center-padding="0px"
        class="sl-carousel"
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
          <!-- <RouterLink :to="`/logistics-and-supply-chain/specialized-logistics/${item.id}`"> -->
          <div class="card-img-wrap">
            <img :src="item.image" :alt="`sl-${item.id}`" class="card-img" />
          </div>
          <div class="card-title">{{ item.title }}</div>
          <!-- </RouterLink> -->
        </div>
      </a-carousel>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import frozenGoodsLogistics from '@/assets/images/frozen_goods_logistics.avif'
import projectCargo from '@/assets/images/project_cargo.avif'
import oogBreakBulk from '@/assets/images/oog_break_bulk.png'
import dangerousGoodsTransportation from '@/assets/images/dangerous_goods_transportation.png'
import healthcareLogistics from '@/assets/images/healthcare_logistics.png'

const { t } = useI18n()

const items = computed(() => [
  {
    id: 1,
    title: t('services.frozenGoodsLogistics'),
    image: frozenGoodsLogistics,
  },
  {
    id: 2,
    title: t('services.projectCargo'),
    image: projectCargo,
  },
  {
    id: 3,
    title: t('services.oogBreakBulk'),
    image: oogBreakBulk,
  },
  {
    id: 4,
    title: t('services.dangerousGoodsTransportation'),
    image: dangerousGoodsTransportation,
  },
  {
    id: 5,
    title: t('services.healthcareLogistics'),
    image: healthcareLogistics,
  },
])
</script>

<style scoped>
.sl {
  height: 100%;
}

.sl-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  position: relative;
}

.sl-carousel {
  width: 100%;
  max-width: 1200px;
  position: relative;
}

h1 {
  font-size: 32px;
  font-weight: 600;
  color: var(--secondary);
  margin: 0;
  margin-bottom: 30px;
  text-align: center;
}

.card-item {
  width: 285px !important;
  height: 361px !important;
  border: none;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.card-img-wrap {
  width: 285px !important;
  height: 361px !important;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
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
  transition: transform 0.3s ease;
  position: relative;
}

.card-img-wrap::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(5, 46, 94, 0.85) 0%,
    rgba(5, 46, 94, 0.65) 25%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 1;
  pointer-events: none;
}

.card-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--primary);
  text-align: start;
  width: 100%;
  max-width: 285px;
  font-family: 'Poppins', sans-serif;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  z-index: 2;
}
.card-title:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 24px !important;
  font-weight: 600 !important;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 30px;
  height: 30px;
  font-size: 35px;
  color: #000000;
  background: var(--primary);
  transition: ease all 0.3s;
  opacity: 0.8;
  z-index: 1;
  border-radius: 50%;
  position: absolute;
  top: 50%;
}

:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}

:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #5e5c5c;
  opacity: 0.5;
}
</style>
