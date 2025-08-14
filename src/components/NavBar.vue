<template>
  <div class="header">
    <div class="logo-container">
      <RouterLink to="/" class="logo"
        ><img :src="logoFargo" alt="logo"
      /></RouterLink>
    </div>

    <a-menu class="menu" mode="horizontal" :selectedKeys="selectedKeys">
      <a-menu-item v-for="item in Menu" :key="item.name">
        <RouterLink :to="item.path" class="menu-item">
          {{ $t(item.name) }}
        </RouterLink>
      </a-menu-item>
    </a-menu>
    <div>
      <a-button type="text" class="search-button">
        <SearchOutlined :style="{ fontSize: '24px' }" />
      </a-button>
      <a-button type="text" class="language-button">
        <GlobalOutlined :style="{ fontSize: '24px' }" />
      </a-button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import logoFargo from '@/assets/images/logo_fargo.png'

const Menu = ref([
  { name: 'menu.about', path: '/about-us' },
  { name: 'menu.services', path: '/services' },
  { name: 'menu.news', path: '/news-insights' },
  { name: 'menu.careers', path: '/careers' },
  { name: 'menu.tools', path: '/tools-support' },
])

const route = useRoute()

const activeKey = computed(() => {
  const p = route.path
  if (p === '/') return '' // Home: không chọn gì
  const hit = Menu.value.find(m => p === m.path || p.startsWith(m.path + '/'))
  return hit ? hit.name : ''
})

const selectedKeys = computed(() => activeKey.value ? [activeKey.value] : [])
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 24px;
  background: #fff;
  position: relative;
  z-index: 20;
  width: 100%;
  height: 72px;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.08);
}

.logo-container {
  padding: 0;
  height: 64px;
  width: 180px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #052e5e;
  align-content: center;
}

.logo img {
  width: 100%;
  height: 100%;
}

.menu {
  margin-top: 7px;
  justify-content: center;
  width: 35%;
}

.menu-item {
  font-size: 16px;
  font-weight: 600;
  color: #052e5e;
}
</style>
