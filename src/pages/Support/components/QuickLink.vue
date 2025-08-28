<template>
  <aside>
    <div>
      <h1
        style="
          font-size: 32px;
          font-weight: 600;
          color: #052e5e;
          font-family: 'Poppins', sans-serif;
        "
      >
        {{ $t('support.quickLink.title') }}
      </h1>
      <ul style="list-style: none; padding: 0; margin: 0">
        <li>
          <RouterLink to="/support/faqs" style="color: #052e5e">{{ $t('support.quickLink.faqs') }}</RouterLink>
        </li>
        <li>{{ $t('support.quickLink.trackAndTrace') }}</li>
        <li>
          <RouterLink to="/support/contact-us" style="color: #052e5e">{{ $t('support.quickLink.contactUs') }}</RouterLink>
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
  background-color: #cee5ff;
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
</style>
