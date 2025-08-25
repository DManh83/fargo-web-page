<template>
  <section class="thumbnail-container">
    <Thumbnail title="FARGO LOGISTICS" :imageSrc="thumbnail1" showButtons />
  </section>
  <section class="about-us-container">
    <AboutUs />
  </section>
  <section class="delivery-service-container">
    <DeliveryService />
  </section>
  <section class="carousel-card-container">
    <CarouselCard :items="solutions" />
  </section>
  <!-- <div class="industries-container">
    <Industries />
  </div> -->
  <section class="intro-container">
    <Intro />
  </section>
  <section class="thumbnail-container-2">
    <div class="top-container">
      <Thumbnail2
        title1="Logistics"
        title2="Experts"
        title3="Trusted by"
        title4="Global Supply Chains!"
        showOverlay
        :imageSrc="thumbnail2"
      />
    </div>
    <div class="bottom-container" style="margin-top: 50px">
      <Thumbnail2 :imageSrc="thumbnail3" />
    </div>
  </section>
</template>

<script setup>
import Thumbnail from '@/components/Thumbnail.vue'
import { AboutUs, DeliveryService, Intro, Thumbnail2 } from './components'
import CarouselCard from '@/components/CarouselCard.vue'

import thumbnail1 from '@/assets/images/thumbnail.png'
import thumbnail2 from '@/assets/images/thumbnail2.png'
import thumbnail3 from '@/assets/images/thumbnail3.png'
import { solutions } from '@/data/solutions'
</script>

<style scoped>
.thumbnail-container {
  width: 100%;
  height: 738px;
  margin-bottom: 50px;
}

.about-us-container {
  width: 1200px;
  height: 344px;
  margin: 0 auto;
}

.delivery-service-container {
  width: 100%;
  height: 603px;
  margin-top: 50px;
  /* margin-left: 16%; */
}

.carousel-card-container {
  width: 1200px;
  height: 100%;
  margin-top: 50px;
  margin: 0 auto;
  margin-bottom: 100px;
  /* margin-left: 16%; */
}

/* .industries-container {
  width: 100%;
  height: 430px;
  margin-top: 50px;
  margin-left: 16%;
}
*/

.intro-container {
  width: 1200px;
  margin-top: 100px;
  margin: 0 auto;
  margin-bottom: 100px;
}

.thumbnail-container-2 {
  width: 100%;
  height: 1064px;
  /* margin-bottom: 50px; */
  background-color: #052e5e;
}
</style>
