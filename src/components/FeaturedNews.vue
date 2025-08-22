<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="news">
    <a-divider v-if="isDivider" class="divider" />
    <h1 :style="{ textAlign: align }">Featured News</h1>
    <div class="news-content">
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
          <RouterLink
            :to="{
              name: 'News Detail',
              params: { id: item.id },
              query: { title: item.title },
            }"
            @click="remember(item)"
          >
            <div class="card-img-wrap">
              <img :src="item.image[0]" :alt="`news-${item.index}`" class="card-img" />
            </div>
            <div class="card-title">{{ item.title }}</div>
          </RouterLink>
        </div>
      </a-carousel>
      <div class="news-button">
        <a-button
          class="news-button-item"
          size="large"
          type="default"
          @click="router.push('/news-insights')"
          >{{ $t('home.btn_show_more') }}</a-button
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { news } from '@/data/news'
import { defineProps } from 'vue'
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()

defineProps({
  isDivider: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String,
    default: 'center',
    validator: (value) => ['left', 'center'].includes(value),
  },
})

const items = [...news, ...news]

onMounted(() => {
  store.dispatch('news/setItems', [...items])
})

function remember(it) {
  store.dispatch('news/setItem', it)
}
</script>

<style scoped>
.news {
  height: 100%;
}

.news-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  position: relative;
}

.news-carousel {
  width: 100%;
  max-width: 1200px;
  position: relative;
}

h1 {
  font-size: 48px;
  font-weight: 600;
  color: #052e5e;
  margin: 0;
  margin-bottom: 30px;
  text-align: center;
}

.news-button-item {
  background-color: #ffb23f;
  color: #052e5e;
  font-weight: bold;
}

.card-item {
  width: 387px !important;
  height: 300px !important;
  border: none;
  border-radius: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.card-img-wrap {
  width: 380px !important;
  height: 200px !important;
  border-radius: 16px;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 12px;
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
  transition: transform 0.3s ease; /* quan trọng */
}

.card-title {
  font-size: 16px;
  font-weight: 400;
  color: #000;
  text-align: start;
  width: 100%;
  max-width: 380px;
  font-family: 'Poppins', sans-serif;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* WebKit-specific property to limit the number of lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.divider {
  min-width: 30%;
  width: 30%;
  border-color: #000;
  margin: 20px 0 50px 0;
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
  top: 35%;
}

:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}

:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #5e5c5c;
  opacity: 0.5;
}
</style>
