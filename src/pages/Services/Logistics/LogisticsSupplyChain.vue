<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <BgHeader
      title="About"
      subtitle="Logistics and Supply chain"
      :imageSrc="bgTransportation"
      :description="bgDescription"
    />
  </section>
</template>

<script setup>
import BgHeader from '@/components/BgHeader.vue'
import bgTransportation from '@/assets/images/bg_transportation.png'

const bgDescription = `"Smart moves. Strong supply chains"`
</script>

<style scoped></style>
