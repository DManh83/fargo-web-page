<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps({
  size: { type: [Number, String], default: 60 }, // px
  stroke: { type: String, default: '#052E5E' }, // màu viền
  shape: { type: String, default: 'hex' }, // 'pentagon' | 'hex'
  strokeWidth: { type: [Number, String], default: 1 },
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="stroke"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <!-- Viền đa giác -->
    <template v-if="shape === 'pentagon'">
      <!-- Ngũ giác cân đẹp trong viewBox 24x24 -->
      <polygon points="12,2 21,9.2 17.5,21.5 6.5,21.5 3,9.2" fill="none" />
    </template>
    <template v-else>
      <!-- Lục giác (như ảnh mẫu dạng tổ ong) -->
      <polygon points="7.5,4.206 16.5,4.206 21,12 16.5,19.794 7.5,19.794 3,12" fill="none" />
    </template>

    <!-- Địa cầu bên trong -->
    <circle cx="12" cy="12" r="5" fill="none" />
    <!-- Kinh tuyến -->
    <ellipse cx="12" cy="12" rx="3" ry="5" fill="none" />
    <!-- Vĩ tuyến chính -->
    <path d="M7.2 12h9.6" />
    <!-- Vĩ tuyến phụ (trên & dưới) -->
    <!-- <path d="M8 9.5a9.5 9.5 0 0 1 8 0" />
    <path d="M8 14.5a9.5 9.5 0 0 0 8 0" /> -->
  </svg>
</template>
