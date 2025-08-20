<template>
  <div class="list-job-container">
    <div class="job-grid">
      <a-card v-for="job in pagedJobs" :key="job.id" class="job-card">
        <h3 class="job-title">{{ job.title }}</h3>

        <div class="job-meta">
          <EnvironmentOutlined />
          <span>Offline or Remote</span>
        </div>

        <p class="job-desc">{{ job.description }}</p>

        <div class="card-actions">
          <a-button class="btn" type="primary">APPLY NOW</a-button>
          <a-button class="btn">View Detail</a-button>
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
import { computed, ref } from 'vue'

const page = ref(1)
const pageSize = 9

// Base 6 cards like your screenshot
const jobs = [
  {
    id: 'logistics',
    title: 'Logistics Coordinator',
    description:
      'Manages and coordinates daily transportation activities, ensuring goods move safely and on schedule.',
  },
  {
    id: 'uiux',
    title: 'UI/UX Designer',
    description:
      'Create intuitive, modern, and user-friendly designs for web and mobile platforms.',
  },
  {
    id: 'warehouse',
    title: 'Warehouse Supervisor',
    description:
      'Oversees warehouse operations including receiving, storage, and dispatch, ensuring safety and efficiency.',
  },
  {
    id: 'it',
    title: 'IT Specialist',
    description:
      'Maintains and supports company IT systems, ensuring smooth operations and data security.',
  },
  {
    id: 'fleet',
    title: 'Fleet Manager',
    description:
      'Manages company vehicles and drivers, ensuring efficiency, cost control, and regulatory compliance.',
  },
  {
    id: 'care',
    title: 'Customer Care Specialist',
    description:
      'Supports clients with inquiries and service issues, ensuring satisfaction and long-term relationships.',
  },
]

// Generate 12 pages × 6 cards (72 items) so pagination fully works
const items = ref(
  Array.from({ length: 12 }, (_, page) =>
    jobs.map((b, i) => ({
      id: `${b.id}-${page + 1}-${i + 1}`,
      title: b.title,
      description: b.description,
    })),
  ).flat(),
)

const pagedJobs = computed(() => {
  const start = (page.value - 1) * pageSize
  return items.value.slice(start, start + pageSize)
})

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
