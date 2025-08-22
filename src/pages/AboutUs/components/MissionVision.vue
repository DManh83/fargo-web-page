<template>
  <section class="container">
    <div class="content">
      <div class="title">
        <span>Mission & Vision</span>
      </div>
      <div class="description">
        <div class="our_mission">
          <span style="font-size: 20px; font-weight: 500; font-style: italic;">Our Mission</span>
          <span style="font-size: 20px; font-weight: 300;">At Fargo Logistics, our mission is to provide reliable, efficient, and innovative logistics solutions that empower businesses to grow globally. We are dedicated to ensuring every shipment is handled with care, delivered on time, and optimized for cost and efficiency.</span>
        </div>
        <div class="our_vision">
          <span style="font-size: 20px; font-weight: 500; font-style: italic;">Our Vision</span>
          <span style="font-size: 20px; font-weight: 300;">We aim to become a leading logistics partner recognized worldwide for excellence, sustainability, and customer-centric services. With continuous innovation and a strong global network, we strive to connect markets, create value, and shape the future of global trade.</span>
        </div>
      </div>
    </div>
    <div class="image">
      <img src="@/assets/images/mission-vision.png" alt="mission-vision" />
    </div>
  </section>
</template>

<script setup></script>

<style scoped>

.container {
  width: 1200px;
  height: 617px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.content {
  width: 523px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.title {
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 25px;
  font-family: 'Poppins', sans-serif;
}

.description {
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
}

.our_mission, .our_vision {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
}

.image,
.image img {
  width: 567px;
  height: 617px;
  object-fit: cover;
  border-radius: 10px;
}
</style>
