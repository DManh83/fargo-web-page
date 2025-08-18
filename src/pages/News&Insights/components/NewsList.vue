<template>
  <div class="news-list">
    <div v-for="item in items" :key="item.id" class="news-item">
      <img :src="item.image" alt="thumbnail" class="news-item_image" />
      <div class="news-item_content">
        <h3 class="news-item_title">{{ item.title }}</h3>
        <p class="news-item_date">{{ item.date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped>
.news-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

/* each card */
.news-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

/* image */
.news-item_image {
  width: 120px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  background: #f0f0f0;
}

/* content */
.news-item_content {
  flex: 1;
}

.news-item_title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 4px;
  color: #1f2937;
}

.news-item_date {
  font-size: 14px;
  color: #6b7280;
}

/* mobile */
@media (max-width: 768px) {
  .news-list {
    grid-template-columns: 1fr;
  }
}
</style>
