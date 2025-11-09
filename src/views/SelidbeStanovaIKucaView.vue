<template>
  <ServiceLayout title="Selidbe stanova i kuća" :animate-title="true">
    <div class="content">
      <p>
        Svaka selidba doma predstavlja više od pukog premještanja stvari – to je prijelaz u novo poglavlje života, pun uspomene, emocija i osobnih vrijednosti. Zbog toga pristupamo svakoj selidbi s dubokim razumijevanjem i posebnom pažnjom koja nadilazi standardnu logističku uslugu.
      </p>

      <p>
        Naš tim stručnjaka nudi fleksibilne opcije koje se prilagođavaju vašim potrebama i preferencijama. Možete aktivno sudjelovati u procesu – sami pakirati i nositi svoje osobne predmete – ili nam prepustiti sve, od pažljivog pakiranja krhkih predmeta i vrijednih kolekcija do sistematskog organiziranja prostora. Bez obzira na vaš izbor, osiguravamo da svaka faza bude provedena s maksimalnom pažnjom prema vašoj imovini.
      </p>

      <p>
        Najbolje rezultate postižemo kada unaprijed planiramo selidbu, što nam omogućava optimalno raspoređivanje resursa i izbjegavanje nepotrebnog stresa. Međutim, život ponekad donosi neočekivane situacije – iznenadni raskidi ugovora o najmu, hitni životni prioriteti ili jednostavno nepredviđene okolnosti. U takvim trenucima, naša usluga postaje posebno vrijedna jer smo uvijek spremni pružiti brzu i pouzdanu podršku, čak i kada drugi odustanu.
      </p>

      <p>
        Bez obzira na okolnosti, možete računati na naš profesionalizam, empatiju i predanost da vaša selidba protekne što ugodnije. Jer kada se selite doma, ne selite samo stvari – selite svoj život, a mi smo tu da vam olakšamo taj put.
      </p>
    </div>

    <template #footer>
      <ServicesSection :show-title="false" custom-padding="2rem 2rem" centered />
    </template>
  </ServiceLayout>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import ServiceLayout from '@/components/ServiceLayout.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

useHead({
  title: 'Selidbe stanova i kuća - Kombi transport Zagreb',
  meta: [
    {
      name: 'description',
      content: 'Profesionalne selidbe stanova i kuća s kombijem. Potpuna usluga selidbe u Zagrebu.'
    },
    {
      property: 'og:title',
      content: 'Selidbe stanova i kuća - Kombi transport Zagreb'
    },
    {
      property: 'og:description',
      content: 'Profesionalne selidbe stanova i kuća s kombijem. Potpuna usluga selidbe u Zagrebu.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://kombi-transport.com/selidbe-stanova-i-kuca'
    }
  ]
})
</script>

<style scoped>
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
