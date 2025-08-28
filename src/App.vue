<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()

const breadcrumb = computed(() => {
  const crumbs = []

  route.matched.forEach((record, idx) => {
    let items = []

    if (typeof record.meta?.breadcrumb === 'function') {
      items = record.meta.breadcrumb(route) || []
    } else if (Array.isArray(record.meta?.breadcrumb)) {
      items = record.meta.breadcrumb
    } else {
      const titleKey = record.meta?.titleKey
      const title = record.meta?.title || record.name
      if (titleKey || title) {
        items = [{
          titleKey,
          title,
          path: idx < route.matched.length - 1
            ? { name: record.name, params: route.params, query: route.query }
            : undefined,
        }]
      }
    }

    items.forEach((i) => {
      const key = i.titleKey || i.title
      if (!crumbs.some((c) => (c.titleKey || c.title) === key)) crumbs.push(i)
    })
  })

  // Thêm "Home" ở đầu nếu thiếu
  if (!crumbs.length || (crumbs[0].path !== '/' && (crumbs[0].titleKey !== 'routes.home' && crumbs[0].title !== 'Home'))) {
    crumbs.unshift({ titleKey: 'routes.home', path: '/' })
  }

  // Link chỉ tới các crumb trước cùng (crumb cuối không có path)
  if (crumbs.length) crumbs[crumbs.length - 1].path = undefined

  // DỊCH ở đây: nếu có noI18n => giữ nguyên title; nếu có titleKey => t(titleKey); ngược lại dùng title nguyên bản
  return crumbs.map(c => ({
    ...c,
    title: c.noI18n ? c.title : (c.titleKey ? t(c.titleKey) : c.title),
  }))
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
  /* overflow: visible; */
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
