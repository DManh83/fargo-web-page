<template>
  <div class="about-us-content">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac erat at dolor auctor
            blandit. Donec vitae orci sed dolor cursus ipsum dolor sit amet, consectetur adipis
            dndit. Do psum dolor sit amet, consectetur adipiscing elit. Nulla ac erat at dolor
            auctor blandit.
          </p>
          <a-button class="read-more-button">{{ $t('home.btn_read_more') }}</a-button>
        </a-flex>
      </a-flex>
    </a-card>
  </div>
</template>

<script setup>
import introAboutUs from '@/assets/images/intro_about_us.png'
</script>

<style scoped>
.about-us-content {
  width: 65%;
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
</style>
