<template>
  <section class="rse">
    <h1>Related Services</h1>
    <Card
      :title="item.title"
      :imageSrc="item.imageSrc"
      :paragraphs="item.paragraphs"
      titleColor="#ffff"
      textColor="#ffff"
    />
  </section>
</template>

<script setup>
import Card from './Card.vue'
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.rse {
  width: 1200px;
  height: 100%;
  margin: 50px auto;
}
h1 {
  font-size: 32px;
  font-weight: 600;
  color: #ffff;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin-bottom: 40px;
}
</style>
