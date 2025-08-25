<script setup>
import BgHeader from '@/components/BgHeader.vue'
import bgCareers from '@/assets/images/bg_careers.png'
import Jobs from '@/pages/Careers/components/Jobs.vue'
import JobRender from '@/pages/Careers/components/JobRender.vue'
import Related from '@/pages/Careers/components/Related.vue'
import { careers } from '@/data/careers'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const bgDescription = `"Drive the world forward — join the future of logistics"`

const item = computed(() => store.getters['career/currentItem'])

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
  const pool = (careers || []).filter((it) => it && it.id !== currentId)

  const picked = sampleSize(pool, 4)
  return picked.map((it) => ({
    id: it.id,
    title: it.title,
    description: it.description,
    mode: it.mode,
    paragraphs: it.paragraphs,
  }))
})

console.log(related.value)
</script>

<template>
  <section>
    <BgHeader title="About" subtitle="Careers" :imageSrc="bgCareers" :description="bgDescription" />
  </section>
  <section class="grid">
    <div class="job-render-container">
      <JobRender :item="item" />
    </div>
    <div class="related-container">
      <Related :items="related" />
    </div>
  </section>
  <section class="other-jobs-container">
    <Jobs :isDivider="false" :title="`Other Career Opportunities`" />
  </section>
</template>

<style scoped>
.grid {
  width: 1200px;
  height: auto;
  margin: 50px auto;
  display: grid;
  grid-template-columns: minmax(0, 2.1fr) minmax(280px, 1fr);
  gap: 20px;
}
.other-jobs-container {
  width: 100%;
  height: auto;
  margin: 0 auto;
  background-color: #cee5ff;
}
</style>
