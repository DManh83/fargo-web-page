<template>
  <section class="delivery-service">
    <div class="delivery-service-content">
      <h1>{{ $t('services.delivery') }}</h1>
      <div class="flex">
        <div v-for="n in cards" :key="n.id" class="wrapper">
          <RouterLink :to="`/${n.id}`" class="item">
            <img :src="n.image[0]" :alt="n.title" class="img" />
            <div class="title">{{ n.title }}</div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import air_freight from '@/assets/images/air_freight.png'
import sea_freight from '@/assets/images/sea_freight.png'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const cards = computed(() => [
  {
    id: 'transportation/air-freight',
    title: t('services.airFreight.title'),
    image: [air_freight],
  },
  {
    id: 'transportation/sea-freight',
    title: t('services.seaFreight.title'),
    image: [sea_freight],
  },
])
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

h1 {
  font-size: 48px;
  font-weight: 600;
  color: var(--primary);
  margin: 0;
  z-index: 1;
}

.flex {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
}
.item {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
}

.img {
  width: 590px;
  height: 356px;
  object-fit: cover;
  border-radius: 16px;
}

.title {
  font-size: 24px;
  font-weight: 600;
  color: #000;
  width: 80%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
}
</style>
