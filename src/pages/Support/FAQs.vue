<template>
  <section>
    <BgHeader
      :title="$t('about.about')"
      :subtitle="$t('support.faqs.title')"
      :imageSrc="bgTransportation"
      :description="bgDescription"
    />
  </section>
  <section style="width: 1200px; display: flex; flex-direction: column; margin: 50px auto">
    <h1
      style="font-size: 32px; font-weight: 600; color: #052e5e; font-family: 'Poppins', sans-serif"
    >
      {{ $t('support.faqs.subtitle') }}
    </h1>
    <span
      style="font-size: 16px; font-weight: 400; color: #434343; font-family: 'Poppins', sans-serif"
    >
      {{ $t('support.faqs.description') }}
    </span>
  </section>
  <section>
    <SearchFAQs />
  </section>
  <section style="width: 1200px; margin: 100px auto">
    <Banner/>
  </section>
</template>

<script setup>
import BgHeader from '@/components/BgHeader.vue'
import bgTransportation from '@/assets/images/bg_transportation.png'
import Banner from '@/components/Banner.vue'
import SearchFAQs from './components/SearchFAQs.vue'

const bgDescription = `support.description`
</script>
