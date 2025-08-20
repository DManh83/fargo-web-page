<template>
  <section>
    <BgHeader title="About" subtitle="Careers" :imageSrc="bgCareers" :description="bgDescription" />
  </section>
</template>

<script setup>
import BgHeader from '@/components/BgHeader.vue'
import bgCareers from '@/assets/images/bg_careers.png'

const bgDescription = `"Drive the world forward — join the future of logistics"`
</script>
