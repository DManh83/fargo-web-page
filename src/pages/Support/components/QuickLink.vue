<template>
  <aside>
    <div>
      <h1
        style="
          font-size: 32px;
          font-weight: 600;
          color: var(--secondary);
          font-family: 'Poppins', sans-serif;
        "
      >
        {{ $t('support.quickLink.title') }}
      </h1>
      <ul style="list-style: none; padding: 0; margin: 0">
        <li>
          <RouterLink to="/support/faqs" style="color: var(--secondary)">{{
            $t('support.quickLink.faqs')
          }}</RouterLink>
        </li>
        <li>{{ $t('support.quickLink.trackAndTrace') }}</li>
        <li>
          <RouterLink to="/support/contact-us" style="color: var(--secondary)">{{
            $t('support.quickLink.contactUs')
          }}</RouterLink>
        </li>
        <li>{{ $t('support.quickLink.resources') }}</li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
aside {
  background-color: #C8D9E6;
  width: 305px;
  height: 200px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
li {
  font-size: 16px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  padding-top: 5px;
}
li:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 16px !important;
  font-weight: 400 !important;
}
h1:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 32px !important;
  font-weight: 600 !important;
}
</style>
