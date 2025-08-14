<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="item in breadcrumb" :key="item.title">
      <RouterLink v-if="item.path" :to="item.path">{{ item.title }}</RouterLink>
      <span v-else>{{ item.title }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  breadcrumb: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.ant-breadcrumb {
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 230px;
}

</style>