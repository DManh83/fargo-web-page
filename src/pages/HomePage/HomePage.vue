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
    <div class="solution-container">
      <Solution />
    </div>
    <div class="industries-container">
      <Industries />
    </div>
    <div class="intro-container">
      <Intro />
    </div>
  </div>
</template>

<script setup>
import Thumbnail from '@/components/Thumbnail.vue'
import AboutUs from '@/pages/HomePage/components/AboutUs.vue'
import DeliveryService from '@/pages/HomePage/components/DeliveryService.vue'
import Solution from '@/pages/HomePage/components/Solution.vue'
import Industries from '@/pages/HomePage/components/Industries.vue'
import Intro from '@/pages/HomePage/components/Intro.vue'
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

.solution-container {
  width: 100%;
  height: 603px;
  margin-top: 50px;
  /* margin-left: 16%; */
}

.industries-container {
  width: 100%;
  height: 430px;
  margin-top: 50px;
  /* margin-left: 16%; */
}

.intro-container {
  width: 100%;
  height: 100%;
  margin-top: 50px;
  /* margin-left: 16%; */
}

</style>
