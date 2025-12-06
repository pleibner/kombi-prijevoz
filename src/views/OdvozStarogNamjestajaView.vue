<template>
  <ServiceLayout title="Odvoz starog namještaja" :animate-title="true">
    <div class="content">
      <p>
        Kupili ste novi namještaj i ne znate što sa starim? Renovirate prostor i trebate se riješiti dotrajanih komada? Mi smo tu da vam pomognemo – brzo, jednostavno i bez stresa.
      </p>

      <p>
        Stari namještaj često predstavlja problem – prevelik je za obično smeće, a prenošenje niz stepenice i organiziranje odvoza može biti naporno i rizično. Prepustite to nama i izbjegnite nepotrebne napore i moguće ozljede.
      </p>

      <p>
        Naša ekipa dolazi do vas s potrebnom opremom i vozilom. Sigurno iznosimo namještaj iz stana, kuće ili ureda – bez obzira na kat ili uske prolaze. Sve radimo pažljivo kako ne bismo oštetili vaš prostor ili okolinu.
      </p>

      <p>
        Nakon odvoza, stari namještaj zbrinjavamo na odgovoran način. Dio koji se može reciklirati ili donirati – prosljeđujemo dalje. Ostatak odvozimo na ovlaštena odlagališta. Vi dobivate čist prostor, a mi brinemo o ostatku.
      </p>
    </div>

    <template #footer>
      <ServicesSection :show-title="false" custom-padding="2rem 2rem" centered />
    </template>
  </ServiceLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import ServiceLayout from '@/components/ServiceLayout.vue'
import ServicesSection from '@/components/ServicesSection.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

useHead({
  title: 'Odvoz starog namještaja - Profesionalna usluga Zagreb',
  meta: [
    {
      name: 'description',
      content: 'Odvoz starog namještaja u Zagrebu. Brzo i sigurno odvozimo stari namještaj iz stana, kuće ili ureda.'
    },
    {
      property: 'og:title',
      content: 'Odvoz starog namještaja - Profesionalna usluga Zagreb'
    },
    {
      property: 'og:description',
      content: 'Odvoz starog namještaja u Zagrebu. Brzo i sigurno odvozimo stari namještaj iz stana, kuće ili ureda.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://kombi-transport.com/odvoz-starog-namjestaja'
    }
  ]
})
</script>

<style scoped>
.content {
  max-width: 900px;
  margin: 0 auto;
}

.content p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 1.5rem;
}

.content p:first-child {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

@media (max-width: 768px) {
  .content p {
    font-size: 1rem;
    line-height: 1.6;
  }
}
</style>
