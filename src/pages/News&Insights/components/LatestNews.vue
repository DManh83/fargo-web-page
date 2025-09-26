<template>
  <section class="latest-news">
    <h1 class="latest-news_title">{{ $t('news.latestNews') }}</h1>

    <!-- Grid -->
    <div class="news-grid">
      <RouterLink
        v-for="item in pagedItems"
        :key="item.id"
        class="news-card"
        :to="{
          name: 'News Detail',
          params: { id: item.id },
          query: { title: item.title },
        }"
        @click="remember(store, item, 'news')"
      >
        <img
          :src="item.image && item.image.length > 0 && item.image[0]"
          alt=""
          @error="onImgErr"
          class="news-card_img"
        />
        <a-tooltip placement="bottomLeft">
          <template #title>
            <span>{{ item.title }}</span>
          </template>
          <h3 class="news-card_title">{{ item.title }}</h3>
        </a-tooltip>
        <p class="news-card_date">{{ item.date }}</p>
      </RouterLink>
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
import { remember } from '@/utils/remember'
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'
import { onImgErr } from '@/utils/imgErr'

const store = useStore()

const page = ref(1)
const pageSize = 9

// Fake data

const items = ref(
  Array.from({ length: news.length })
    .map((_, i) => ({
      id: i + 1,
      image: news[i].image,
      title: news[i].title,
      date: news[i].date,
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date)),
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
  font-family: var(--font-vi);
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
