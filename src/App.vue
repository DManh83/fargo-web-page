<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import { RouterView, useRoute } from 'vue-router';
import Header from './components/Header.vue';
import { computed } from 'vue';

const route = useRoute()
// const router = useRouter()
// router.afterEach(() => {
//   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
// })

const breadcrumb = computed(() => {
  const crumbs = []

  route.matched.forEach((record, idx) => {
    let items = []

    if (typeof record.meta?.breadcrumb === 'function') {
      items = record.meta.breadcrumb(route) || []
    } else if (Array.isArray(record.meta?.breadcrumb)) {
      items = record.meta.breadcrumb
    } else {
      const title = record.meta?.title || record.name
      if (title) {
        items = [{
          title,
          path: idx < route.matched.length - 1
            ? { name: record.name, params: route.params, query: route.query }
            : undefined
        }]
      }
    }

    items.forEach(i => {
      if (!crumbs.some(c => c.title === i.title)) crumbs.push(i)
    })
  })

  if (!crumbs.length || (crumbs[0].path !== '/' && crumbs[0].title !== 'Home')) {
    crumbs.unshift({ title: 'Home', path: '/' })
  }

  if (crumbs.length) crumbs[crumbs.length - 1].path = undefined
  return crumbs
})

const showHeader = computed(() => !route.meta?.hideHeader)
</script>

<template>
  <a-layout class="app-layout">
    <a-layout-header class="app-header">
      <NavBar />
      <Header v-if="showHeader" :breadcrumb="breadcrumb" />
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
  max-width: 1920px;
  min-width: 1200px;
}

/* Header đứng yên trên cùng khi cuộn */
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: auto;
  background: #fff;
  padding: 0;
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
