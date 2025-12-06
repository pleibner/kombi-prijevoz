<script setup lang="ts">
import ServiceCard from './ServiceCard.vue';
import CardGrid from './CardGrid.vue';

interface Props {
  showTitle?: boolean;
  customPadding?: string;
  centered?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showTitle: true,
  customPadding: undefined,
  centered: false,
});
</script>

<template>
  <section class="services fade-in-section" :aria-labelledby="props.showTitle ? 'services-heading' : undefined" :style="{ padding: props.customPadding || undefined }">
    <div class="container">
      <h2 v-if="props.showTitle" id="services-heading">Naše usluge</h2>
      <CardGrid :centered="props.centered" :scrollable="true">
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
        <ServiceCard
          to="/odvoz-otpada"
          icon="♻️"
          title="Odvoz otpada"
          description="Profesionalan odvoz glomaznog otpada, starog namještaja i šute. Brzo rješenje za sve vaše potrebe zbrinjavanja otpada."
        />
        <slot></slot>
      </CardGrid>
    </div>
  </section>
</template>

<style scoped>
.services {
  background-color: var(--light-bg);
}

.services:not([style]) {
  padding: 6rem 2rem;
}

.services h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
}

@media (max-width: 768px) {
  .services:not([style]) {
    padding: 4rem 1rem;
  }

  .services h2 {
    font-size: 2rem;
  }
}
</style>
