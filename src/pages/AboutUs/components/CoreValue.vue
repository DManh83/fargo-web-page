<template>
  <section class="core-values">
    <h2 class="cv-title">{{ $t('about.ourCoreValues') }}</h2>

    <div class="cv-grid">
      <a-card
        v-for="item in items"
        :key="item.title"
        class="cv-card"
        :bordered="false"
        :body-style="{ padding: '24px 15px' }"
      >
        <div class="cv-row">
          <div class="cv-icon">
            <Global />
          </div>

          <div class="cv-text">
            <div class="cv-card-title">{{ $t(`about.${item.title}`) }}</div>
            <div class="cv-card-desc">{{ $t(`about.${item.description}`) }}</div>
          </div>
        </div>
      </a-card>
    </div>
  </section>
</template>

<script setup>
import Global from '@/components/Global.vue'

const items = [
  { title: 'customerCentricity', description: 'customerCentricityDescription' },
  { title: 'onTimeReliability', description: 'onTimeReliabilityDescription' },
  { title: 'transparencyIntegrity', description: 'transparencyIntegrityDescription' },
  { title: 'safetyCompliance', description: 'safetyComplianceDescription' },
  {
    title: 'operationalExcellenceContinuousImprovement',
    description: 'operationalExcellenceContinuousImprovementDescription',
  },
  {
    title: 'sustainabilitySocialResponsibility',
    description: 'sustainabilitySocialResponsibilityDescription',
  },
]
</script>

<style scoped>
.core-values {
  max-width: 1200px;
  margin: 0 auto;
}

.cv-title {
  text-align: center;
  margin: 0 0 40px;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 800;
  color: var(--secondary); /* xanh đậm */
}

.cv-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: stretch;
}

/* Card */
.cv-card {
  background: #c8d9e6; /* xanh nhạt như hình */
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(9, 35, 74, 0.06);
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
  display: block;
  height: 100%;
}
.cv-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(9, 35, 74, 0.12);
}

/* Bên trong card */
.cv-row {
  display: grid;
  grid-template-columns: 56px 1fr; /* cột 1 là icon cố định, cột 2 là text */
  grid-template-rows: auto 1fr; /* hàng 1 cho title, hàng 2 cho desc */
  grid-template-areas:
    'icon title'
    'icon desc';
  align-items: center; /* icon + text đều bám đỉnh */
  gap: 1px 12px; /* (row-gap, col-gap) */
  min-height: 96px; /* chiều cao tối thiểu đồng đều */
}

.cv-icon {
  grid-area: icon;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  color: var(--secondary);
}
.cv-icon :deep(svg) {
  font-size: 40px;
}

/* .cv-text {
  display: grid;
  gap: 6px;
} */

.cv-card-title {
  grid-area: title;
  font-size: 18px;
  font-weight: 700;
  color: var(--secondary);
  line-height: 1.4;
  /* Giữ tối thiểu 2 dòng để các card thẳng hàng */
  --title-lines: 2;
  min-height: calc(1.4em * var(--title-lines));
  display: -webkit-box;
  -webkit-line-clamp: var(--title-lines);
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cv-card-desc {
  grid-area: desc;
  font-size: 15px;
  line-height: 1.6;
  color: #2b3e5c;
  max-width: 520px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;

  /* đồng bộ chiều cao mô tả để các card bằng nhau ở hàng desc */
  --desc-lines: 3; /* chỉnh 2–4 tùy thiết kế */
  min-height: calc(1.6em * var(--desc-lines));
  display: -webkit-box;
  -webkit-line-clamp: var(--desc-lines);
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.cv-card-desc:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 15px !important;
  font-weight: 400 !important;
}

/* Responsive */
@media (max-width: 1200px) {
  .core-values {
    max-width: 1000px;
  }
}
@media (max-width: 1024px) {
  .cv-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .cv-title {
    font-size: 28px;
  }
  .cv-grid {
    grid-template-columns: 1fr;
  }
  .cv-card {
    border-radius: 14px;
  }
}
</style>
