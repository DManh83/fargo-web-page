<template>
  <section>
    <BgHeader
      :title="$t('about.about')"
      :subtitle="$t('support.contactUs.title')"
      :imageSrc="bgTransportation"
      :description="$t('support.description')"
    />
  </section>
  <section style="width: 1200px; margin: 100px auto 50px; display: flex; gap: 50px">
    <FormContact />
    <ContactInfor />
  </section>
  <section style="width: 1200px; margin: 50px auto">
    <Banner />
  </section>
</template>

<script setup>
import BgHeader from '@/components/BgHeader.vue'
import bgTransportation from '@/assets/images/bg_transportation.png'
import FormContact from './components/FormContact.vue'
import ContactInfor from './components/ContactInfor.vue'
import Banner from '@/components/Banner.vue'
</script>
