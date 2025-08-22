<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { EnvironmentOutlined } from '@ant-design/icons-vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { careers } from '@/data/careers'

const store = useStore()
const router = useRouter()

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
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
  const currentId = careers?.id
  const pool = (careers || [])
    .filter(it => it && it.id !== currentId)

  const picked = sampleSize(pool, 4)
  return picked.map(it => ({
    id: it.id,
    title: it.title,
    description: it.description,
    mode: it.mode,
  }))
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

<template>
  <section class="related">
    <aside class="side">
      <a-card v-for="item in related" :key="item.id" class="job-card">
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
    </aside>
  </section>
</template>

<style scoped>
.related {
  width: 100%;
  height: auto;
  margin: 0 auto;
}

.side {
  height: auto;
  background: #e5f1fd;
  border-radius: 12px;
  margin: 12px 0;
  padding: 12px;
}
.job-card {
  border-radius: 14px;
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
  margin-bottom: 12px;
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

</style>
