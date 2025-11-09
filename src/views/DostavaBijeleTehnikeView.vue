<template>
  <ServiceLayout title="Dostava bijele tehnike" :animate-title="true">
    <div class="content">
      <p>
        Kupnja bijele tehnike trebala bi biti jednostavna i bez stresa. Zamislite da ste kupili veliki televizor za uživanje u sportskim događajima ili važnim utakmicama, ali vas trgovina obavještava da ćete morati čekati nekoliko tjedana na dostavu.
      </p>

      <p>
        Ili ste se suočili s neočekivanim kvarom – frižider je prestao raditi, perilica rublja se pokvarila, a popravak košta više od nove jedinice. Odlučili ste se za ekspresnu online kupnju, ali sada se suočavate s dugim čekanjem na dostavu, što može biti posebno kritično kada imate hranu koja se kvari u zamrzivaču.
      </p>

      <p>
        Mi razumijemo važnost brzine u takvim situacijama. Nudimo ekspresnu dostavu bijele tehnike iz svih vodećih trgovina – Pevexa, Big Banga, Elipsa i drugih. Dostavljamo frižidere, perilice rublja, štednjake, televizore i svu drugu bijelu tehniku isti dan kada kupite, bez dugog čekanja.
      </p>

      <p>
        Naša usluga uključuje kompletnu dostavu i postavljanje uređaja. Naši tehničari dolaze s odgovarajućom opremom, osiguravajući sigurno transport i profesionalno postavljanje. Kontaktirajte nas odmah nakon kupnje i mi ćemo se pobrinuti da vaša nova bijela tehnika bude kod vas još danas – spremna za korištenje.
      </p>
    </div>

    <template #footer>
      <ServicesSection :show-title="false" custom-padding="2rem 2rem" centered />
    </template>
  </ServiceLayout>
</template>

<script setup lang="ts">
import ServiceLayout from '@/components/ServiceLayout.vue'
import ServicesSection from '@/components/ServicesSection.vue'
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
