<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import BgHeader from '@/components/BgHeader.vue'
import bgNews from '@/assets/images/news-insights.png'
import checker from '@/assets/images/Checker.png'
import Banner from '@/components/Banner.vue'
import { formatDate } from '@/utils/formatDate'
import {  NewRender, Related } from './components'
import { formatToParagraphs } from '@/utils/formatToParagraphs'
import FeaturedNews from '@/components/FeaturedNews.vue'

const route = useRoute()
const store = useStore()
const pageTitle = computed(() => route.query.title || 'Title random news')

const items = computed(() => store.getters['news/all'])

const item = computed(() => {
  const byId = store.getters['news/getById'](route.params.id)
  return byId || store.getters['news/currentItem'] || null
})

console.log(items)

const description = `"In logistics, every move matters — stay informed, stay ahead"`

const mainPost = computed(() => {
  const it = item.value
  return it
    ? {
        id: it.id,
        title: it.title,
        date: it.date,
        image: it.image || [checker],
        paragraphs: formatToParagraphs(it.paragraphs),
      }
    : {
        id: route.params.id,
        title: pageTitle.value,
        date: '2025-07-11',
        image: checker,
        paragraphs: ['Loading content...', 'If this persists, please try again later.'],
      }
})

function sampleSize(arr, n) {
  const a = arr.slice()
  const k = Math.min(n, a.length)
  for (let i = 0; i < k; i++) {
    const r = i + Math.floor(Math.random() * (a.length - i))
    ;[a[i], a[r]] = [a[r], a[i]]
  }
  return a.slice(0, k)
}

const related = computed(() => {
  const currentId = item.value?.id
  const pool = (items.value || [])
    .filter(it => it && it.id !== currentId)
    // .filter(it => it.category === item.value?.category)

  const picked = sampleSize(pool, 3)
  return picked.map(it => ({
    id: it.id,
    title: it.title,
    date: it.date,
    image: it.image || [checker],
  }))
})

</script>

<template>
  <section>
    <BgHeader title="About" subtitle="News" :imageSrc="bgNews" :description="description" />
  </section>

  <section class="content-container">
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
    <div class="grid">
      <div class="new-render-container">
        <NewRender :item="mainPost" />
      </div>
      <div class="related-container">
        <Related :items="related" />
      </div>
    </div>
  </section>

  <section class="featured_news">
    <FeaturedNews :isDivider="true" align="left" />
  </section>
  <section class="banner-container">
    <Banner
      title-primary="Need a shipping solution?"
      title-secondary="Request your free quote now!"
      button-text="Request"
    />
  </section>
</template>

<style scoped>
.content-container {
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
  margin-top: 50px;
}

.title {
  font-size: 32px;
  font-weight: 600;
  font-style: semibold;
  color: #0b2e5e;
  margin: 0 0 8px;
  font-family: 'Poppins', sans-serif;
}

.meta {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #000000;
  font-size: 13px;
  margin-bottom: 16px;
}
.meta .dot {
  display: inline-flex;
}
.meta .cat {
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
}
.meta .sep {
  opacity: 0.6;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
}

.grid {
  display: grid;
  grid-template-columns: minmax(0, 2.1fr) minmax(280px, 1fr);
  gap: 24px;
  margin: 0 auto;
}

.featured_news {
  width: 1200px;
  margin: 0 auto;
}

.banner-container {
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 100px;
}
</style>
