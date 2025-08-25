<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="rs">
    <div class="rs-container">
      <div class="rs-title">
        <h1>{{ title }}</h1>
      </div>
      <div v-if="items.length > 1" class="rs-content">
        <div v-for="item in items" :key="item.id" class="rs-item">
          <div class="rs-item-image">
            <img :src="item.image" alt="Related Solutions" />
          </div>
          <div class="rs-item-title">
            <h2>{{ item.title }}</h2>
          </div>
        </div>
      </div>
      <div v-else class="rs-content">
        <Card
          :title="items[0].title"
          :imageSrc="items[0].image"
          :paragraphs="items[0].paragraphs"
          :height="items[0].height"
          :titleColor="items[0].titleColor"
          :textColor="items[0].textColor"
          :reverse="items[0].reverse"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from './Card.vue'

defineProps({
  items: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: 'Related Solutions',
  },
})
</script>

<style scoped>
.rs {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #052e5e;
  clip-path: ellipse(100% 100% at 50% 100%);
  left: 50%;
  pointer-events: none;
}

.rs-container {
  max-width: 1200px;
  margin: 100px auto;
}

.rs-title {
  text-align: center;
  margin-bottom: 50px;
}

.rs-title h1 {
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}
.rs-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
}
.rs-items {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.rs-item {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
.rs-item-image {
  width: 590px;
  height: 356px;
}

.rs-item-title h2 {
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}
.rs-item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.rs-item-card {
  width: 100%;
  height: 100%;
}
</style>
