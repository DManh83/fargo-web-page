<template>
  <div class="contact-info">
    <h1
      style="
        font-size: 32px;
        font-weight: 600;
        color: var(--secondary);
        font-family: 'Poppins', sans-serif;
      "
    >
      {{ t('support.contactUs.contactInformation') }}
    </h1>
    <div
      class="contact-info-content"
      style="display: flex; flex-direction: column; gap: 15px; margin-top: 40px"
    >
      <div class="name">
        <h2
          style="
            font-size: 24px;
            font-weight: 600;
            color: var(--secondary);
            font-family: 'Poppins', sans-serif;
          "
        >
          Fargo Logistics Co.,Ltd
        </h2>
      </div>
      <div class="address" style="display: flex; gap: 10px">
        <EnvironmentOutlined />
        <p
          style="
            font-size: 16px;
            font-weight: 400;
            color: #434343;
            font-family: 'Poppins', sans-serif;
          "
        >
          {{ t('support.contactUs.address') }}
        </p>
      </div>
      <div class="phone" style="display: flex; gap: 10px">
        <PhoneOutlined />
        <p
          style="
            font-size: 16px;
            font-weight: 400;
            color: #434343;
            font-family: 'Poppins', sans-serif;
          "
        >
          MS LUNA (+84)A865 439 399
        </p>
      </div>
      <div class="email" style="display: flex; gap: 10px">
        <MailOutlined />
        <p
          style="
            font-size: 16px;
            font-weight: 400;
            color: #434343;
            font-family: 'Poppins', sans-serif;
          "
        >
          info@fll.vn
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
h1:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 32px !important;
  font-weight: 600 !important;
}
p:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 16px !important;
  font-weight: 400 !important;
}
</style>
