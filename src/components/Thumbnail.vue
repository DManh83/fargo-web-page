<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="thumbnail-content">
    <div class="overlay">
      <h1 class="title">FARGO LOGISTICS</h1>
      <div class="buttons">
        <a-button class="btn request-quote" type="primary" size="large">Request a Quote</a-button>
        <a-button class="btn learn-more" type="default" size="large">Learn More</a-button>
      </div>
    </div>
    <img src="@/assets/images/thumbnail.png" alt="thumbnail" class="thumbnail" />
  </div>
</template>

<style scoped>
.thumbnail-content {
  position: relative;
  width: 100%;
  height: 738px;
  overflow: hidden;
}

.thumbnail {
  width: 3800px;
  height: 100%;
  object-fit: cover;
  transform: scaleX(-1);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  /* inset: 0; */
}

.overlay {
  position: absolute;
  top: 50%;
  right: 15%;
  transform: translateY(-50%);
  text-align: left;
  color: #fff;
  z-index: 1;
}

.title {
  font-size: 70px;
  font-weight: 400;
  color: #ffb23f;
  margin-bottom: 20px;
  font-family: 'Racing Sans One';
  letter-spacing: 0.04em;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.request-quote {
  background-color: #0d47a1;
  color: white;
  font-weight: bold;
}

.learn-more {
  background-color: #90caf9;
  color: #052e5e;
  font-weight: bold;
}
</style>
