<template>
  <div class="list-job-container">
    <div class="job-grid">
      <a-card v-for="item in pagedItems" :key="item.id" class="job-card">
        <h3 class="job-title">{{ item.title }}</h3>

        <div class="job-meta">
          <EnvironmentOutlined />
          <span>{{ item.mode }}</span>
        </div>

        <p class="job-desc">{{ item.description }}</p>

        <div class="card-actions">
          <a-button class="btn" type="primary">APPLY NOW</a-button>
          <a-button class="btn" @click="clickViewDetail(item)">View Detail</a-button>
        </div>
      </a-card>
    </div>

    <div class="news-pagination">
      <a-pagination
        v-model:current="page"
        :total="items.length"
        :pageSize="pageSize"
        :show-less-items="false"
        :show-size-changer="false"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { careers } from '@/data/careers'
// import { remember } from '@/utils/remember'

const router = useRouter()
const store = useStore()

const page = ref(1)
const pageSize = 9

// Base 6 cards like your screenshot
const items = ref(
  Array.from({ length: careers.length }).map((_, i) => ({
    id: i + 1,
    title: careers[i].title,
    description: careers[i].description,
    paragraphs: careers[i].paragraphs,
    mode: careers[i].mode,
  })),
)

const pagedItems = computed(() => {
  const start = (page.value - 1) * pageSize
  return items.value.slice(start, start + pageSize)
})

onMounted(() => {
  store.dispatch('career/setItems', [...careers])
})
const clickViewDetail = (job) => {
  store.dispatch('career/setItem', job)
  router.push({
    name: 'Careers Detail',
    params: { id: job.id },
    query: { title: job.title },
  })
}
</script>

<style scoped>
/* Layout */
.list-job-container {
  max-width: 1200px;
  margin: 0 auto;
}

.job-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

@media (max-width: 1024px) {
  .job-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 640px) {
  .job-grid {
    grid-template-columns: 1fr;
  }
}

/* Card */
.job-card {
  border-radius: 14px;
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
}
.job-card:hover {
  box-shadow: 0 8px 24px rgba(2, 33, 102, 0.08);
  transform: translateY(-2px);
}

.job-title {
  margin: 0 0 6px;
  color: #052e5e; /* deep blue heading */
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.2px;
  font-family: 'Poppins', sans-serif;
}

.job-meta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #5e7ba3;
  margin-bottom: 10px;
}
.meta-icon {
  color: #5e7ba3;
  flex: 0 0 auto;
}

.job-desc {
  color: #31425f;
  font-size: 14px;
  line-height: 1.45;
  min-height: 60px; /* helps keep card heights consistent */
  margin: 0 0 14px;
}

/* Buttons */

.card-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Pagination */
.news-pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  margin: 22px 0 6px;
}

.page-pill {
  height: 36px;
  min-width: 36px;
  padding: 0 10px;
  border-radius: 10px;
  border: 1px solid #c7d2fe;
  background: #ffffff;
  color: #0a56cc;
  font-weight: 700;
  font-size: 13px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition:
    background 0.15s,
    color 0.15s,
    border-color 0.15s;
}
.page-pill:hover {
  border-color: #9db3ff;
}
.page-pill.active {
  background: #0a56cc;
  color: #ffffff;
  border-color: #0a56cc;
}
.page-pill.icon {
  font-size: 18px;
  line-height: 0;
  padding: 0 8px;
}
.page-pill:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.page-pill.ellipsis {
  background: transparent;
  border: none;
  color: #6b7fa6;
  cursor: default;
}
</style>
