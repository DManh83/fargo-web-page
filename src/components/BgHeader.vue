<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="thumbnail-content">
    <div class="overlay">
      <div class="overlay-title">
        <span class="title">{{ title }}</span>
      </div>
      <div class="overlay-subtitle">
        <span class="subtitle">{{ subtitle }}</span>
      </div>
    </div>
    <img :src="imageSrc" alt="thumbnail" class="thumbnail" />
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  imageSrc: String,
})
</script>

<style scoped>
.thumbnail-content {
  position: relative;
  width: 100%;
  height: 532px;
  overflow: hidden;
}

.thumbnail {
  width: 1920px;
  height: 532px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  inset: 0;
}

.thumbnail-content::before {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(5, 46, 94, 0.85) 0%,
    rgba(5, 46, 94, 0.65) 35%,
    rgba(0, 0, 0, 0) 70%
  );
  z-index: 1;
  pointer-events: none;
}

.overlay {
  position: absolute;
  top: 30%;
  right: 35%;
  transform: translateY(-50%);
  text-align: left;
  color: #fff;
  z-index: 2;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 128px;
  font-weight: 400;
  color: #ffb23f;
  font-family: 'Qwitcher Grypen';
  letter-spacing: 0.04em;
  font-style: italic;
  margin: none;
}

.subtitle {
  font-size: 96px;
  font-weight: 400;
  color: #ffb23f;
  font-family: 'Racing Sans One';
  letter-spacing: 0.04em;
  margin: none;
}
</style>
