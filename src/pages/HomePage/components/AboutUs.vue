<template>
  <section class="about-us-content">
    <a-card>
      <a-flex justify="space-between" align="center">
        <img class="about-us-image" :src="introAboutUs" alt="about-us" />
        <a-flex
          vertical
          align="flex-start"
          justify="space-between"
          :style="{ padding: '32px', gap: '12px' }"
        >
          <h1>{{ $t('home.about') }}</h1>
          <p>
            Fargo Logistics provides reliable and efficient logistics and supply chain solutions. With expertise in maritime transport and global trade, we ensure safe, on-time deliveries and end-to-end services tailored to your business needs.
          </p>
          <a-button class="read-more-button">{{ $t('home.btn_read_more') }}</a-button>
        </a-flex>
      </a-flex>
    </a-card>
  </section>
</template>

<script setup>
import introAboutUs from '@/assets/images/intro_about_us.png'
</script>

<style scoped>
.about-us-content {
  width: 100%;
  height: 344px;
}

.about-us-image {
  width: 40%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.about-us-image:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.about-us-content {
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 100px; */
}

.read-more-button {
  background-color: #ffb23f;
  color: #052e5e;
  font-weight: bold;
}

h1 {
  font-size: 32px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  color: #052e5e;
  line-height: 1.1;
}

p {
  font-size: 20px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0%;

}
</style>
