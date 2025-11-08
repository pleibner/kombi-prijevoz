<script setup lang="ts">
import ServiceCard from './ServiceCard.vue';
import CardGrid from './CardGrid.vue';
</script>

<template>
  <section class="services fade-in-section" aria-labelledby="services-heading">
    <div class="container">
      <h2 id="services-heading">Naše usluge</h2>
      <CardGrid>
        <ServiceCard
          to="/kombi-prijevoz"
          icon="🚛"
          title="Prijevoz robe"
          description="Siguran i efikasan prijevoz svih vrsta robe diljem zemlje. Koristimo moderna vozila i profesionalnu opremu za siguran prijevoz vaših stvari."
        />
        <ServiceCard
          to="/kombi-selidbe"
          icon="🏠"
          title="Selidbe"
          description="Kompletne usluge selidbe stanova, kuća i ureda. Naš tim brine o svakom detalju kako bi vaša selidba protekla glatko i bez stresa."
        />
        <ServiceCard
          to="/kombi-dostava"
          icon="📦"
          title="Dostava"
          description="Brza i pouzdana dostava paketa, dokumenata i robe. Fleksibilni rasporedi dostave prilagođeni vašim potrebama."
        />
      </CardGrid>
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

@media (max-width: 768px) {
  .services {
    padding: 4rem 1rem;
  }

  .services h2 {
    font-size: 2rem;
  }
}
</style>
