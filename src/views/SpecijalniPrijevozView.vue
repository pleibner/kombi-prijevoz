<template>
  <ServiceLayout>
    <div class="content">
      <p>
        U našoj dugogodišnjoj praksi specijaliziranog prijevoza, susreli smo se s izazovima koji
        zahtijevaju kreativna i sigurna rješenja. Svaki predmet ima svoju priču, a mi smo majstori u
        pronalaženju načina da te priče sigurno stignu na odredište.
      </p>

      <p>
        Zamislite klavir koji se pažljivo izvlači kroz prozor višekatnice uz pomoć dizalice. Kada
        klavir, kauč ili ormar ne prolazi stubištem ili kroz vrata, podižemo ga i spuštamo dizalicom
        kroz prozor, kako bismo izbjegli oštećenja stubišta, zidova i samog predmeta.
      </p>

      <p>
        Naša predanost inovativnim pristupima vidljiva je u svakom projektu - koristimo najmoderniju
        opremu, surađujemo s vrhunskim stručnjacima iz različitih područja i razvijamo individualna
        rješenja prilagođena specifičnim potrebama. Bez obzira radi li se o predmetima izuzetne
        vrijednosti, gabarita ili osjetljivosti, naš tim pristupa svakom izazovu s kombinacijom
        stručnosti, kreativnosti i maksimalne sigurnosti.
      </p>

      <p>
        Ako smatrate da je vaš predmet "nemoguće prevesti", kontaktirajte nas. Naši klijenti su
        iznenađeni kako se čak i najkompleksniji prijevozi mogu realizirati bez kompromisa na
        sigurnost i integritet predmeta. Jer za nas, riječ "nemoguće" jednostavno ne postoji u
        rječniku specijaliziranog prijevoza.
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
