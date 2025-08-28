<template>
  <section style="width: 1200px; margin: 50px auto">
    <a-form-item>
      <a-input :placeholder="$t('form.searchFAQs')" style="height: 54px; font-size: 16px; font-weight: 400; font-family: 'Poppins', sans-serif">
        <template #prefix>
          <SearchOutlined style="font-size: 24px; color: #BEBDBF; margin-right: 10px" />
        </template>
      </a-input>
    </a-form-item>
    <a-row :gutter="[24, 24]" style="margin-top: 40px">
      <!-- Left: categories -->
      <a-col :span="6">
        <div class="menu-card">
          <a-menu
            mode="inline"
            :selectedKeys="[activeCategory]"
            class="faq-menu"
          >
            <a-menu-item
              v-for="c in categories"
              :key="c.key"
              @click="activeCategory = c.key"
            >
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
                :key="item.id"
                :header="item.question"
                class="faq-item"
              >
                <p class="answer">{{ item.answer }}</p>
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
import { SearchOutlined, PlusOutlined } from '@ant-design/icons-vue'

const categories = [
  { key: 'domestic', label: 'Domestic Transportation' },
  { key: 'export', label: 'Export' },
  { key: 'import', label: 'Import' },
  { key: 'order', label: 'Order Support' },
  { key: 'status', label: 'Check Status' },
  { key: 'billing', label: 'Payment & Invoice' },
]

const faqs = [
  // Domestic
  { id: 1, category: 'domestic', question: '1. What logistics services do you provide?', answer: 'We provide door-to-door pickup, warehousing, packing, and last-mile delivery nationwide.' },
  { id: 2, category: 'domestic', question: '2. How long does domestic delivery take?', answer: 'Standard 2–4 working days; express 24–48 hours for major cities.' },
  { id: 3, category: 'domestic', question: '3. Do you offer cash on delivery (COD)?', answer: 'Yes, COD is available for eligible sellers with weekly remittance.' },
  { id: 4, category: 'domestic', question: '4. What items are restricted?', answer: 'Hazardous materials, flammables, perishables without cold chain, and items prohibited by law.' },
  { id: 5, category: 'domestic', question: '5. How do I track my shipment?', answer: 'Use the tracking code in your order page or our mobile app to see real-time status.' },
  { id: 6, category: 'domestic', question: '6. What if my parcel is damaged?', answer: 'Report within 24h with photos; our team will verify and compensate per policy.' },

  // Export
  { id: 7, category: 'export', question: '1. What export services are available?', answer: 'Air freight, sea freight (FCL/LCL), customs clearance, and insurance.' },
  { id: 8, category: 'export', question: '2. What documents are required for export?', answer: 'Commercial invoice, packing list, contract, and any licenses depending on HS code.' },
  { id: 9, category: 'export', question: '3. How are export rates calculated?', answer: 'By chargeable weight/volume, route, seasonality, and surcharges (FSC, SSC, etc.).' },

  // Import
  { id: 10, category: 'import', question: '1. Do you handle DDP import?', answer: 'Yes, we can provide DDP including duties & taxes for select origins.' },
  { id: 11, category: 'import', question: '2. How long does customs clearance take?', answer: 'Typically 1–2 days if documents are complete; inspections may extend the time.' },

  // Order Support
  { id: 12, category: 'order', question: '1. How to create a pickup?', answer: 'Schedule in the dashboard before 3pm; same-day pickup in inner cities.' },
  { id: 13, category: 'order', question: '2. Can I change the delivery address?', answer: 'Yes within 12h after handover; fees may apply depending on the zone.' },

  // Status
  { id: 14, category: 'status', question: '1. Why is my parcel delayed?', answer: 'Weather, high season, address issues, or security checks may cause delays.' },
  { id: 15, category: 'status', question: '2. What are the tracking statuses?', answer: 'Picked up → In transit → Out for delivery → Delivered/Failed → Returned.' },

  // Billing
  { id: 16, category: 'billing', question: '1. Payment methods?', answer: 'Bank transfer, e-wallet, and monthly invoice for contracted customers.' },
  { id: 17, category: 'billing', question: '2. How do I get an invoice?', answer: 'Invoices are issued monthly and downloadable in the Billing section.' },
]

const activeCategory = ref(categories[0].key)
const keyword = ref('')

const filteredFaqs = computed(() => {
  const kw = keyword.value.trim().toLowerCase()
  return faqs.filter(
    f =>
      f.category === activeCategory.value &&
      (kw === '' || f.question.toLowerCase().includes(kw) || f.answer.toLowerCase().includes(kw)),
  )
})

const columns = computed(() => {
  const cols = [[], []]        // 2 columns
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
  border-radius: 12px;
  padding: 12px 16px !important;
  font-weight: 600;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
}
.faq-item :deep(.ant-collapse-content) {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #f0f0f0;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
}
.answer {
  margin: 8px 0 0;
  color: #4b5563;
  line-height: 1.6;
}
</style>
