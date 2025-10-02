<template>
  <section class="rse">
    <h1>{{ $t('services.relatedServices') }}</h1>
    <Card
      :title="item.title"
      :imageSrc="item.imageSrc"
      :paragraphs="item.paragraphs"
      titleColor="#ffff"
      textColor="#ffff"
      height="187px"
      titleSize="20px"
      pSize="16px"
      gap="20px"
      :path="item.path"
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
  height: 50%;
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
h1:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 32px !important;
  font-weight: 600 !important;
}
</style>
