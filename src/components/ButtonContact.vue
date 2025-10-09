<template>
  <a-float-button-group shape="circle" :style="{ right: '24px' }">
    <a-float-button class="phone-button" @click="handlePhone">
      <template #icon>
        <PhoneFilled />
      </template>
    </a-float-button>
    <a-float-button class="zalo-button" type="primary" @click="handleZalo">
      <template #icon>
        <img :src="zalo" alt="Zalo" class="zalo-icon" />
      </template>
    </a-float-button>
    <a-back-top :visibility-height="0" />
  </a-float-button-group>
</template>
<script lang="ts" setup>
import { PhoneFilled } from '@ant-design/icons-vue'
import zalo from '@/assets/images/zalo.png'
import { ref } from 'vue'

const phone = ref('+84866412239')

const handlePhone = () => {
  window.open(`tel:${phone.value}`, '_blank')
}

const handleZalo = () => {
  window.open(`https://zalo.me/${phone.value}`, '_blank')
}
</script>

<style scoped>
.phone-button :deep(.ant-float-btn-body) {
  background-color: #ff3737 !important;
}
.zalo-button :deep(.ant-float-btn-content) {
  width: 40px !important;
  height: 40px !important;
}
.zalo-button :deep(.ant-float-btn-icon) {
  width: 40px !important;
  height: 40px !important;
  margin: 0 !important;
}
.zalo-icon {
  width: 40px;
  height: 40px;
}
</style>
