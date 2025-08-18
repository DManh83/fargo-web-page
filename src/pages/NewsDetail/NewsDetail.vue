<!-- pages/News&Insights/NewsDetail.vue -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <BgHeader
      title="About"
      subtitle="News & Insights"
      :imageSrc="bgNews"
      :description="description"
    />
  </div>

  <section class="container">
    <div class="grid">
      <div>
        <h1 class="title">{{ pageTitle }}</h1>

        <div class="meta">
          <span class="dot">
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 8a4 4 0 1 0 .001 8.001A4 4 0 0 0 12 8" />
            </svg>
          </span>
          <span class="cat">Fargo’s News</span>
          <span class="sep">|</span>
          <time>{{ formatDate(mainPost.date) }}</time>
        </div>
      </div>

      <!-- Main column -->
      <article class="main">
        <div class="hero">
          <img :src="mainPost.image" alt="" @error="onImgErr" />
        </div>

        <div class="content">
          <p v-for="(p, i) in mainPost.paragraphs" :key="i">{{ p }}</p>
        </div>

        <aside class="side">
          <RouterLink
            v-for="n in related"
            :key="n.id"
            class="side_item"
            :to="{ name: 'News Detail', params: { id: n.id }, query: { title: n.title } }"
          >
            <div class="side_thumb">
              <img :src="n.image" alt="" @error="onImgErr" />
            </div>
            <div class="side_meta">
              <h4 class="side_headline">{{ n.title }}</h4>
              <p class="side_date">{{ formatDate(n.date) }}</p>
            </div>
          </RouterLink>
        </aside>
      </article>

      <!-- Sidebar -->
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import BgHeader from '@/components/BgHeader.vue'
import bgNews from '@/assets/images/news-insights.png'
import checker from '@/assets/images/Checker.png'

const route = useRoute()
const pageTitle = computed(() => route.query.title || 'Title random news')

const description = `"In logistics, every move matters — stay informed, stay ahead"`

// ---- Fake data for detail + related
const mainPost = {
  id: route.params.id,
  title: pageTitle.value,
  date: '2025-07-11',
  image: checker,
  paragraphs: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac erat at dolor auctor blandit. Donec vitae orci sed dolor cursus ipsum...',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac erat at dolor auctor blandit. Donec vitae orci sed dolor cursus ipsum dolor sit amet...',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac erat at dolor auctor blandit. Donec vitae orci sed dolor cursus ipsum...',
  ],
}

const related = [
  {
    id: 101,
    title: 'Lorem ipsum dolor sit amet, consectetasf ...',
    date: '2025-07-06',
    image: checker,
  },
  {
    id: 102,
    title: 'Lorem ipsum dolor sit amet, consectetasf ...',
    date: '2025-07-06',
    image: checker,
  },
  {
    id: 103,
    title: 'Lorem ipsum dolor sit amet, consectetasf ...',
    date: '2025-07-06',
    image: checker,
  },
]

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function onImgErr(e) {
  e.target.style.display = 'none'
  e.target.parentElement.classList.add('is-empty')
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
}

/* 2-column grid */
.grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 24px;
}

.title {
  font-size: 28px;
  font-weight: 800;
  color: #0b2e5e;
  margin: 0 0 8px;
  font-family: 'Poppins', sans-serif;
}

.meta {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #70819a;
  font-size: 13px;
  margin-bottom: 16px;
}
.meta .dot {
  color: #0b2e5e;
  display: inline-flex;
}
.meta .cat {
  font-weight: 600;
}
.meta .sep {
  opacity: 0.6;
}

/* hero image */
.hero {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #eef2f6;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
}
.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* placeholder checker */
.hero.is-empty,
.side_thumb.is-empty {
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

.content p {
  color: #4b5563;
  line-height: 1.8;
  margin: 18px 0;
  text-align: justify;
}

/* Sidebar */
.side_title {
  font-weight: 700;
  color: #0b2e5e;
  margin: 8px 0 12px;
}
.side_item {
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  background: #f8fafc;
  margin-bottom: 12px;
}
.side_item:hover .side_headline {
  text-decoration: underline;
}

.side_thumb {
  width: 100%;
  aspect-ratio: 1.2 / 1;
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
  font-size: 15px;
  font-weight: 700;
  color: #0b2e5e;
  margin: 4px 0 6px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.side_date {
  font-size: 12px;
  color: #70819a;
  margin: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
