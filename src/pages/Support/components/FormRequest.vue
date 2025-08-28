<template>
  <div class="form-request">
    <a-form layout="vertical" :model="form" class="form-request-form">
      <a-form-item :label="$t('form.fullName')">
        <a-input v-model:value="form.fullName" size="large" :placeholder="$t('form.fullNamePlaceholder')" />
      </a-form-item>
      <a-form-item :label="$t('form.phoneNumber')">
        <a-input
          v-model:value="form.phoneNumber"
          size="large"
          :placeholder="$t('form.phoneNumberPlaceholder')"
        />
      </a-form-item>
      <a-form-item :label="$t('form.email')">
        <a-input v-model:value="form.email" size="large" :placeholder="$t('form.emailPlaceholder')" />
      </a-form-item>
      <a-form-item :label="$t('form.companyName')">
        <a-input
          v-model:value="form.companyName"
          size="large"
          :placeholder="$t('form.companyNamePlaceholder')"
        />
      </a-form-item>
      <a-form-item :label="$t('form.typeOfBusiness')">
        <a-radio-group
          v-model:value="form.typeOfBusiness"
          size="large"
          style="display: flex; gap: 100px"
        >
          <a-radio value="individual">{{ $t('form.individual') }}</a-radio>
          <a-radio value="enterprise">{{ $t('form.enterprise') }}</a-radio>
        </a-radio-group>
      </a-form-item>
      <div class="form-request-form-group">
        <a-form-item :label="$t('form.commodities')">
          <a-select v-model:value="form.commodities" size="large">
            <a-select-option value="dry">{{ $t('form.dry') }}</a-select-option>
            <a-select-option value="refrigerated">{{ $t('form.refrigerated') }}</a-select-option>
            <a-select-option value="liquid">{{ $t('form.liquid') }}</a-select-option>
            <a-select-option value="hazardous">{{ $t('form.hazardous') }}</a-select-option>
            <a-select-option value="other">{{ $t('form.other') }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :label="$t('form.service')">
          <a-select v-model:value="form.service" size="large">
            <a-select-option value="air">{{ $t('form.airFreight') }}</a-select-option>
            <a-select-option value="sea">{{ $t('form.seaFreight') }}</a-select-option>
          </a-select>
        </a-form-item>
      </div>
      <div class="form-request-form-group">
        <a-form-item :label="$t('form.commoditiesName')">
          <a-input
            v-model:value="form.commoditiesName"
            size="large"
            :placeholder="$t('form.commoditiesNamePlaceholder')"
          />
        </a-form-item>
        <a-form-item :label="$t('form.industries')">
          <a-select v-model:value="form.industries" size="large">
            <a-select-option value="agriculture">{{ $t('form.agriculture') }}</a-select-option>
            <a-select-option value="construction">{{ $t('form.construction') }}</a-select-option>
            <a-select-option value="energy">{{ $t('form.energy') }}</a-select-option>
            <a-select-option value="food">{{ $t('form.food') }}</a-select-option>
            <a-select-option value="other">{{ $t('form.other') }}</a-select-option>
          </a-select>
        </a-form-item>
      </div>
      <a-form-item :label="$t('form.onDemandService')">
        <a-input
          v-model:value="form.onDemandService"
          size="large"
          :placeholder="$t('form.onDemandServicePlaceholder')"
        />
      </a-form-item>
      <a-form-item :label="$t('form.estimatedOriginAndDestination')">
        <a-input
          v-model:value="form.estimatedOriginAndDestination"
          size="large"
          :placeholder="$t('form.estimatedOriginAndDestinationPlaceholder')"
        />
      </a-form-item>
      <div class="form-request-form-group">
        <a-form-item :label="$t('form.transportation')">
          <a-select v-model:value="form.transportation" size="large">
            <a-select-option value="air">{{ $t('form.airFreight') }}</a-select-option>
            <a-select-option value="sea">{{ $t('form.seaFreight') }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :label="$t('form.cargoAvailabilityDate')">
          <a-date-picker
            v-model:value="form.cargoAvailabilityDate"
            size="large"
            style="width: 100%"
            format="DD/MM/YYYY"
          />
        </a-form-item>
      </div>
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
          {{ $t('form.termsAndConditions') }}
          <RouterLink to="/terms-and-conditions">{{ $t('form.termsAndConditionsLink') }}</RouterLink>
        </a-checkbox>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="handleSubmit" size="large">{{ $t('btn.submit') }}</a-button>
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
