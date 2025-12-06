<template>
  <ServiceLayout title="Odvoz otpada" :animate-title="true">
    <div class="content">
      <p>
        Bilo da renovirate kuću, mijenjate namještaj ili se jednostavno želite riješiti starog otpada – obratite se nama i tu prestaju vaše brige. Profesionalno i brzo rješavamo sve vaše potrebe za odvozom otpada.
      </p>

      <p>
        Naša ekipa razumije koliko može biti naporno organizirati odvoz glomaznog otpada, starog namještaja ili građevinskog materijala. Zato smo tu – da vam olakšamo život i preuzmu sve brige oko odvoza i zbrinjavanja otpada.
      </p>

      <p>
        S godinama iskustva i profesionalnom opremom, osiguravamo brz i siguran odvoz svih vrsta otpada. Bez obzira radi li se o velikom komadu namještaja, hrpi građevinskog materijala ili bilo čemu drugom – imamo rješenje za vas.
      </p>

      <p>
        Ponosimo se odgovornim pristupom zbrinjavanju otpada. Sve što odvezemo, zbrinjavamo u skladu s propisima i ekološkim standardima. Vaša briga postaje naša odgovornost, a vi možete biti sigurni da je sve riješeno kako treba.
      </p>
    </div>

    <template #footer>
      <CardGrid centered>
        <ServiceCard
          to="/odvoz-glomaznog-otpada"
          icon="📦"
          title="Odvoz glomaznog otpada"
          description="Stari kauč, ormar ili perilica? Odvozimo sve vrste glomaznog otpada brzo i efikasno. Bez čekanja na komunalnu službu – nazovite nas i riješite problem odmah."
        />
        <ServiceCard
          to="/odvoz-starog-namjestaja"
          icon="🪑"
          title="Odvoz starog namještaja"
          description="Mijenjate namještaj i ne znate što sa starim? Mi ćemo ga odvesti i zbrinuti. Brzo, profesionalno i bez stresa – vi uživajte u novom, mi ćemo se pobrinuti za staro."
        />
        <ServiceCard
          to="/odvoz-sute"
          icon="🏗️"
          title="Odvoz šute"
          description="Renovacija ili gradnja stvara hrpe građevinskog otpada? Odvozimo šutu, beton, cigle i sve ostalo. Čist prostor za nastavak radova – to je naša briga."
        />
      </CardGrid>
    </template>
  </ServiceLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import ServiceLayout from '@/components/ServiceLayout.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import CardGrid from '@/components/CardGrid.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

useHead({
  title: 'Odvoz otpada - Profesionalne usluge odvoza Zagreb',
  meta: [
    {
      name: 'description',
      content: 'Profesionalni odvoz otpada u Zagrebu. Brzo i pouzdano odvozimo glomazni otpad, stari namještaj i šutu.'
    },
    {
      property: 'og:title',
      content: 'Odvoz otpada - Profesionalne usluge odvoza Zagreb'
    },
    {
      property: 'og:description',
      content: 'Profesionalni odvoz otpada u Zagrebu. Brzo i pouzdano odvozimo glomazni otpad, stari namještaj i šutu.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://kombi-transport.com/odvoz-otpada'
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
