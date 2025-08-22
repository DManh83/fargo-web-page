<template>
  <article class="job-render">
    <h1>We are hiring - {{ item.title }}</h1>
    <div v-for="p in item.paragraphs" :key="p.id" class="job-render-content">
      <h2>{{ p.title }}</h2>
      <ul v-for="it in p.content" :key="it" class="job-render-content-item">
        <li>{{ it }}</li>
      </ul>
    </div>
    <a-divider class="divider" />
  </article>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.job-render {
  width: 100%;
    margin: 0 auto;
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.75;
}
h1 {
  font-size: 32px;
  font-weight: 600;
  font-style: semibold;
  color: #0b2e5e;
  margin: 0 0 8px;
  font-family: 'Poppins', sans-serif;
}
h2 {
  font-size: 16px;
  font-weight: 500;
  font-style: semibold;
  color: #0b2e5e;
  margin: 0 0 8px;
  font-family: 'Poppins', sans-serif;
}
li {
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  font-family: 'Poppins', sans-serif;
  line-height: 1.2;
}
.divider {
  margin: 20px 0;
  border-color: #000000;
  min-width: 40%;
  width: 40%;
}
</style>
