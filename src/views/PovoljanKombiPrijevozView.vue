<template>
  <ServiceLayout>
    <div class="content">
      <p>
        Nakon više od tri desetljeća iskustva u prijevozničkom sektoru, razvili smo jedinstveni
        pristup cjenama koji odražava kompleksnost svakog pojedinog prijevoza. Svaka ruta, svaka
        pošiljka i svaki klijent zahtijevaju individualni pristup - od jednostavnog prijevoza manjeg
        namještaja do složenih industrijskih transporta.
      </p>

      <p>
        Polazne cijene su javne i nalaze se u <RouterLink to="/cjenik">cjeniku</RouterLink>. Konačnu
        cijenu potvrđujemo prije termina, prema udaljenosti, količini stvari, katu i liftu te
        hitnosti.
      </p>

      <p>
        Transparentnost je temelj našeg poslovanja - svaki klijent dobiva jasnu ponudu s detaljnim
        obrazloženjem cijene prije početka suradnje. Naša filozofija je jednostavna: zadovoljan
        klijent naš je najbolji ambasador. Stoga ulažemo u kvalitetu koja nadilazi očekivanja - od
        pažljivog rukovanja vašom imovinom, preko pravovremene isporuke, do profesionalne
        komunikacije tijekom cijelog procesa.
      </p>

      <p>
        Možda ćete negdje drugdje pronaći niže cijene na papiru, ali naši klijenti dobro znaju da
        prava vrijednost leži u pouzdanosti, stručnosti i miru koji vam pružamo. Mnogi od njih
        postali su nam stalni partneri upravo zbog toga što prepoznaju da je ulaganje u kvalitetu
        dugoročno isplativo - jer kada je riječ o vašoj imovini, kompromisi jednostavno nisu opcija.
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
