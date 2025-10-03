<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container">
    <div class="who-are-we-image">
      <img src="@/assets/images/who-are-we.png" alt="who-are-we" />
    </div>
    <div class="who-are-we-content">
      <div class="who-are-we-title">
        <span>{{ $t('about.whoAreWe') }}</span>
      </div>
      <div class="who-are-we-description">
        <span>{{ $t('about.whoAreWeDescription') }}</span>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.who-are-we-image,
.who-are-we-image img {
  width: 567px;
  height: 617px;
  object-fit: cover;
  border-radius: 10px;
}

.who-are-we-content {
  width: 523px;
  height: 267px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.who-are-we-title {
  font-size: 32px;
  font-weight: 600;
  color: var(--secondary);
  margin-bottom: 25px;
  font-family: 'Poppins', sans-serif;
}
.who-are-we-title:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 32px !important;
  font-weight: 600 !important;
}
.who-are-we-description {
  font-size: 20px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
}
.who-are-we-description:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 20px !important;
  font-weight: 400 !important;
}
</style>
