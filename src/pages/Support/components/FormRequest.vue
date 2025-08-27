<template>
  <div class="form-request">
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
      <a-form-item label="Type of business">
        <a-radio-group
          v-model:value="form.typeOfBusiness"
          size="large"
          style="display: flex; gap: 100px"
        >
          <a-radio value="individual">Individual</a-radio>
          <a-radio value="enterprise">Enterprise</a-radio>
        </a-radio-group>
      </a-form-item>
      <div class="form-request-form-group">
        <a-form-item label="Commodities">
          <a-select v-model:value="form.commodities" size="large">
            <a-select-option value="dry">Dry</a-select-option>
            <a-select-option value="refrigerated">Refrigerated</a-select-option>
            <a-select-option value="liquid">Liquid</a-select-option>
            <a-select-option value="hazardous">Hazardous</a-select-option>
            <a-select-option value="other">Other</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Service">
          <a-select v-model:value="form.service" size="large">
            <a-select-option value="air">Air Freight</a-select-option>
            <a-select-option value="sea">Sea Freight</a-select-option>
          </a-select>
        </a-form-item>
      </div>
      <div class="form-request-form-group">
        <a-form-item label="Commodities name">
          <a-input
            v-model:value="form.commoditiesName"
            size="large"
            placeholder="Enter name of commodities"
          />
        </a-form-item>
        <a-form-item label="Industries">
          <a-select v-model:value="form.industries" size="large">
            <a-select-option value="agriculture">Agriculture</a-select-option>
            <a-select-option value="construction">Construction</a-select-option>
            <a-select-option value="energy">Energy</a-select-option>
            <a-select-option value="food">Food</a-select-option>
            <a-select-option value="other">Other</a-select-option>
          </a-select>
        </a-form-item>
      </div>
      <a-form-item label="On-Demand Service">
        <a-input
          v-model:value="form.onDemandService"
          size="large"
          placeholder="Eg. Air Freight, Sea Freight,..."
        />
      </a-form-item>
      <a-form-item label="Estimated Origin and Destination">
        <a-input
          v-model:value="form.estimatedOriginAndDestination"
          size="large"
          placeholder="Enter origin and destination"
        />
      </a-form-item>
      <div class="form-request-form-group">
        <a-form-item label="Transportation">
          <a-select v-model:value="form.transportation" size="large">
            <a-select-option value="air">Air Freight</a-select-option>
            <a-select-option value="sea">Sea Freight</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Cargo Availability Date">
          <a-date-picker
            v-model:value="form.cargoAvailabilityDate"
            size="large"
            style="width: 100%"
            format="DD/MM/YYYY"
          />
        </a-form-item>
      </div>
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
  typeOfBusiness: '',
  commodities: '',
  service: '',
  commoditiesName: '',
  industries: '',
  onDemandService: '',
  estimatedOriginAndDestination: '',
  transportation: '',
  cargoAvailabilityDate: '',
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
