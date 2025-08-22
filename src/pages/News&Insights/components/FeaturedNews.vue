<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { RouterLink } from 'vue-router'
import NewsList from './NewsList.vue'
import { formatDate } from '@/utils/formatDate'
import { news } from '@/data/news'
import { onImgErr } from '@/utils/imgErr'

const store = useStore()

const activeKey = ref('1')

const allNews = news
const featuredNews = allNews.filter((it) => it.featured)

const fargoNews = allNews
  .filter((it) => it.category === 'fargoNews')
  .map((it) => ({ ...it, date: formatDate(it.date) }))
const marketUpdates = allNews
  .filter((it) => it.category === 'marketUpdates')
  .map((it) => ({ ...it, date: formatDate(it.date) }))

onMounted(() => {
  store.dispatch('news/setItems', [...allNews])
})

function remember(it) {
  store.dispatch('news/setItem', it)
}


</script>

<template>
  <section class="fn">
    <h2 class="fn_title">Featured News</h2>

    <div class="fn_grid">
      <!-- Big card -->
      <RouterLink
        v-if="featuredNews[0]"
        class="fn_card fn_card-big"
        :to="{
          name: 'News Detail',
          params: { id: featuredNews[0].id },
          query: { title: featuredNews[0].title },
        }"
        @click="remember(featuredNews[0])"
      >
        <div class="fn_thumb">
          <img :src="featuredNews[0].image[0]" :alt="featuredNews[0].title" @error="onImgErr" />
        </div>
        <div class="fn_meta">
          <h3 class="fn_headline">{{ featuredNews[0].title }}</h3>
          <p class="fn_date">{{ formatDate(featuredNews[0].date) }}</p>
        </div>
      </RouterLink>

      <!-- Small cards -->
      <RouterLink
        v-for="(it, i) in featuredNews.slice(1, 3)"
        :key="it.title + i"
        class="fn_card fn_card-small"
        :to="{
          name: 'News Detail',
          params: { id: it.id },
          query: { title: it.title },
        }"
        @click="remember(it)"
      >
        <div class="fn_thumb fn_thumb-sm">
          <img :src="it.image[0]" :alt="it.title" @error="onImgErr" />
        </div>
        <div class="fn_meta">
          <h3 class="fn_headline fn_headline-sm">{{ it.title }}</h3>
          <p class="fn_date">{{ formatDate(it.date) }}</p>
        </div>
      </RouterLink>
    </div>
  </section>
  <section class="tabs">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="All">
        <NewsList :items="allNews" />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Fargo’s News" force-render>
        <NewsList :items="fargoNews" />
      </a-tab-pane>
      <a-tab-pane key="3" tab="Market Updates">
        <NewsList :items="marketUpdates" />
      </a-tab-pane>
    </a-tabs>
  </section>
</template>

<style scoped>
.fn {
  max-width: 1200px;
  margin: 0 auto;
  /* padding: 0 16px 24px; */
}
.fn_title {
  font-size: 28px;
  font-weight: 800;
  color: #0b2e5e;
  margin: 16px 0 16px;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 30px;
}

/* GRID: 1 card lớn + 2 card nhỏ */
.fn_grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr; /* tỉ lệ như mockup */
  gap: 24px;
}

.fn_card {
  display: block;
  text-decoration: none;
  color: inherit;
}
.fn_card:hover .fn_headline {
  text-decoration: underline;
}

/* THUMBNAIL */
.fn_thumb,
.fn_thumb-sm {
  width: 100%;
  background: #eef2f6;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}
.fn_thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* placeholder caro khi lỗi ảnh */
.fn_thumb.is-empty,
.fn_thumb-sm.is-empty {
  background-image:
    linear-gradient(45deg, #e9ecef 25%, transparent 25%),
    linear-gradient(-45deg, #e9ecef 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e9ecef 75%),
    linear-gradient(-45deg, transparent 75%, #e9ecef 75%);
  background-size: 24px 24px;
  background-position:
    0 0,
    0 12px,
    12px -12px,
    -12px 0;
}

.fn_card-big .fn_thumb {
  aspect-ratio: 16 / 9;
}
.fn_card-small .fn_thumb-sm {
  aspect-ratio: 16 / 9;
}

/* TEXT */
.fn_meta {
  margin-top: 12px;
}
.fn_headline {
  font-size: 22px;
  font-weight: 800;
  line-height: 1.35;
  color: #0b2e5e;
  margin: 0 0 6px;
  font-family: 'Poppins', sans-serif;
}
.fn_headline-sm {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* WebKit-specific property to limit the number of lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
}
.fn_date {
  font-size: 13px;
  color: #70819a;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}
.tabs {
  margin-top: 20px;
}
/* Responsive */
@media (max-width: 1024px) {
  .fn_grid {
    grid-template-columns: 1fr;
  }
  .fn_headline {
    font-size: 20px;
  }
  .fn_headline-sm {
    font-size: 18px;
  }
}
</style>
