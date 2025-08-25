<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  paragraphs: Array,
  imageSrc: String,
  height: String,
  reverse: Boolean,
  buttonText: String,
  center: String,
  grid: String,
  titleSize: String,
  gap: String,
  titleColor: String,
  textColor: String,
})

const stylesVars = computed(() => ({
  '--ib-h': props.height || '388px',
  '--center': props.center || 'flex-start',
  '--grid': props.grid || '1fr 1fr',
  '--title-size': props.titleSize || '32px',
  '--gap': props.gap || '80px',
  '--text-color': props.textColor || '#000',
  '--title-color': props.titleColor || '#052e5e',
}))
</script>

<template>
  <section class="container" :style="stylesVars" :class="{ 'is-reverse': props.reverse }">
    <div class="media">
      <img :src="imageSrc" alt="Checker" />
    </div>
    <div class="content">
      <h2 v-if="title" class="title">{{ title }}</h2>
      <div v-if="paragraphs" class="paragraphs">
        <p v-for="item in paragraphs" :key="item">{{ item }}</p>
      </div>
      <div v-if="buttonText" class="button">
        <a-button type="primary" class="button-text" size="large">
          {{ buttonText }}
        </a-button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: var(--grid);
  grid-template-areas: 'media content';
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);
  width: 100%;
  /* height: 388px; */
}

.container.is-reverse {
  grid-template-areas: 'content media';
}

.media {
  grid-area: media;
  max-width: 567px;
  height: var(--ib-h);
}
.media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  display: block;
}
.content {
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: var(--center);
  align-items: var(--center);
}
.content .title {
  font-size: var(--title-size);
  font-weight: 600;
  color: var(--title-color);
  font-family: 'Poppins', sans-serif;
  text-align: var(--center);
}
.content .paragraphs {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  color: var(--text-color);
  font-family: 'Poppins', sans-serif;
}
.button-text {
  font-size: 16px;
  background-color: #ffb23f;
  font-weight: 600;
  color: #052e5e;
  font-family: 'Poppins', sans-serif;
}
</style>
