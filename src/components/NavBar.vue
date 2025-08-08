<template>
  <div class="header">
    <a-button type="text" class="logo-button">
      <span class="logo">LOGO</span>
    </a-button>

    <a-menu class="menu" mode="horizontal">
      <a-menu-item v-for="item in Menu" :key="item.name">
        <a :href="item.href" class="menu-item">
          {{ item.name }}
        </a>
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
import { ref } from 'vue'

const Menu = ref([
  { name: 'About us', href: '#about-us' },
  { name: 'Services', href: '#services' },
  { name: 'News & Insights', href: '#news-insights' },
  { name: 'Careers', href: '#careers' },
  { name: 'Tools & Support', href: '#tools-support' },
])
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 24px;
  background: #fff;
  position: relative;
  z-index: 20;
  width: 100%;
  height: 72px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #052e5e;
  text-decoration: none;
}

.logo-button {
  padding: 0;
  height: 64px;
  width: 200px;
}

.menu {
  justify-content: center;
  width: 35%;
}

.menu-item {
  font-size: 16px;
  font-weight: 600;
  color: #052e5e;
}
</style>
