<template>
  <section>
    <BgHeader
      title="About"
      subtitle="Contact Us"
      :imageSrc="bgTransportation"
      :description="bgDescription"
    />
  </section>
  <section style="width: 1200px; margin: 100px auto; display: flex; gap: 50px">
    <FormContact />
    <ContactInfor />
  </section>
</template>

<script setup>
import BgHeader from '@/components/BgHeader.vue'
import bgTransportation from '@/assets/images/bg_transportation.png'
import FormContact from './components/FormContact.vue'
import ContactInfor from './components/ContactInfor.vue'

const bgDescription = `"Powerful tools. Reliable support"`
</script>