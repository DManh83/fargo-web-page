<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="search-container">
    <a-select
      class="select"
      v-model:value="job"
      show-search
      allow-clear
      placeholder="Jobs"
      style="width: 387px"
      :options="jobs"
    />
    <a-select
      class="select"
      v-model:value="position"
      show-search
      allow-clear
      placeholder="Positions"
      style="width: 285px"
      :options="positions"
    />
    <a-select
      class="select"
      v-model:value="location"
      show-search
      placeholder="Location"
      style="width: 285px"
      :options="locations"
    />
    <a-button
      shape="round"
      style="
        width: 153px;
        height: 54px;
        background-color: #ffb23f;
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        font-family: 'Poppins', sans-serif;
      "
    >
      <template #icon>
        <SearchOutlined />
      </template>
      Search
    </a-button>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { SearchOutlined } from '@ant-design/icons-vue'

const job = ref(null)
const position = ref(null)
const location = ref(null)

const jobs = ref([
  {
    label: 'Software Engineer',
    value: 'software-engineer',
  },
  {
    label: 'Data Scientist',
    value: 'data-scientist',
  },
  {
    label: 'Product Manager',
    value: 'product-manager',
  },
  {
    label: 'UX/UI Designer',
    value: 'ux-ui-designer',
  },
])

const positions = ref([
  {
    label: 'Frontend Developer',
    value: 'frontend-developer',
  },
  {
    label: 'Backend Developer',
    value: 'backend-developer',
  },
])

const locations = ref([
  {
    label: 'Ha Noi',
    value: 'ha-noi',
  },
  {
    label: 'Ho Chi Minh',
    value: 'ho-chi-minh',
  },
  {
    label: 'Da Nang',
    value: 'da-nang',
  },
])
</script>

<style scoped>
.search-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.input {
  width: 387px;
  height: 54px;
  border-radius: 111px;
}
.select :deep(.ant-select-selector) {
  height: 54px;
  border-radius: 111px;
  padding: 0 12px;
}
.select :deep(.ant-select-selection-search) {
  display: flex;
  align-items: center;
  justify-content: center;
}
.select :deep(.ant-select-selection-item) {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 20px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: #5B5B5B;
}

.select :deep(.ant-select-selection-placeholder) {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 20px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: #5B5B5B;
}
</style>
