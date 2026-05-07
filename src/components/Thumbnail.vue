<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <section class="thumbnail-content">
    <div class="overlay">
      <h1 class="title">{{ title }}</h1>
      <div v-if="showButtons" class="buttons">
        <RouterLink to="/support/quote-request">
          <a-button class="btn request-quote" type="primary" size="large">{{
            $t('btn.requestQuote')
          }}</a-button>
        </RouterLink>
        <RouterLink to="/about-us">
          <a-button class="btn learn-more" type="default" size="large">{{
            $t('btn.learnMore')
          }}</a-button>
        </RouterLink>
      </div>
    </div>
    <img :src="imageSrc" alt="thumbnail" class="thumbnail" />
  </section>
</template>

<script setup>
defineProps({
  title: String,
  showButtons: Boolean,
  imageSrc: String,
})
</script>

<style scoped>
.thumbnail-content {
  position: relative;
  width: 100%;
  height: 738px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.thumbnail {
  width: 100%;
  height: 738px;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
}

.overlay {
  position: absolute;
  top: 60%;
  right: 15%;
  transform: translateY(-50%);
  text-align: left;
  color: var(--primary);
  z-index: 1;
}

.thumbnail-content .title {
  font-size: 70px !important;
  font-weight: 400 !important;
  color: var(--tertiary) !important;
  margin-bottom: 20px !important;
  font-family: 'Racing Sans One' !important;
  letter-spacing: 0.04em !important;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.request-quote {
  background-color: #0d47a1;
  color: white;
  font-weight: bold;
}

.learn-more {
  background-color: #90caf9;
  color: var(--secondary);
  font-weight: bold;
}
</style>
