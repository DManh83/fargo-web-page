<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <section class="bg-header-content">
    <div class="overlay">
      <div class="overlay-title">
        <span class="title">{{ title }}</span>
      </div>
      <div class="overlay-subtitle">
        <span class="subtitle">{{ subtitle }}</span>
      </div>
    </div>
    <img :src="imageSrc" alt="thumbnail" class="bg-header-image" />
  </section>
  <div class="description">
    <span>{{ description }}</span>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  imageSrc: String,
  description: String,
})
</script>

<style scoped>
.bg-header-content {
  position: relative;
  width: 100%;
  height: 532px;
  overflow: hidden;
}

.bg-header-image {
  width: 1920px;
  height: 532px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  inset: 0;
}

.bg-header-content::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(5, 46, 94, 0.85) 0%,
    rgba(5, 46, 94, 0.65) 25%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 1;
  pointer-events: none;
}

.overlay {
  width: 1200px;
  position: absolute;
  top: 20%;
  left: 10%;
  text-align: left;
  color: var(--primary);
  z-index: 2;
  display: flex;
  flex-direction: column;
}

.overlay:lang(vi) {
  top: 10% !important;
}

.overlay-title {
  margin-right: 650px;
  margin-bottom: -20px;
  width: auto;
}
.overlay-subtitle {
  text-align: left;
  margin-left: 13%;
  width: auto;
}

.bg-header-content .title {
  font-size: 128px;
  font-weight: 400;
  color: var(--tertiary);
  font-family: 'Qwitcher Grypen';
  letter-spacing: 0.04em;
  font-style: italic;
  margin: none;
}

.bg-header-content .subtitle {
  font-size: 96px;
  font-weight: 400;
  color: var(--tertiary);
  font-family: 'Racing Sans One';
  letter-spacing: 0.04em;
  margin: none;
  justify-self: end;
}
.bg-header-content .subtitle:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 96px !important;
  font-weight: 700 !important;
  font-style: italic;
}
.description {
  height: 81px;
  background-color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.description span {
  font-family: 'Racing Sans One';
  font-weight: 400;
  font-size: 32px;
  line-height: 129%;
  letter-spacing: 0.04em;
  color: var(--primary);
}
.description span:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 32px !important;
  font-weight: 400 !important;
  font-style: italic;
}
.bg-header-content .title:lang(vi) {
  font-family: 'Qwitcher Grypen' !important;
  font-size: 128px !important;
  font-weight: 400 !important;
  font-style: italic;
}
</style>
