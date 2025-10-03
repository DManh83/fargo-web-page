<template>
  <div class="form-request">
    <h1
      style="
        font-size: 32px;
        font-weight: 600;
        color: var(--secondary);
        font-family: 'Poppins', sans-serif;
      "
    >
      {{ $t('support.contactUs.contactFargoLogistics') }}
    </h1>
    <a-form layout="vertical" :model="form" class="form-request-form">
      <a-form-item :label="$t('form.fullName')">
        <a-input
          v-model:value="form.fullName"
          size="large"
          :placeholder="$t('form.fullNamePlaceholder')"
        />
      </a-form-item>
      <a-form-item :label="$t('form.phoneNumber')">
        <a-input
          v-model:value="form.phoneNumber"
          size="large"
          :placeholder="$t('form.phoneNumberPlaceholder')"
        />
      </a-form-item>
      <a-form-item :label="$t('form.email')">
        <a-input
          v-model:value="form.email"
          size="large"
          :placeholder="$t('form.emailPlaceholder')"
        />
      </a-form-item>
      <a-form-item :label="$t('form.companyName')">
        <a-input
          v-model:value="form.companyName"
          size="large"
          :placeholder="$t('form.companyNamePlaceholder')"
        />
      </a-form-item>

      <a-form-item :label="$t('form.message')">
        <a-textarea
          v-model:value="form.message"
          size="large"
          :placeholder="$t('form.messagePlaceholder')"
          :rows="4"
        />
      </a-form-item>
      <a-form-item>
        <a-checkbox v-model:checked="form.termsAndConditions">
          {{ $t('form.termsAndConditionsPlaceholder') }}
          <RouterLink to="/terms-and-conditions">{{
            $t('form.termsAndConditionsLinkPlaceholder')
          }}</RouterLink>
        </a-checkbox>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="handleSubmit" size="large">{{
          $t('btn.submit')
        }}</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const form = ref({
  fullName: '',
  phoneNumber: '',
  email: '',
  companyName: '',
  message: '',
  termsAndConditions: false,
})
</script>

<style scoped>
.form-request {
  width: 100%;
  max-width: 793px;
}
.form-request-form {
  width: 100%;
  margin: 0 auto;
}
:deep(.ant-form-item-label) {
  font-size: 13px;
  font-weight: 600;
  color: #000000;
  font-family: 'Poppins', sans-serif;
}
:deep(.ant-form-item-label) :lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 13px !important;
  font-weight: 600 !important;
}

.form-request-form-group {
  display: flex;
  gap: 20px;
  width: 100%;
}

.form-request-form-group :deep(.ant-form-item) {
  width: 100%;
}
h1:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 32px !important;
  font-weight: 600 !important;
}
</style>
