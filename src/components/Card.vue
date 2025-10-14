<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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
  pSize: String,
  gap: String,
  titleColor: String,
  textColor: String,
  path: String,
})

const stylesVars = computed(() => ({
  '--ib-h': props.height || '388px',
  '--center': props.center || 'flex-start',
  '--grid': props.grid || '1fr 1fr',
  '--title-size': props.titleSize || '32px',
  '--gap': props.gap || '80px',
  '--text-color': props.textColor || '#000',
  '--title-color': props.titleColor || 'var(--secondary)',
  '--p-size': props.pSize || '20px',
  '--cursor': props.path ? 'pointer' : 'default',
}))

function handleClick() {
  router.push(`/support/quote-request`)
}
function handleCardClick(path) {
  if (path) {
    router.push(path)
  }
}
</script>

<template>
  <section
    class="container"
    :style="stylesVars"
    :class="{ 'is-reverse': props.reverse }"
    @click="handleCardClick(props.path)"
  >
    <div class="media">
      <img :src="imageSrc" alt="Checker" />
    </div>
    <div class="content">
      <h2 v-if="title" class="title">{{ title }}</h2>
      <div v-if="paragraphs" class="paragraphs">
        <p v-for="item in paragraphs" :key="item">{{ item }}</p>
      </div>
      <div v-if="buttonText" class="button">
        <a-button type="primary" class="button-text" size="large" @click="handleClick">
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
  /* max-width: 1200px; */
  width: 1200px;
  /* height: 388px; */
  cursor: var(--cursor);
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
.content .title:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: var(--title-size) !important;
  font-weight: 600 !important;
}
.content .paragraphs {
  font-size: var(--p-size);
  font-weight: 400;
  line-height: 1.2;
  color: var(--text-color);
  font-family: 'Poppins', sans-serif;
}
.content .paragraphs:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: var(--p-size) !important;
  font-weight: 400 !important;
}
.button-text {
  font-size: 16px;
  background-color: var(--tertiary);
  font-weight: 600;
  color: var(--secondary);
  font-family: 'Poppins', sans-serif;
}
.button-text:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 16px !important;
  font-weight: 600 !important;
}
</style>
