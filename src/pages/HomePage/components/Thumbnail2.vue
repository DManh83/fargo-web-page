<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="thumbnail-content">
    <div v-if="showOverlay" class="overlay">
      <div class="overlay-content">
        <div class="overlay-content-top">
          <h1 class="title1">{{ title1 }}</h1>
          <h1 class="title2">{{ title2 }}</h1>
        </div>
        <div class="overlay-content-bottom">
          <h1 class="title3">{{ title3 }}</h1>
          <h1 class="title4">{{ title4 }}</h1>
        </div>
      </div>
    </div>
    <img :src="imageSrc" alt="thumbnail" class="thumbnail" />
  </div>
</template>

<script setup>
defineProps({
  title1: String,
  title2: String,
  title3: String,
  title4: String,
  showOverlay: Boolean,
  imageSrc: String,
})
</script>

<style scoped>
.thumbnail-content {
  position: relative;
  width: 100%;
  height: 507px;
  overflow: hidden;
}

.thumbnail {
  width: 1920px;
  height: 100%;
  object-fit: cover;
  /* transform: scaleX(-1); */
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
}

.overlay {
  position: absolute;
  top: 35%;
  right: 15%;
  transform: translateY(-50%);
  text-align: left;
  color: #fff;
  z-index: 1;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.overlay-content-top {
  display: flex;
  /* flex-direction: column; */
  align-items: flex-end;
  gap: 20px;
}

.title1 {
  font-size: 48px;
  font-weight: 400;
  color: #ffb23f;
  margin-bottom: 20px;
  font-family: 'Racing Sans One';
  letter-spacing: 0.04em;
}
.title2 {
  font-size: 48px;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 20px;
  font-family: 'Racing Sans One';
  letter-spacing: 0.04em;
}

.overlay-content-bottom {
  display: flex;
  /* flex-direction: column; */
  align-items: flex-end;
  gap: 20px;
}

.title3 {
  font-size: 48px;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 20px;
  font-family: 'Racing Sans One';
  letter-spacing: 0.04em;
}
.title4 {
  font-size: 48px;
  font-weight: 400;
  color: #ffb23f;
  margin-bottom: 20px;
  font-family: 'Racing Sans One';
  letter-spacing: 0.04em;
}
</style>
