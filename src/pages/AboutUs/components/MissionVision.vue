<template>
  <div class="container">
    <div class="content">
      <div class="title">
        <span>Mission & Vision</span>
      </div>
      <div class="description">
        <span
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac erat at dolor auctor
          blandit. Donec vitae orci sed dolor cursus ipsum dolor sit amet, consectetur adipis Nulla
          ac erat at dolor auctor blandit.auctor blandit.lor auctor blandit.lor auctor auctor
          blandit.lor auctor blandit.</span
        >
      </div>
    </div>
    <div class="image">
      <img src="@/assets/images/mission-vision.png" alt="mission-vision" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  width: 1200px;
  height: 617px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.content {
  width: 523px;
  height: 267px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.title {
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 25px;
  font-family: 'Poppins', sans-serif;
}

.description {
  font-size: 20px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
}

.image,
.image img {
  width: 567px;
  height: 617px;
  object-fit: cover;
  border-radius: 10px;
}

</style>
