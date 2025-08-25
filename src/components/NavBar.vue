<template>
  <section class="header">
    <div class="logo-container">
      <RouterLink to="/" class="logo"><img :src="logoFargo" alt="logo" /></RouterLink>
    </div>

    <a-menu class="menu" mode="horizontal" :selectedKeys="selectedKeys">
      <template v-for="item in Menu" :key="item.name">
        <!-- Nếu có children -->
        <a-sub-menu v-if="item.children" :key="item.name">
          <template #title>
            <!-- Nếu có path thì làm RouterLink cho tiêu đề -->
            <RouterLink v-if="item.path" :to="item.path">{{ $t(item.name) }}</RouterLink>
            <span v-else>{{ $t(item.name) }}</span>
          </template>

          <!-- render children -->
          <template v-for="child in item.children" :key="child.name">
            <a-sub-menu v-if="child.children" :key="child.name">
              <template #title>
                <RouterLink v-if="child.path" :to="child.path">{{ $t(child.name) }}</RouterLink>
                <span v-else>{{ $t(child.name) }}</span>
              </template>
              <a-menu-item v-for="sub in child.children" :key="sub.name">
                <RouterLink :to="sub.path">{{ $t(sub.name) }}</RouterLink>
              </a-menu-item>
            </a-sub-menu>

            <a-menu-item v-else :key="`child-${child.name}`">
              <RouterLink :to="child.path">{{ $t(child.name) }}</RouterLink>
            </a-menu-item>
          </template>
        </a-sub-menu>
        <!-- If no children -->
        <a-menu-item v-else :key="`menu-${item.name}`">
          <RouterLink :to="item.path">{{ $t(item.name) }}</RouterLink>
        </a-menu-item>
      </template>
    </a-menu>
    <div>
      <a-button type="text" class="search-button">
        <SearchOutlined :style="{ fontSize: '24px' }" />
      </a-button>
      <a-button type="text" class="language-button">
        <GlobalOutlined :style="{ fontSize: '24px' }" />
      </a-button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import logoFargo from '@/assets/images/logo_fargo.png'

const Menu = ref([
  { name: 'menu.about', path: '/about-us' },
  {
    name: 'menu.services',
    children: [
      {
        name: 'menu.transportation',
        path: '/transportation',
        children: [
          { name: 'menu.sea', path: '/transportation/sea-freight' },
          { name: 'menu.air', path: '/transportation/air-freight' },
        ],
      },
      {
        name: 'menu.logistics',
        path: '/logistics-and-supply-chain',
        children: [
          { name: 'menu.customsBroker', path: '/logistics-and-supply-chain/customs-broker' },
          { name: 'menu.cargoInsurance', path: '/logistics-and-supply-chain/cargo-insurance' },
          {
            name: 'menu.warehouseAndStorage',
            path: '/logistics-and-supply-chain/warehouse-and-storage',
          },
          { name: 'menu.eCommerce', path: '/logistics-and-supply-chain/e-commerce' },
        ],
      },
    ],
  },
  { name: 'menu.news', path: '/news-insights' },
  { name: 'menu.careers', path: '/careers' },
  { name: 'menu.tools', path: '/tools-support' },
])

const route = useRoute()

const activeKey = computed(() => {
  const p = route.path
  if (p === '/') return '' // Home: không chọn gì
  const findPath = (list) => {
    for (const m of list) {
      if (m.path && (p === m.path || p.startsWith(m.path + '/'))) return m.name
      if (m.children) {
        const hit = findPath(m.children)
        if (hit) return hit
      }
    }
    return ''
  }
  return findPath(Menu.value)
})

const selectedKeys = computed(() => (activeKey.value ? [activeKey.value] : []))
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
