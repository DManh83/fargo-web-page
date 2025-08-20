<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <section class="jobs-container">
    <div class="header">
      <div class="subtitle">
        <h3>WORKING WITH</h3>
        <a-divider class="divider" />
      </div>
      <h1>Opening Positions</h1>
    </div>
    <div style="margin-top: 40px">
      <Search />
    </div>
    <div style="margin-top: 40px">
      <ListJob />
    </div>
  </section>
</template>

<script setup>
import Search from '@/components/Search.vue'
import ListJob from '@/components/ListJob.vue'
</script>

<style scoped>
.jobs-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 46px;
  font-family: 'Poppins', sans-serif;
}
.subtitle {
  width: 119px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h3 {
  font-size: 16px;
  font-weight: 400;
  color: #000;
  text-align: center;
}
.divider {
  min-width: 50%;
  width: 50%;
  margin: 16px;
  border-color: #000;
}
h1 {
  font-size: 40px;
  font-weight: 600;
  color: #052e5e;
  text-align: center;
}
</style>
