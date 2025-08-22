<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="related">
    <aside class="side">
      <RouterLink
        v-for="item in items"
        :key="item.id"
        class="side_item"
        :to="{ name: 'News Detail', params: { id: item.id }, query: { title: item.title } }"
      >
        <div class="side_thumb">
          <img :src="item.image[0]" alt="" @error="onImgErr" />
        </div>
        <div class="side_meta">
          <h4 class="side_headline">{{ item.title }}</h4>
          <p class="side_date">{{ formatDate(item.date) }}</p>
        </div>
      </RouterLink>
    </aside>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { formatDate } from '@/utils/formatDate'
import { onImgErr } from '@/utils/imgErr'

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped>
.related {
  width: 100%;
  height: auto;
  margin: 0 auto;
  /* margin-top: 50px; */
}

.side {
  height: fit-content;
  background: #e5f1fd;
  border-radius: 12px;
  margin: 12px 0;
}
.side_title {
  font-weight: 700;
  color: #0b2e5e;
  margin: 8px 0 12px;
}
.side_item {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  /* background: #f8fafc; */
  margin-bottom: 12px;
}
.side_item:hover .side_headline {
  text-decoration: underline;
}

.side_thumb {
  width: 100%;
  aspect-ratio: 1.8 / 1;
  overflow: hidden;
  border-radius: 10px;
  background: #eef2f6;
}
.side_thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.side_headline {
  font-size: 24px;
  font-weight: 500;
  color: #0b2e5e;
  margin: 4px 0 6px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.side_date {
  font-size: 15px;
  font-weight: 500;
  color: #76767b;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

</style>
