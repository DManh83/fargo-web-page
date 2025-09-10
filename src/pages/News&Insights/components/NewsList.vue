<script setup>
import { ref, computed } from 'vue'
import { formatDate } from '@/utils/formatDate'
import { remember } from '@/utils/remember'
import { RouterLink } from 'vue-router'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

const page = ref(1)
const pageSize = 9

// Fake data

const its = ref(
  Array.from({ length: props.items.length }).map((_, i) => ({
    id: i + 1,
    image: props.items[i].image,
    title: props.items[i].title,
    date: props.items[i].date,
  })),
)

const pagedItems = computed(() => {
  const start = (page.value - 1) * pageSize
  return its.value.slice(start, start + pageSize)
})
</script>

<template>
  <section class="news-list">
    <div class="news-grid">
      <RouterLink
        v-for="item in pagedItems"
        :key="item.id"
        class="news-item"
        :to="{
          name: 'News Detail',
          params: { id: item.id },
          query: { title: item.title },
        }"
        @click="remember(item)"
      >
        <img :src="item.image[0]" alt="thumbnail" class="news-item_image" />
        <div class="news-item_content">
          <h3 class="news-item_title">{{ item.title }}</h3>
          <p class="news-item_date">{{ formatDate(item.date) }}</p>
        </div>
      </RouterLink>
    </div>

    <div v-if="its.length > pageSize" class="news-pagination">
      <a-pagination
        v-model:current="page"
        :total="its.length"
        :pageSize="pageSize"
        :show-less-items="false"
        :show-size-changer="false"
      />
    </div>
  </section>
</template>

<style scoped>
.news-list {
  margin-top: 20px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

@media (max-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 640px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
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
  height: 120px;
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

.news-pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
}
</style>
