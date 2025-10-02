<template>
  <section class="container">
    <div class="content">
      <div class="title">
        <span>{{ $t('about.missionVision') }}</span>
      </div>
      <div class="description">
        <div class="our_mission">
          <span style="font-size: 20px; font-weight: 500; font-style: italic;">{{ $t('about.ourMission') }}</span>
          <span style="font-size: 20px; font-weight: 300;">{{ $t('about.ourMissionDescription') }}</span>
        </div>
        <div class="our_vision">
          <span style="font-size: 20px; font-weight: 500; font-style: italic;">{{ $t('about.ourVision') }}</span>
          <span style="font-size: 20px; font-weight: 300;">{{ $t('about.ourVisionDescription') }}</span>
        </div>
      </div>
    </div>
    <div class="image">
      <img src="@/assets/images/mission-vision.png" alt="mission-vision" />
    </div>
  </section>
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
  height: auto;
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
.title:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 32px !important;
  font-weight: 600 !important;
}

.description {
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
}

.description:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 20px !important;
  font-weight: 500 !important;
}

.our_mission, .our_vision {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
}

.image,
.image img {
  width: 567px;
  height: 617px;
  object-fit: cover;
  border-radius: 10px;
}
</style>
