<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="banner">
    <div class="banner-content">
      <img src="@/assets/images/intro_banner.png" alt="intro-banner" class="banner-image" />
      <div class="banner-content-text">
        <h1 class="banner-title">
          {{ titlePrimary }}
        </h1>
        <h1 class="banner-title">
          {{ titleSecondary }}
        </h1>
        <a-button class="banner-button" type="primary" size="large"> {{ buttonText }} </a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  titlePrimary: String,
  titleSecondary: String,
  buttonText: String,
  imageSrc: String,
})
</script>

<style scoped>
.banner {
  position: relative;
  margin-top: 40px;
  background: linear-gradient(135deg, #052e5e 0%, #0a4aa8 100%);
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  min-height: 280px;
}
.banner-content {
  position: relative;
  display: flex;
  align-items: center;
  gap: 32px;
  min-height: 220px;
  /* chừa chỗ cho ảnh tròn bên trái */
  padding: 32px 32px 32px 48%;
}

.banner-image {
  position: absolute;
  top: -55%;
  left: -8%;
  width: 55%;
  max-width: 560px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  pointer-events: none;
  user-select: none;
}

.banner-content-text {
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  align-items: flex-end;
  gap: 16px;
}

.banner-title {
  margin: 0;
  color: #ffb23f;
  font-size: clamp(20px, 2.2vw, 32px);
  font-weight: 700;
  line-height: 1.3;
  flex: 1 1 auto;
}

/* Nút Ant Design trong banner */
::v-deep(.banner-button.ant-btn) {
  height: 48px;
  padding: 0 24px;
  border-radius: 999px;
  font-weight: 600;
  box-shadow: 0 8px 18px rgba(10, 74, 168, 0.28);
  background: #ffb23f;
  color: #000000;
  border: none;
}

::v-deep(.banner-button.ant-btn:focus-visible) {
  outline: 3px solid rgba(255, 255, 255, 0.6);
  outline-offset: 2px;
}

/* Responsive */
@media (max-width: 1200px) {
  .banner-content {
    padding-left: 46%;
  }
}

@media (max-width: 992px) {
  /* Ẩn ảnh tròn để nội dung thoáng hơn */
  .banner-image {
    display: none;
  }
  .banner-content {
    padding: 24px;
    gap: 16px;
  }
}

@media (max-width: 480px) {
  ::v-deep(.banner-button.ant-btn) {
    width: 100%;
    justify-content: center;
  }
}
</style>
