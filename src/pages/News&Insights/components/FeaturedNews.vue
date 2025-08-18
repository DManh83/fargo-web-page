<template>
  <section class="fn">
    <h2 class="fn_title">Featured News</h2>

    <div class="fn_grid">
      <!-- Big card -->
      <RouterLink
        v-if="items[0]"
        class="fn_card fn_card-big"
        :to="{ name: 'News Detail', params: { id: items[0].id }, query: { title: items[0].title } }"
      >
        <div class="fn_thumb">
          <img :src="items[0].image" :alt="items[0].title" @error="onImgErr" />
        </div>
        <div class="fn_meta">
          <h3 class="fn_headline">{{ items[0].title }}</h3>
          <p class="fn_date">{{ formatDate(items[0].date) }}</p>
        </div>
      </RouterLink>

      <!-- Small cards -->
      <RouterLink
        v-for="(it, i) in items.slice(1, 3)"
        :key="it.title + i"
        class="fn_card fn_card-small"
        :to="{ name: 'News Detail', params: { id: it.id }, query: { title: it.title } }"
      >
        <div class="fn_thumb fn_thumb-sm">
          <img :src="it.image" :alt="it.title" @error="onImgErr" />
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

<script setup>
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import check from '@/assets/images/Checker.png'
import NewsList from './NewsList.vue'

const activeKey = ref('1')

const items = reactive([
  {
    id: 1,
    title: 'Title 1',
    date: '2025-05-31',
    image: check,
  },
  {
    id: 2,
    title: 'Title 2',
    date: '2025-07-04',
    image: check,
  },
  {
    id: 3,
    title:
      'Title 3',
    date: '2025-07-06',
    image: check,
  },
])

const allNews = [
  {
    id: 4,
    title: 'Title 4',
    date: 'Jul 14, 2025',
    image: check,
  },
  {
    id: 5,
    title: 'Title 5',
    date: 'Jul 15, 2025',
    image: check,
  },
  {
    id: 6,
    title: 'Title 6',
    date: 'Jul 16, 2025',
    image: check,
  },

  {
    id: 7,
    title: 'Title 7',
    date: 'Jul 17, 2025',
    image: check,
  },

  {
    id: 8,
    title: 'Title 8',
    date: 'Jul 18, 2025',
    image: check,
  },
]

const fargoNews = [
  {
    id: 6,
    title: 'Title 6',
    date: 'Jul 16, 2025',
    image: check,
  },
]

const marketUpdates = [
  {
    id: 4,
    title: 'Title 4',
    date: 'Jul 14, 2025',
    image: check,
  },
]

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function onImgErr(e) {
  // fallback dạng ô caro nhạt giống mockup
  e.target.style.display = 'none'
  e.target.parentElement.classList.add('is-empty')
}
</script>

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
