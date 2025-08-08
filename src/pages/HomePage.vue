<template>
  <div class="home-content">
    <div class="thumbnail-container">
      <Thumbnail />
    </div>
    <div class="about-us-container">
      <AboutUs />
    </div>
    <div class="delivery-service-container">
      <DeliveryService />
    </div>
  </div>
</template>

<script setup>
import Thumbnail from '@/components/Thumbnail.vue'
import AboutUs from '@/components/AboutUs.vue'
import DeliveryService from '@/components/DeliveryService.vue'
</script>

<style scoped>

.thumbnail-container {
  width: 100%;
  height: 738px;
  margin-bottom: 50px;
}

.about-us-container {
  width: 100%;
  height: 344px;
  margin-left: 16%;
}

.delivery-service-container {
  width: 100%;
  height: 603px;
  margin-top: 50px;
  /* margin-left: 16%; */
}

</style>
