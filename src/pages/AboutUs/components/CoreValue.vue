<template>
  <section class="core-values">
    <h2 class="cv-title">{{ $t('about.ourCoreValues') }}</h2>

    <div class="cv-grid">
      <a-card
        v-for="item in items"
        :key="item.title"
        class="cv-card"
        :bordered="false"
        :body-style="{ padding: '24px 28px' }"
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
  { title: 'operationalExcellenceContinuousImprovement', description: 'operationalExcellenceContinuousImprovementDescription' },
  { title: 'sustainabilitySocialResponsibility', description: 'sustainabilitySocialResponsibilityDescription' }
]
</script>

<style scoped>
.core-values {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px 64px;
}

.cv-title {
  text-align: center;
  margin: 0 0 24px;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 800;
  color: var(--secondary); /* xanh đậm */
}

.cv-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* Card */
.cv-card {
  background: #C8D9E6;            /* xanh nhạt như hình */
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(9, 35, 74, 0.06);
  transition: transform .15s ease, box-shadow .15s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cv-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(9, 35, 74, 0.12);
}

/* Bên trong card */
.cv-row {
  display: flex;
  align-items: center;
  gap: 20px;
}

.cv-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  color: var(--secondary);
  flex: 0 0 56px;
}
.cv-icon :deep(svg) {
  font-size: 40px;
}

.cv-text {
  display: grid;
  gap: 6px;
}

.cv-card-title {
  font-size: 20px;     /* có thể tăng 22–24 nếu muốn giống hơn */
  font-weight: 700;
  color: var(--secondary);
}

.cv-card-desc {
  font-size: 15px;
  line-height: 1.6;
  color: #2b3e5c;
  max-width: 520px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}
.cv-card-desc:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 15px !important;
  font-weight: 400 !important;
}

/* Responsive */
@media (max-width: 1200px) {
  .core-values { max-width: 1000px; }
}
@media (max-width: 1024px) {
  .cv-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .cv-title { font-size: 28px; }
  .cv-grid { grid-template-columns: 1fr; }
  .cv-card { border-radius: 14px; }
}
</style>