<script setup lang="ts">
import ServiceCard from './ServiceCard.vue';
</script>

<template>
  <section class="services fade-in-section" aria-labelledby="services-heading">
    <div class="container">
      <h2 id="services-heading">Naše usluge</h2>
      <div class="services-grid">
        <ServiceCard
          icon="🚛"
          title="Transport robe"
          description="Siguran i efikasan transport svih vrsta robe diljem zemlje. Koristimo moderno vozilo i profesionalnu opremu za siguran prijevoz vaših stvari."
          link="/kombi-prijevoz"
        />
        <ServiceCard
          icon="🏠"
          title="Selidbe"
          description="Kompletne usluge selidbe stanova, kuća i ureda. Naš tim brine o svakom detalju kako bi vaša selidba protekla glatko i bez stresa."
          link="/kombi-selidbe"
        />
        <ServiceCard
          icon="📦"
          title="Dostava"
          description="Brza i pouzdana dostava paketa, dokumenata i robe. Fleksibilni rasporedi dostave prilagođeni vašim potrebama."
          link="/kombi-dostava"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 6rem 2rem;
  background-color: var(--light-bg);
}

.services h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .services {
    padding: 4rem 1rem;
  }

  .services h2 {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
