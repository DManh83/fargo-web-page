<template>
  <section class="core-values">
    <h2 class="cv-title">Our core values</h2>

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
            <div class="cv-card-title">{{ item.title }}</div>
            <div class="cv-card-desc">{{ item.description }}</div>
          </div>
        </div>
      </a-card>
    </div>
  </section>
</template>

<script setup>
import Global from '@/components/Global.vue'

const items = [
  { title: 'Customer Centricity', description: 'Focus on solving real needs and proactively updating shipment status.' },
  { title: 'On Time Reliability', description: 'Deliver on time, every time, on every route.' },
  { title: 'Transparency & Integrity', description: 'Clear information, transparent pricing – surcharges – documentation, always do what we say.' },
  { title: 'Safety & Compliance', description: 'Comply with customs laws, warehouse/transport safety standards.' },
  { title: 'Operational Excellence & Continuous Improvement', description: 'Standardize processes, use data to reduce costs and lead times.' },
  { title: 'Sustainability & Social Responsibility', description: 'Provide eco-friendly solutions and maintain ethical supply chain partnerships.' }
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
  color: #0b2e5e; /* xanh đậm */
}

.cv-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* Card */
.cv-card {
  background: #ebf1ff;            /* xanh nhạt như hình */
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
  color: #0b2e5e;
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
  color: #0b2e5e;
}

.cv-card-desc {
  font-size: 15px;
  line-height: 1.6;
  color: #2b3e5c;
  max-width: 520px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
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