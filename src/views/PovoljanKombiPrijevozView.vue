<template>
  <ServiceLayout title="Povoljan kombi prijevoz" :animate-title="true">
    <div class="content">
      <p>
        Nakon više od tri desetljeća iskustva u prijevozničkom sektoru, razvili smo jedinstveni pristup cjenama koji odražava kompleksnost svakog pojedinog prijevoza. Svaka ruta, svaka pošiljka i svaki klijent zahtijevaju individualni pristup - od jednostavnog prijevoza manjeg namještaja do složenih industrijskih transporta.
      </p>

      <p>
        Zbog toga smo odbacili rigidne cjenike koji ne uzimaju u obzir specifičnosti vašeg tereta, udaljenost, vrijeme izvršenja i posebne zahtjeve. Naš pristup je transparentan i prilagodljiv: temelji se na stvarnim troškovima i optimizaciji resursa, što nam omogućava da ponudimo najpovoljnije cijene bez kompromisa na kvaliteti usluge.
      </p>

      <p>
        Transparentnost je temelj našeg poslovanja - svaki klijent dobiva jasnu ponudu s detaljnim obrazloženjem cijene prije početka suradnje. Naša filozofija je jednostavna: zadovoljan klijent naš je najbolji ambasador. Stoga ulažemo u kvalitetu koja nadilazi očekivanja - od pažljivog rukovanja vašom imovinom, preko pravovremene isporuke, do profesionalne komunikacije tijekom cijelog procesa.
      </p>

      <p>
        Možda ćete negdje drugdje pronaći niže cijene na papiru, ali naši klijenti dobro znaju da prava vrijednost leži u pouzdanosti, stručnosti i miru koji vam pružamo. Mnogi od njih postali su nam stalni partneri upravo zbog toga što prepoznaju da je ulaganje u kvalitetu dugoročno isplativo - jer kada je riječ o vašoj imovini, kompromisi jednostavno nisu opcija.
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
  title: 'Povoljan kombi prijevoz - Jeftini transport Zagreb',
  meta: [
    {
      name: 'description',
      content: 'Najpovoljniji kombi prijevoz u Zagrebu. Kvalitetne usluge transporta po najnižim cijenama.'
    },
    {
      property: 'og:title',
      content: 'Povoljan kombi prijevoz - Jeftini transport Zagreb'
    },
    {
      property: 'og:description',
      content: 'Najpovoljniji kombi prijevoz u Zagrebu. Kvalitetne usluge transporta po najnižim cijenama.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://kombi-transport.com/povoljan-kombi-prijevoz'
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
