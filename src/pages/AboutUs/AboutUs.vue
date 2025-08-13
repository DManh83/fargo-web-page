<template>
  <div class="about-us-container">
    <BgHeader title="About Us" subtitle="Fargo Logistics " :imageSrc="bgAbout" />
  </div>
</template>

<script setup>
import BgHeader from '@/components/BgHeader.vue'
import bgAbout from '@/assets/images/bg_about.png'
</script>