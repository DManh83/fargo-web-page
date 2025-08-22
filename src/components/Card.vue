<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: String,
  paragraphs: Array,
  imageSrc: String,
  height: String,
  reverse: Boolean,
});

const stylesVars = computed(() => ({
  '--ib-h': props.height || '388px',
}));
</script>

<template>
  <section class="container" :style="stylesVars" :class="{ 'is-reverse': props.reverse }">
    <div class="media">
      <img :src="imageSrc" alt="Checker" />
    </div>
    <div class="content">
      <h2 class="title">{{ title }}</h2>
      <div class="paragraphs">
        <p v-for="item in paragraphs" :key="item">{{ item }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "media content";
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  width: 100%;
  /* height: 388px; */
}

.container.is-reverse {
  grid-template-areas: "content media";
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
  gap: 40px;
}
.content .title {
  font-size: 32px;
  font-weight: 600;
  color: #052e5e;
  font-family: 'Poppins', sans-serif;
}
.content .paragraphs {
  font-size: 16px;
  font-weight: 400;
  color: #000;
  font-family: 'Poppins', sans-serif;
  gap: 12px;
}
</style>
