<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="intro" style="display: flex; justify-content: center; align-items: center">
    <div class="intro-content" style="width: 70%; height: 100%">
      <h1 style="font-size: 35px; font-weight: 600; color: #052e5e; margin-bottom: 50px">
        {{ $t('home.intro') }}
      </h1>
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 100%;
          gap: 30px;
        "
      >
        <a-card class="intro-card">
          <h2 class="intro-card-title">Title 1</h2>
          <p class="intro-card-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac erat at dolor auctor
            blandit. Donec vitae orci sed dolor cursus ipsum dolor sit amet, consectetur adipis
            dndit. Do psum dolor sit amet, consectetur adipiscing elit. Nulla ac erat at dolor
            auctor blandit.
          </p>
        </a-card>
        <a-card class="intro-card">
          <h2 class="intro-card-title">Title 2</h2>
          <p class="intro-card-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac erat at dolor auctor
            blandit. Donec vitae orci sed dolor cursus ipsum dolor sit amet, consectetur adipis
            dndit. Do psum dolor sit amet, consectetur adipiscing elit. Nulla ac erat at dolor
            auctor blandit.
          </p>
        </a-card>
        <a-card class="intro-card">
          <h2 class="intro-card-title">Title 3</h2>
          <p class="intro-card-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac erat at dolor auctor
            blandit. Donec vitae orci sed dolor cursus ipsum dolor sit amet, consectetur adipis
            dndit. Do psum dolor sit amet, consectetur adipiscing elit. Nulla ac erat at dolor
            auctor blandit.
          </p>
        </a-card>
      </div>

      <Banner
        title-primary="Need a shipping solution?"
        title-secondary="Request your free quote now!"
        button-text="Request"
      />
      <div class="our-clients">
        <h2 class="our-clients-title">Our Clients & Partners</h2>
        <div class="our-clients-list" dis>
          <img src="@/assets/images/KHAI HOAN.png" alt="client1" class="our-clients-image" />
          <img src="@/assets/images/logo-phongphu.png" alt="client2" class="our-clients-image" />
          <img src="@/assets/images/logo-siemens.png" alt="client3" class="our-clients-image" />
          <img src="@/assets/images/logo-SSSC.png" alt="client4" class="our-clients-image" />
        </div>
      </div>
      <News />
    </div>
  </div>
</template>

<script setup>
import Banner from '@/components/Banner.vue'
import News from '@/pages/HomePage/components/News.vue'
</script>

<style scoped>
.intro-card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  height: 350px;
  background-color: #ebf0ff;
  /* padding: 20px; */
}

.intro-card-title {
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 30px;
}

.intro-card-content {
  font-size: 16px;
  font-weight: 400;
  color: #000000;
}

@media (max-width: 992px) {
  .intro-cards {
    flex-wrap: wrap;
  }
  .intro-card.ant-card {
    flex: 1 1 calc(50% - 15px);
  }
}

@media (max-width: 768px) {
  .intro-card.ant-card {
    flex: 1 1 100%;
  }
  .intro {
    padding: 40px 0;
  }
  .intro h1 {
    margin-bottom: 20px;
  }
}

/* Trợ năng: giảm motion nếu người dùng không muốn animation */
@media (prefers-reduced-motion: reduce) {
  .intro-card.ant-card {
    transition: none;
  }
  .intro-card.ant-card:hover {
    transform: none;
  }
}

.our-clients {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 50px 0;
}

.our-clients-list {
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 20px; */
}

.our-clients-image {
  width: 294px;
  height: 100px;
  margin-top: 50px;
}
</style>
