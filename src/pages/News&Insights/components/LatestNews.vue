<template>
  <section class="latest-news">
    <h1 class="latest-news_title">Latest News</h1>

    <!-- Grid -->
    <div class="news-grid">
      <article v-for="item in pagedItems" :key="item.id" class="news-card">
        <img :src="item.image" alt="" class="news-card_img" />
        <h3 class="news-card_title">{{ item.title }}</h3>
        <p class="news-card_date">{{ item.date }}</p>
      </article>
    </div>

    <!-- Pagination -->
    <div class="news-pagination">
      <a-pagination
        v-model:current="page"
        :total="items.length"
        :pageSize="pageSize"
        :show-less-items="false"
        :show-size-changer="false"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { news } from '@/data/news'

const page = ref(1)
const pageSize = 9

// Fake data

const items = ref(
  Array.from({ length: news.length }).map((_, i) => ({
    id: i + 1,
    image: news[i].image[0],
    title: news[i].title,
    date: news[i].date,
  })),
)

const pagedItems = computed(() => {
  const start = (page.value - 1) * pageSize
  return items.value.slice(start, start + pageSize)
})
</script>

<style scoped>
.latest-news {
  padding-top: 4px;
}

.latest-news_title {
  font-size: 28px;
  line-height: 1.2;
  margin: 0 0 40px;
  font-weight: 700;
  color: #0f172a;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
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

.news-card {
  display: flex;
  flex-direction: column;
}

.news-card_img {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  object-fit: cover;
  background: #f3f4f6;
  margin-bottom: 12px;
}

.news-card_title {
  font-size: 18px;
  font-weight: 700;
  color: #0b2b5b;
  margin: 0 0 6px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
}

.news-card_date {
  margin: 0;
  font-size: 12px;
  color: #6b7280;
}

.news-pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
}
</style>
