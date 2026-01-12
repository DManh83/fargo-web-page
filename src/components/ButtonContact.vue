<template>
  <a-float-button-group shape="circle" :style="{ right: '24px', width: '50px' }">
    <a-float-button class="phone-button" @click="handlePhone">
      <template #icon>
        <img :src="phone" alt="Phone" class="phone-icon" />
      </template>
    </a-float-button>
    <a-float-button class="zalo-button" @click="handleZalo">
      <template #icon>
        <img :src="zalo" alt="Zalo" class="zalo-icon" />
      </template>
    </a-float-button>
    <a-back-top :visibility-height="0" />
  </a-float-button-group>
</template>
<script lang="ts" setup>
import zalo from '@/assets/images/icons/zalo.png'
import phone from '@/assets/images/icons/phone2.png'
import { ref } from 'vue'

const phoneNumber = ref('+84866412239')

const handlePhone = () => {
  window.open(`tel:${phoneNumber.value}`, '_blank')
}

const handleZalo = () => {
  window.open(`https://zalo.me/${phoneNumber.value}`, '_blank')
}
</script>

<style scoped>
:deep(.ant-float-btn-circle) {
  height: 50px !important;
}

:deep(.ant-float-btn-circle) {
  width: 50px !important;
}

.phone-button :deep(.ant-float-btn-body) {
  background-color: #f9e7be !important;
  width: 50px !important;
  height: 50px !important;
}
.phone-button :deep(.ant-float-btn-icon) {
  width: 50px !important;
  height: 50px !important;
  align-content: center;
  margin: 0 !important;
}
.phone-icon {
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 50%;
}
.zalo-button :deep(.ant-float-btn-body) {
  background-color: #2962ff !important;
  width: 50px !important;
  height: 50px !important;
}
.zalo-button :deep(.ant-float-btn-icon) {
  width: 50px !important;
  height: 50px !important;
  margin: 0 !important;
}
.zalo-icon {
  width: 50px;
  height: 50px;
}
</style>
