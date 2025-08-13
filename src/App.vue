<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <a-layout class="app-layout">
    <a-layout-header class="app-header">
      <NavBar />
    </a-layout-header>
    <a-layout-content class="app-content">
      <RouterView />
    </a-layout-content>
    <a-layout-footer class="app-footer">
      <Footer />
    </a-layout-footer>
  </a-layout>
</template>

<style scoped>
.app-layout {
  background: #fff;
}

/* Header đứng yên trên cùng khi cuộn */
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 72px;
  background: #fff;
  display: flex;
  align-items: center;
}

/* Cho phép content cuộn */
.app-content {
  min-height: calc(100vh - 64px);
  overflow: hidden;
  /* padding-bottom: 260px; */
}

.app-footer {
  /* position: fixed; */
  bottom: 0;
  left: 0;
  right: 0;
  background: #052e5e;
  text-align: center;
}
</style>
