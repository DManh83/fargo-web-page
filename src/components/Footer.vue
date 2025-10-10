<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="footer-content">
    <div class="footer-top">
      <div class="footer-left">
        <div class="logo-container">
          <span class="logo"><img :src="logoFargo" alt="logo" /></span>
          <span class="logo-text">Fargo Logistics Co., Ltd</span>
        </div>
        <div class="contact">
          <div class="address">
            <EnvironmentOutlined class="address-icon" />
            <span class="address-text">{{ $t('contact.address') }}</span>
          </div>
          <div class="phone">
            <PhoneOutlined class="phone-icon" />
            <span class="phone-text">MS LUNA (+84)865 439 399</span>
          </div>
          <div class="email">
            <MailOutlined class="email-icon" />
            <span class="email-text">info@fll.vn</span>
          </div>
        </div>
        <div class="info">
          <FacebookOutlined class="info-icon" />
          <LinkedinOutlined class="info-icon" />
          <InstagramOutlined class="info-icon" />
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-right-content">
          <div class="about-us">
            <span class="title">{{ $t('routes.aboutUs') }}</span>
            <ul>
              <li @click="handleClick('/news-insights')">{{ $t('routes.newsInsights') }}</li>
              <li @click="handleClick('/careers')">{{ $t('routes.careers') }}</li>
              <li @click="handleClick('/about-us')">{{ $t('routes.aboutUs') }}</li>
            </ul>
          </div>
          <div class="services">
            <span class="title">{{ $t('routes.services') }}</span>
            <ul>
              <li @click="handleClick('/transportation')">{{ $t('routes.transportation') }}</li>
              <li @click="handleClick('/logistics-and-supply-chain')">
                {{ $t('routes.logisticsAndSupplyChain') }}
              </li>
            </ul>
          </div>
          <div class="support">
            <span class="title">{{ $t('routes.support') }}</span>
            <ul>
              <li @click="handleClick('/support/quote-request')">
                {{ $t('routes.quoteRequest') }}
              </li>
              <li @click="handleClick('/support/faqs')">{{ $t('routes.faqs') }}</li>
              <li>{{ $t('routes.trackAndTrace') }}</li>
              <li @click="handleClick('/support/contact-us')">{{ $t('routes.contactUs') }}</li>
              <li>{{ $t('routes.resources') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-bottom-text">Copyright © 2025 Fargo Logistics Co., Ltd</span>
    </div>
  </section>
</template>

<script setup>
import logoFargo from '@/assets/images/icons/logo_fargo 4.png'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleClick(path) {
  router.push(path)
}
</script>

<style scoped>
.footer-content {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
}

.footer-top {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
}

.footer-left {
  width: 30%;
  height: 100%;
}

.logo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  margin-left: 10%;
  margin-top: 50px;
}

.logo {
  width: 200px;
  height: 64px;
}

.logo img {
  width: 80%;
  height: 90%;
}

.logo-text {
  margin-top: 25px;
  font-size: 24px;
  font-weight: 400;
  color: var(--primary);
  font-family: 'Racing Sans One';
  letter-spacing: 0.04em;
}

.contact {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  margin-left: 10%;
  margin-top: 25px;
}

.address,
.phone,
.email {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.address-icon,
.phone-icon,
.email-icon {
  font-size: 24px;
  color: var(--primary);
}

.address-text,
.phone-text,
.email-text {
  font-size: 16px;
  color: var(--primary);
  font-family: 'Poppins';
  letter-spacing: 0.04em;
  line-height: 1.4;
  text-align: left;
}

.address-text:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 16px !important;
  font-weight: 400 !important;
}

.info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  margin-left: 10%;
  margin-top: 65px;
}

.info-icon {
  font-size: 40px;
  color: var(--primary);
  border-radius: 50%;
  /* background-color: var(--primary); */
}

.footer-right {
  width: 50%;
  height: 100%;
  background-color: var(--secondary);
  align-content: center;
}

.footer-right-content {
  display: flex;
  justify-content: space-between;
}

.about-us,
.services,
.support {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.footer-right .title {
  font-size: 24px;
  font-weight: 400;
  color: var(--primary);
  font-family: 'Racing Sans One';
  margin-bottom: 20px;
}
.footer-right .title:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 24px !important;
  font-weight: 600 !important;
  font-style: italic;
}

ul {
  margin-left: -23px;
}

li {
  font-size: 16px;
  font-weight: 400;
  color: var(--primary);
  font-family: 'Poppins';
  letter-spacing: 0.04em;
  line-height: 1.4;
  text-align: left;
  cursor: pointer;
}

li:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 16px !important;
  font-weight: 400 !important;
}

.footer-bottom {
  width: 100%;
  height: 50px;
  border-top: 1px solid #1a3c74;
  color: var(--primary);
  text-align: center;
  font-size: 12px;
  padding-top: 20px;
}
</style>
