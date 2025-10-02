<template>
  <section class="about-us-content">
    <a-card>
      <a-flex justify="space-between" align="center">
        <img class="about-us-image" :src="introAboutUs" alt="about-us" />
        <a-flex
          vertical
          align="flex-start"
          justify="space-between"
          :style="{ padding: '32px', gap: '10px' }"
        >
          <h1>{{ $t('about.title') }}</h1>
          <p>
            {{ $t('about.bannerDescription') }}
          </p>
          <a-button class="read-more-button" @click="router.push('/about-us')">{{
            $t('btn.readMore')
          }}</a-button>
        </a-flex>
      </a-flex>
    </a-card>
  </section>
</template>

<script setup>
import introAboutUs from '@/assets/images/intro_about_us.png'
import { useRouter } from 'vue-router'

const router = useRouter()
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
h1:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 32px !important;
  font-weight: 600 !important;
}

p {
  font-size: 20px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.01em;
  line-height: 1.3;
}
p:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 20px !important;
  font-weight: 400 !important;
}
</style>
