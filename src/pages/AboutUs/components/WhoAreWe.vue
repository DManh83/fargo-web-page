<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="who-are-we-image">
      <img src="@/assets/images/who-are-we.png" alt="who-are-we" />
    </div>
    <div class="who-are-we-content">
      <div class="who-are-we-title">
        <span>Who are we?</span>
      </div>
      <div class="who-are-we-description">
        <span
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac erat at dolor auctor
          blandit. Donec vitae orci sed dolor cursus ipsum dolor sit amet, consectetur adipis Nulla
          ac erat at dolor auctor blandit.auctor blandit.lor auctor blandit.lor auctor auctor
          blandit.lor auctor blandit.</span
        >
      </div>
    </div>
  </div>
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
  color: #052e5e;
  margin-bottom: 25px;
  font-family: 'Poppins', sans-serif;
}

.who-are-we-description {
  font-size: 20px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
}

</style>
