<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="banner">
    <div class="banner-content">
      <div class="banner-image-container">
        <img :src="introBanner" alt="intro-banner" class="banner-image" />
      </div>
      <div class="banner-content-text">
        <h1 class="banner-title">
          {{ $t('intro.bannerTitle') }}
        </h1>
        <h1 class="banner-title">
          {{ $t('intro.bannerSubtitle') }}
        </h1>
        <a-button class="banner-button" type="default" size="large" @click="handleClick">
          {{ $t('btn.request') }}
        </a-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import introBanner from '@/assets/images/intro_banner.png'
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  titlePrimary: String,
  titleSecondary: String,
  buttonText: String,
  imageSrc: String,
})

const handleClick = () => {
  router.push('/support/quote-request')
}
</script>

<style scoped>
.banner {
  position: relative;
  margin-top: 40px;
  background: var(--secondary);
  border-radius: 16px;
  overflow: hidden;
  width: 1200px;
  height: 280px;
  min-height: 280px;
}

.banner:hover {
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
}

.banner-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.banner-image-container {
  width: 540px;
  height: 540px;
  margin-top: -120px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.banner-image {
  width: 100%;
  height: 90%;
  border-radius: 0 50% 50% 0;
  object-fit: cover;
}

.banner-content-text {
  width: 50%;
  height: 540px;
  margin-top: -120px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  /* gap: 16px; */
}

.banner-title {
  font-size: 40px;
  font-weight: 400;
  font-family: var(--font-accent);
  letter-spacing: 0.04em;
  color: #f49f1c;
}
.banner-title:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 36px !important;
  font-weight: 800 !important;
}

.banner-button {
  width: 156px;
  height: 54px;
  border-radius: 20px;
  background-color: #f49f1c;
  color: var(--secondary);
  font-weight: 600;
  font-size: 24px;
}
/* @media (max-width: 1690px) {
  .banner-image-container {
    width: 480px;
    height: 480px;
  }
  .banner-content-text {
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
  .banner-title {
    font-size: 38px;
  }
  .banner-button {
    width: 140px;
    height: 50px;
    border-radius: 20px;
    font-size: 20px;
  }
}
*/
</style>
