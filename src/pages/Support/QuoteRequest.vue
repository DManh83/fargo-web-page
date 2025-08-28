<template>
  <section>
    <BgHeader
      :title="$t('about.about')"
      :subtitle="$t('support.quoteRequest.title')"
      :imageSrc="bgTransportation"
      :description="bgDescription"
    />
  </section>
  <section style="width: 1200px; display: flex; flex-direction: column; margin: 50px auto">
    <h1
      style="font-size: 32px; font-weight: 600; color: #052e5e; font-family: 'Poppins', sans-serif"
    >
      {{ $t('support.quoteRequest.title') }}
    </h1>
    <span
      style="font-size: 16px; font-weight: 400; color: #434343; font-family: 'Poppins', sans-serif"
    >
      {{ $t('support.quoteRequest.description') }}
    </span>
  </section>
  <section class="container">
    <FormRequest />
    <a-divider class="divider" type="vertical" />
    <QuickLink />
  </section>
  <section style="width: 1200px; margin: 50px auto">
    <Banner />
  </section>
</template>

<script setup>
import BgHeader from '@/components/BgHeader.vue'
import bgTransportation from '@/assets/images/bg_transportation.png'
import FormRequest from './components/FormRequest.vue'
import QuickLink from './components/QuickLink.vue'
import Banner from '@/components/Banner.vue'

const bgDescription = `support.description`
</script>
<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.divider {
  height: 1100px;
}
</style>
