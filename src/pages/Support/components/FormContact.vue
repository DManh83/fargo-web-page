<template>
  <div class="form-request">
    <h1 style="font-size: 32px; font-weight: 600; color: #052e5e; font-family: 'Poppins', sans-serif">Contact Fargo Logistics</h1>
    <a-form layout="vertical" :model="form" class="form-request-form">
      <a-form-item label="Full name">
        <a-input v-model:value="form.fullName" size="large" placeholder="Enter your full name" />
      </a-form-item>
      <a-form-item label="Phone number">
        <a-input
          v-model:value="form.phoneNumber"
          size="large"
          placeholder="Enter your phone number"
        />
      </a-form-item>
      <a-form-item label="Email">
        <a-input v-model:value="form.email" size="large" placeholder="Enter your email" />
      </a-form-item>
      <a-form-item label="Company name">
        <a-input
          v-model:value="form.companyName"
          size="large"
          placeholder="Enter your company name"
        />
      </a-form-item>

      <a-form-item label="Message">
        <a-textarea
          v-model:value="form.message"
          size="large"
          placeholder="Enter message"
          :rows="4"
        />
      </a-form-item>
      <a-form-item>
        <a-checkbox v-model:checked="form.termsAndConditions">
          By checking this box, i confirm that i have read and agree to the
          <RouterLink to="/terms-and-conditions">Terms & Policies</RouterLink>
        </a-checkbox>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="handleSubmit" size="large">Submit</a-button>
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

.form-request-form-group {
  display: flex;
  gap: 20px;
  width: 100%;
}

.form-request-form-group :deep(.ant-form-item) {
  width: 100%;
}
</style>
