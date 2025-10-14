<template>
  <div class="form-request">
    <a-form layout="vertical" :model="form" class="form-request-form">
      <a-form-item :label="$t('form.companyName')">
        <a-input v-model:value="form.companyName" size="large" :placeholder="$t('form.companyNamePlaceholder')" />
      </a-form-item>

      <div class="form-request-form-group">
        <a-form-item :label="$t('form.phoneNumber')">
          <a-input v-model:value="form.phoneNumber" size="large" :placeholder="$t('form.phoneNumberPlaceholder')" />
        </a-form-item>
        <a-form-item :label="$t('form.email')">
          <a-input v-model:value="form.email" size="large" :placeholder="$t('form.emailPlaceholder')" />
        </a-form-item>
      </div>

      <a-form-item :label="$t('form.contactName')">
        <a-input
          v-model:value="form.contactName"
          size="large"
          :placeholder="$t('form.contactNamePlaceholder')"
        />
      </a-form-item>

      <a-form-item :label="$t('form.service')">
        <a-select
          v-model:value="form.service"
          size="large"
          :placeholder="$t('form.servicePlaceholder')"
        >
          <a-select-option value="air">{{ $t('form.air') }}</a-select-option>
          <a-select-option value="sea">{{ $t('form.sea') }}</a-select-option>
          <a-select-option value="road">{{ $t('form.road') }}</a-select-option>
          <a-select-option value="customs">{{ $t('form.customsClearance') }}</a-select-option>
        </a-select>
      </a-form-item>

      <div class="form-request-form-group">
        <a-form-item :label="$t('form.portOfLoading')">
          <a-input
            v-model:value="form.portOfLoading"
            size="large"
            :placeholder="$t('form.portOfLoadingPlaceholder')"
          />
        </a-form-item>
        <a-form-item :label="$t('form.portOfDischarge')">
          <a-input
            v-model:value="form.portOfDischarge"
            size="large"
            :placeholder="$t('form.portOfDischargePlaceholder')"
          />
        </a-form-item>
      </div>

      <div class="form-request-form-group">
        <a-form-item :label="$t('form.cargoName')">
          <a-input v-model:value="form.cargoName" size="large" :placeholder="$t('form.cargoNamePlaceholder')" />
        </a-form-item>
        <a-form-item :label="$t('form.cargoType')">
          <a-select v-model:value="form.cargoType" size="large" :placeholder="$t('form.cargoTypePlaceholder')">
            <a-select-option value="dry">{{ $t('form.dry') }}</a-select-option>
            <a-select-option value="refrigerated">{{ $t('form.refrigerated') }}</a-select-option>
            <a-select-option value="liquid">{{ $t('form.liquid') }}</a-select-option>
            <a-select-option value="hazardous">{{ $t('form.hazardous') }}</a-select-option>
            <a-select-option value="other">{{ $t('form.other') }}</a-select-option>
          </a-select>
        </a-form-item>
      </div>

      <div class="form-request-form-group">
        <a-form-item :label="$t('form.quantity')">
          <a-input
            v-model:value="form.quantity"
            size="large"
            :placeholder="$t('form.quantityPlaceholder')"
          />
        </a-form-item>
        <a-form-item :label="$t('form.hsCode')">
          <a-input v-model:value="form.hsCode" size="large" :placeholder="$t('form.hsCodePlaceholder')" />
        </a-form-item>
      </div>

      <a-form-item :label="$t('form.cargoStatus')">
        <a-radio-group
          v-model:value="form.cargoStatus"
          size="large"
          style="display: flex; gap: 32px"
        >
          <a-radio value="ready">{{ $t('form.ready') }}</a-radio>
          <a-radio value="notReady">{{ $t('form.notReady') }}</a-radio>
        </a-radio-group>
      </a-form-item>

      <div class="form-request-form-group">
        <a-form-item :label="$t('form.etd')">
          <a-date-picker
            v-model:value="form.etd"
            size="large"
            style="width: 100%"
            format="DD/MM/YYYY"
          />
        </a-form-item>
        <a-form-item :label="$t('form.targetPrice')">
          <a-input v-model:value="form.targetPrice" size="large" :placeholder="$t('form.targetPricePlaceholder')" />
        </a-form-item>
      </div>

      <a-form-item :label="$t('form.note')">
        <a-textarea
          v-model:value="form.note"
          size="large"
          :rows="4"
          :placeholder="$t('form.notePlaceholder')"
        />
      </a-form-item>

      <a-form-item>
        <a-checkbox v-model:checked="form.termsAndConditions">
          {{ $t('form.termsAndConditions') }}
          <RouterLink to="/terms-and-conditions">{{
            $t('form.termsAndConditionsLink')
          }}</RouterLink>
        </a-checkbox>
      </a-form-item>

      <a-form-item>
        <a-button type="primary" size="large" @click="handleSubmit">{{ $t('form.submit') }}</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { message } from 'ant-design-vue'
import { useI18n } from 'vue-i18n'
import { formatDate } from '@/utils/formatDate'

const { t } = useI18n()
// Dùng URL Cloudflare Worker của bạn
const WORKER_URL = 'https://broken-pine-271d.gin-itfanyuan.workers.dev/'
const SECRET = 'Fargo1618'

const form = ref({
  companyName: '',
  phoneNumber: '',
  email: '',
  contactName: '',
  service: '',
  portOfLoading: '',
  portOfDischarge: '',
  cargoName: '',
  cargoType: '',
  quantity: '',
  hsCode: '',
  cargoStatus: '',
  etd: '',
  targetPrice: '',
  note: '',
  termsAndConditions: false,
})

const required = (v) => v !== null && v !== undefined && String(v).trim() !== ''

const handleSubmit = async () => {
  if (!required(form.value.companyName) || !required(form.value.contactName)) return message.error(t('form.companyNameOrContactNameRequired'))
  if (!required(form.value.phoneNumber)) return message.error(t('form.phoneNumberRequired'))
  if (!required(form.value.email)) return message.error(t('form.emailRequired'))
  if (!required(form.value.service)) return message.error(t('form.serviceRequired'))
  if (!required(form.value.portOfLoading)) return message.error(t('form.portOfLoadingRequired'))
  if (!required(form.value.portOfDischarge)) return message.error(t('form.portOfDischargeRequired'))
  if (!required(form.value.cargoName)) return message.error(t('form.cargoNameRequired'))
  if (!required(form.value.cargoType)) return message.error(t('form.cargoTypeRequired'))
  if (!required(form.value.quantity)) return message.error(t('form.quantityRequired'))
  if (!required(form.value.cargoStatus)) return message.error(t('form.cargoStatusRequired'))
  if (!required(form.value.etd)) return message.error(t('form.etdRequired'))
  if (!required(form.value.targetPrice)) return message.error(t('form.targetPriceRequired'))
  if (!form.value.termsAndConditions) return message.error(t('form.termsAndConditionsRequired'))

  const lang = localStorage.getItem('lang') || 'vi-VN'

  const date = new Date().toLocaleDateString(lang, { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })

  const payload = {
    ...form.value,
    etd: form.value.etd ? formatDate(form.value.etd) : '',
    service: t(`form.${form.value.service}`),
    cargoType: t(`form.${form.value.cargoType}`),
    cargoStatus: t(`form.${form.value.cargoStatus}`),
    date,
    lang,
    _secret: SECRET,
    origin: window.location.origin,
  }

  try {
    const res = await fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await res.json().catch(() => ({}))
    if (!data.ok) throw new Error(data.error || 'Send failed')
    message.success(t('form.sendSuccess'))
    Object.keys(form.value).forEach(
      (k) => (form.value[k] = k === 'termsAndConditions' ? false : ''),
    )
  } catch (e) {
    console.error(e)
    message.error(t('form.sendFailed'))
  }
}
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
  color: #000;
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
