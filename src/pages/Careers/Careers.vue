<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <BgHeader title="About" subtitle="Careers" :imageSrc="bgCareers" :description="bgDescription" />
  </section>
  <section v-for="card in cardList" :key="card.id" class="card-container">
    <Card
      :title="card.title"
      :description="card.description"
      :imageSrc="card.imageSrc"
      :height="card.height"
      :reverse="card.reverse"
    />
  </section>
  <section class="why-fargo-container">
    <WhyFargo :cards="cards" />
  </section>
  <section class="jobs-container">
    <Jobs />
  </section>
</template>

<script setup>
import BgHeader from '@/components/BgHeader.vue'
import Card from '@/components/Card.vue'
import bgCareers from '@/assets/images/bg_careers.png'
import Checker from '@/assets/images/checker.png'
import WhyFargo from '@/components/WhyFargo.vue'
import Jobs from '@/components/Jobs.vue'

const bgDescription = `"Drive the world forward — join the future of logistics"`
const cardList = [
  {
    id: 1,
    title: 'Job Opportunities',
    description: [
      `At Fargo Logistics, we provide a wide range of career opportunities across logistics, operations, customer service, and management. Our goal is to attract individuals who are passionate about growth and committed to excellence.`,
      `We invest in our people through structured training programs, mentoring, and hands-on projects, helping every employee build skills and unlock their full potential.`,
      `Becoming part of Fargo Logistics means joining a global team that values dedication, innovation, and long-term career development.`,
    ],
    imageSrc: Checker,
    height: '388px',
    reverse: false,
  },
  {
    id: 2,
    title: 'Working Environment',
    description: [
      `We believe a great working environment drives both employee satisfaction and company success. That’s why we create spaces that encourage collaboration, communication, and shared ideas.`,
      `From modern offices to professional work practices, we focus on building a workplace where teamwork and innovation thrive.`,
      `At Fargo Logistics, employees are empowered to balance work and life, while enjoying a supportive atmosphere that motivates them to achieve their goals.`,
    ],
    imageSrc: Checker,
    height: '388px',
    reverse: true,
  },
  {
    id: 3,
    title: 'Company Culture',
    description: [
      `Our company culture is built on integrity, respect, and responsibility. We see logistics as more than transportation – it’s about building connections and trust worldwide.`,
      `Diversity and inclusivity are central to how we work. Every team member is encouraged to share ideas and contribute to collective success.`,
      `We are also committed to sustainable practices and social responsibility, ensuring that Fargo Logistics makes a lasting, positive impact on both customers and communities.`,
    ],
    imageSrc: Checker,
    height: '388px',
    reverse: false,
  },
]
const cards = [
  {
    id: 1,
    title: 'Career Growth Opportunities',
    content:
      'We provide clear career paths, training programs, and mentorship to help you develop skills and grow into leadership roles within the logistics industry.',
  },
  {
    id: 2,
    title: 'Dynamic and Supportive Environment',
    content:
      'Our workplace fosters collaboration, innovation, and respect. You’ll be part of a team where your ideas are valued, and your efforts truly make an impact.',
  },
  {
    id: 3,
    title: 'Global Exposure and Stability',
    content:
      'As a trusted logistics partner worldwide, Fargo Logistics offers the chance to work on international projects, ensuring both professional growth and long-term job security',
  },
]
</script>

<style scoped>
.card-container {
  width: 1200px;
  height: 388px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;
}

.why-fargo-container {
  width: 1200px;
  height: auto;
  margin: 0 auto 50px;
}
.jobs-container {
  width: 100%;
  height: auto;
  margin: 0 auto 50px;
  background-color: #cee5ff;
}
</style>
