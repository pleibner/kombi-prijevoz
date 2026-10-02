<template>
  <ServiceLayout>
    <div class="content">
      <p>
        Kupili ste novi namještaj i ne znate što sa starim? Renovirate prostor i trebate se riješiti
        dotrajanih komada? Mi smo tu da vam pomognemo – brzo, jednostavno i bez stresa.
      </p>

      <p>
        Stari namještaj često predstavlja problem – prevelik je za obično smeće, a prenošenje niz
        stepenice i organiziranje odvoza može biti naporno i rizično. Prepustite to nama i
        izbjegnite nepotrebne napore i moguće ozljede.
      </p>

      <p>
        Naša ekipa dolazi do vas s potrebnom opremom i vozilom. Sigurno iznosimo namještaj iz stana,
        kuće ili ureda – bez obzira na kat ili uske prolaze. Sve radimo pažljivo kako ne bismo
        oštetili vaš prostor ili okolinu.
      </p>

      <p>
        Nakon odvoza, stari namještaj zbrinjavamo na odgovoran način: sve što odvezemo predajemo u
        reciklažno dvorište. Vi dobivate čist prostor, a mi brinemo o ostatku.
      </p>
    </div>

    <template #footer>
      <ServicesSection compact />
    </template>
  </ServiceLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import ServiceLayout from '@/components/ServiceLayout.vue'
import ServicesSection from '@/components/ServicesSection.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
