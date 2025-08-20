<template>
  <section class="why-fargo">
    <h1 class="why-fargo-title">Why Fargo Logistics?</h1>
    <div class="cards">
      <a-card class="card" v-for="card in cards" :key="card.id">
        <h2 class="title">{{ card.title }}</h2>
        <p class="content">
          {{ card.content }}
        </p>
      </a-card>
    </div>
  </section>
</template>

<script setup>
defineProps({
  cards: Array,
})
</script>

<style scoped>
.why-fargo-title {
  font-size: 35px;
  font-weight: 600;
  color: #052e5e;
  margin-bottom: 50px;
}

.cards {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: 30px;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  height: 350px;
  background-color: #CEE5FF;
  /* padding: 20px; */
}

.card:hover {
  cursor: pointer;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 30px;
}

.content {
  font-size: 16px;
  font-weight: 400;
  color: #000000;
}

@media (max-width: 992px) {
  .cards {
    flex-wrap: wrap;
  }
  .card.ant-card {
    flex: 1 1 calc(50% - 15px);
  }
}

@media (max-width: 768px) {
  .card.ant-card {
    flex: 1 1 100%;
  }
  .why-fargo {
    padding: 40px 0;
  }
  .why-fargo-title {
    margin-bottom: 20px;
  }
}

/* Trợ năng: giảm motion nếu người dùng không muốn animation */
@media (prefers-reduced-motion: reduce) {
  .card.ant-card {
    transition: none;
  }
  .card.ant-card:hover {
    transform: none;
  }
}
</style>
