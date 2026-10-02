<template>
  <ServiceLayout title="Dostava bijele tehnike">
    <div class="content">
      <p>
        Kupnja bijele tehnike trebala bi biti jednostavna i bez stresa. Zamislite da ste kupili
        veliki televizor za uživanje u sportskim događajima ili važnim utakmicama, ali vas trgovina
        obavještava da ćete morati čekati nekoliko tjedana na dostavu.
      </p>

      <p>
        Ili ste se suočili s neočekivanim kvarom – frižider je prestao raditi, perilica rublja se
        pokvarila, a popravak košta više od nove jedinice. Odlučili ste se za ekspresnu online
        kupnju, ali sada se suočavate s dugim čekanjem na dostavu, što može biti posebno kritično
        kada imate hranu koja se kvari u zamrzivaču.
      </p>

      <p>
        Mi razumijemo važnost brzine u takvim situacijama. Nudimo ekspresnu dostavu bijele tehnike
        iz svih vodećih trgovina – Pevexa, Big Banga, Elipsa i drugih. Dostavljamo frižidere,
        perilice rublja, štednjake, televizore i svu drugu bijelu tehniku isti dan kada kupite, bez
        dugog čekanja.
      </p>

      <p>
        Naša usluga uključuje kompletnu dostavu i postavljanje uređaja. Naši tehničari dolaze s
        odgovarajućom opremom, osiguravajući sigurno transport i profesionalno postavljanje.
        Kontaktirajte nas odmah nakon kupnje i mi ćemo se pobrinuti da vaša nova bijela tehnika bude
        kod vas još danas – spremna za korištenje.
      </p>
    </div>

    <template #footer>
      <ServicesSection compact />
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
  title: 'Dostava bijele tehnike - Transport uređaja',
  meta: [
    {
      name: 'description',
      content:
        'Profesionalna dostava bijele tehnike u Zagrebu. Siguran transport kućanskih aparata.',
    },
    {
      property: 'og:title',
      content: 'Dostava bijele tehnike - Transport uređaja',
    },
    {
      property: 'og:description',
      content:
        'Profesionalna dostava bijele tehnike u Zagrebu. Siguran transport kućanskih aparata.',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://kombi-transport.com/dostava-bijele-tehnike',
    },
  ],
})
</script>
