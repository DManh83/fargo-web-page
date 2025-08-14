<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="footer-content">
    <div class="footer-top">
      <div class="footer-left">
        <div class="logo-container">
          <span class="logo"><img :src="logoFargo" alt="logo" /></span>
          <span class="logo-text">Fargo Logistics Co., Ltd</span>
        </div>
        <div class="contact">
          <div class="address">
            <EnvironmentOutlined class="address-icon" />
            <span class="address-text"
              >50 Street No. 1, Cityland Residential Area, Hanh Thong Ward, Ho Chi Minh City,
              Vietnam</span
            >
          </div>
          <div class="phone">
            <PhoneOutlined class="phone-icon" />
            <span class="phone-text">MS LUNA (+84)865 439 399</span>
          </div>
          <div class="email">
            <MailOutlined class="email-icon" />
            <span class="email-text">fargologistics.import@gmail.com</span>
          </div>
        </div>
        <div class="info">
          <FacebookOutlined class="info-icon" />
          <LinkedinOutlined class="info-icon" />
          <InstagramOutlined class="info-icon" />
        </div>
      </div>
      <div class="footer-right">
        <div class="about-us">
          <span class="title">About Us</span>
          <ul>
            <li>News & Insights</li>
            <li>Careers</li>
            <li>About Us</li>
          </ul>
        </div>
        <div class="services">
          <span class="title">Services</span>
          <ul>
            <li>Transportation</li>
            <li>Industries</li>
            <li>Logistics and Supply chain</li>
          </ul>
        </div>
        <div class="support" style="margin-right: 10%; margin-top: 40px">
          <span class="title">Support</span>
          <ul>
            <li>Quote-request</li>
            <li>FAQs</li>
            <li>Track & Trace</li>
            <li>Contact Us</li>
            <li>Resources</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-bottom-text">Copyright © 2025 Fargo Logistics Co., Ltd</span>
    </div>
  </div>
</template>

<script setup>
import logoFargo from '@/assets/images/logo_fargo.png'
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
  color: #fff;
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
  color: #fff;
}

.address-text,
.phone-text,
.email-text {
  font-size: 16px;
  color: #fff;
  font-family: 'Poppins';
  letter-spacing: 0.04em;
  line-height: 1.4;
  text-align: left;
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
  color: #fff;
  border-radius: 50%;
  /* background-color: #fff; */
}

.footer-right {
  width: 50%;
  height: 100%;
  background-color: #052e5e;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.about-us,
.services,
.support {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.title {
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  font-family: 'Racing Sans One';
  margin-bottom: 20px;
}

ul {
  margin-left: -23px;
}

li {
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  font-family: 'Poppins';
  letter-spacing: 0.04em;
  line-height: 1.4;
  text-align: left;
}

.footer-bottom {
  width: 100%;
  height: 50px;
  border-top: 1px solid #1a3c74;
  color: #fff;
  text-align: center;
  font-size: 12px;
  padding-top: 20px;
}
</style>
