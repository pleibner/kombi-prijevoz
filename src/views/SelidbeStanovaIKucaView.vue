<template>
  <ServiceLayout>
    <div class="content">
      <p>
        Svaka selidba doma predstavlja više od pukog premještanja stvari – to je prijelaz u novo
        poglavlje života, pun uspomene, emocija i osobnih vrijednosti. Zbog toga pristupamo svakoj
        selidbi s dubokim razumijevanjem i posebnom pažnjom koja nadilazi standardnu logističku
        uslugu.
      </p>

      <p>
        Naš tim stručnjaka nudi fleksibilne opcije koje se prilagođavaju vašim potrebama i
        preferencijama. Možete aktivno sudjelovati u procesu – sami pakirati i nositi svoje osobne
        predmete – ili nam prepustiti sve, od pažljivog pakiranja krhkih predmeta i vrijednih
        kolekcija do sistematskog organiziranja prostora. Bez obzira na vaš izbor, osiguravamo da
        svaka faza bude provedena s maksimalnom pažnjom prema vašoj imovini.
      </p>

      <p>
        Najbolje rezultate postižemo kada unaprijed planiramo selidbu, što nam omogućava optimalno
        raspoređivanje resursa i izbjegavanje nepotrebnog stresa. Međutim, život ponekad donosi
        neočekivane situacije – iznenadni raskidi ugovora o najmu, hitni životni prioriteti ili
        jednostavno nepredviđene okolnosti. U takvim trenucima, naša usluga postaje posebno vrijedna
        jer smo uvijek spremni pružiti brzu i pouzdanu podršku, čak i kada drugi odustanu.
      </p>

      <p>
        Bez obzira na okolnosti, možete računati na naš profesionalizam, empatiju i predanost da
        vaša selidba protekne što ugodnije. Jer kada se selite doma, ne selite samo stvari – selite
        svoj život, a mi smo tu da vam olakšamo taj put.
      </p>
    </div>

    <template #footer>
      <ServicesSection compact />
    </template>
  </ServiceLayout>
</template>

<script setup lang="ts">
import ServiceLayout from '@/components/ServiceLayout.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
