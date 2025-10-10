<template>
  <section style="width: 1200px; margin: 50px auto">
    <!-- <a-form-item>
      <a-input
        class="search-input"
        :placeholder="$t('form.searchFAQs')"
        style="height: 54px; font-size: 16px; font-weight: 400; font-family: 'Poppins', sans-serif"
      >
        <template #prefix>
          <SearchOutlined style="font-size: 24px; color: #bebdbf; margin-right: 10px" />
        </template>
      </a-input>
    </a-form-item> -->
    <a-row :gutter="[24, 24]" style="margin-top: 40px">
      <!-- Left: categories -->
      <a-col :span="6">
        <div class="menu-card">
          <a-menu mode="inline" :selectedKeys="[activeCategory]" class="faq-menu">
            <a-menu-item v-for="c in categories" :key="c.key" @click="activeCategory = c.key">
              {{ c.label }}
            </a-menu-item>
          </a-menu>
        </div>
      </a-col>

      <!-- Right: 3 columns of FAQs -->
      <a-col :span="18">
        <a-row :gutter="[16, 16]">
          <a-col v-for="(col, idx) in columns" :key="idx" :span="12">
            <a-collapse
              accordion
              :bordered="false"
              expandIconPosition="end"
              :expand-icon="expandIcon"
              class="faq-col"
            >
              <a-collapse-panel
                v-for="item in col"
                :key="item.key"
                :header="`${item.id}. ${$t(item.question)}`"
                class="faq-item"
              >
                <p class="answer">{{ $t(item.answer) }}</p>
              </a-collapse-panel>
            </a-collapse>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </section>
</template>

<script setup>
import { ref, computed, h } from 'vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import { faqs } from '@/data/fags'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const categories = computed(() => [
  { key: 'domestic', label: t('support.faqs.domesticTransportation') },
  { key: 'export', label: t('support.faqs.export') },
  { key: 'import', label: t('support.faqs.import') },
  { key: 'order', label: t('support.faqs.orderSupport') },
  { key: 'status', label: t('support.faqs.checkStatus') },
  { key: 'billing', label: t('support.faqs.paymentInvoice') },
])

const activeCategory = ref(categories.value[0].key)
const keyword = ref('')

const filteredFaqs = computed(() => {
  const kw = keyword.value.trim().toLowerCase()
  const cat = faqs.find((f) => f.category === activeCategory.value)
  const list = cat?.qa ?? []
  const filtered = kw
    ? list.filter(
        (q) => q.question.toLowerCase().includes(kw) || q.answer.toLowerCase().includes(kw),
      )
    : list

  // Tạo id duy nhất theo category để tránh trùng key giữa các category
  return filtered.map((q) => ({
    ...q,
    key: `${activeCategory.value}-${q.id}`,
  }))
})

const columns = computed(() => {
  const cols = [[], []] // 2 columns
  filteredFaqs.value.forEach((item, i) => {
    cols[i % 2].push(item)
  })
  return cols
})

const expandIcon = ({ isActive }) =>
  h(PlusOutlined, {
    style: {
      transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)',
      transition: 'transform .2s',
      fontSize: '16px',
    },
  })
</script>

<style scoped>
.faq-menu {
  width: 100%;
  background: #eef6ff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.faq-menu :deep(.ant-menu-item) {
  height: 40px;
  line-height: 40px;
  margin: 4px 0;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
}
.faq-menu :deep(.ant-menu-item) :lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 16px !important;
  font-weight: 500 !important;
}
.faq-menu :deep(.ant-menu-item-selected) {
  background: #d9e8ff !important;
  font-weight: 600;
}

.faq-col :deep(.ant-collapse-item) {
  border: none;
  margin-bottom: 12px;
}

.faq-item :deep(.ant-collapse-header) {
  background: #e8f0fe;
  border-radius: 12px !important;
  padding: 12px 16px !important;
  font-weight: 600;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
}
.faq-item :deep(.ant-collapse-header) :lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 16px !important;
  font-weight: 600 !important;
}
.faq-item :deep(.ant-collapse-content) {
  background: var(--primary);
  border-radius: 12px !important;
  border: 1px solid #f0f0f0;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
}
.faq-item :deep(.ant-collapse-content) :lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 16px !important;
  font-weight: 400 !important;
}
.answer {
  margin: 8px 0 0;
  color: #4b5563;
  line-height: 1.6;
}
.search-input:lang(vi) {
  font-family: var(--font-vi) !important;
  font-size: 16px !important;
  font-weight: 400 !important;
}
</style>
