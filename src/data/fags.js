export const faqs = [
  // Domestic
  {
    id: 1,
    category: 'domestic',
    qa: [
      {
        id: 1,
        question: 'What logistics services do you provide?',
        answer: 'We provide door-to-door pickup, warehousing, packing, and last-mile delivery nationwide.',
      },
      {
        id: 2,
        question: 'How long does domestic delivery take?',
        answer: 'Standard 2–4 working days; express 24–48 hours for major cities.',
      },

      {
        id: 3,
        question: 'Do you offer cash on delivery (COD)?',
        answer: 'Yes, COD is available for eligible sellers with weekly remittance.',
      },

      {
        id: 4,
        question: 'What items are restricted?',
        answer: 'Hazardous materials, flammables, perishables without cold chain, and items prohibited by law.',
      },

      {
        id: 5,
        question: 'How do I track my shipment?',
        answer: 'Use the tracking code in your order page or our mobile app to see real-time status.',
      },

      {
        id: 6,
        question: 'What if my parcel is damaged?',
        answer: 'Report within 24h with photos; our team will verify and compensate per policy.',
      },

    ]
  },

  // Export
  {
    id: 2,
    category: 'export',
    qa: [
      {
        id: 1,
        question: 'What export services are available?',
        answer: 'Air freight, sea freight (FCL/LCL), customs clearance, and insurance.',
      },
      {
        id: 2,
        question: 'What documents are required for export?',
        answer: 'Commercial invoice, packing list, contract, and any licenses depending on HS code.',
      },
      {
        id: 3,
        question: 'How are export rates calculated?',
        answer: 'By chargeable weight/volume, route, seasonality, and surcharges (FSC, SSC, etc.).',
      },
    ]
  },

  // Import
  {
    id: 3,
    category: 'import',
    qa: [
      { id: 1, question: 'Do you handle DDP import?', answer: 'Yes, we can provide DDP including duties & taxes for select origins.' },
      { id: 2, question: 'How long does customs clearance take?', answer: 'Typically 1–2 days if documents are complete; inspections may extend the time.' },
    ]
  },

  // Order Support
  {
    id: 4,
    category: 'order',
    qa: [
      { id: 1, question: 'How to create a pickup?', answer: 'Schedule in the dashboard before 3pm; same-day pickup in inner cities.' },
      { id: 2, question: 'Can I change the delivery address?', answer: 'Yes within 12h after handover; fees may apply depending on the zone.' },
    ]
  },

  // Status
  {
    id: 5,
    category: 'status',
    qa: [
      { id: 1, question: 'Why is my parcel delayed?', answer: 'Weather, high season, address issues, or security checks may cause delays.' },
      { id: 2, question: 'What are the tracking statuses?', answer: 'Picked up → In transit → Out for delivery → Delivered/Failed → Returned.' },
    ]
  },

  // Billing
  {
    id: 6,
    category: 'billing',
    qa: [
      { id: 1, question: 'Payment methods?', answer: 'Bank transfer, e-wallet, and monthly invoice for contracted customers.' },
      { id: 2, question: 'How do I get an invoice?', answer: 'Invoices are issued monthly and downloadable in the Billing section.' },
    ]
  },
]