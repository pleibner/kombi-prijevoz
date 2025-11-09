<template>
  <ServiceLayout title="Dostava namještaja" :animate-title="true">
    <div class="content">
      <p>
        Kupnja novog namještaja trebala bi biti uzbudljiva, a ne stresna. Zamislite da ste kupili novi kauč na kojem ćete uživati u večernjim satima gledajući svoje omiljene filmove, ali vas čeka razočaranje kada vam trgovina kaže da će dostava potrajati tri tjedna ili više.
      </p>

      <p>
        Mi razumijemo vašu frustraciju i zato nudimo ekspresnu dostavu namještaja iz svih vodećih trgovina – od IKEA-e i Lesnine, preko Harvey Normana do svih specijaliziranih prodavaonica. Bez obzira kupujete li manje komade poput stolica i stolova, ili veći namještaj poput kreveta, ormara i garnitura, mi ćemo vam ga dostaviti isti dan kada kupite.
      </p>

      <p>
        Naša usluga uključuje kompletnu logistiku: preuzimanje iz trgovine, sigurni transport do vaše adrese i pažljivo unošenje u vaš dom. Naši stručnjaci dolaze s odgovarajućom opremom za nošenje teškog namještaja, izbjegavajući oštećenja vašeg interijera i osiguravajući da sve stigne na svoje mjesto bez problema.
      </p>

      <p>
        Ne dopustite da vam dugo čekanje na dostavu pokvari radost kupovine novog namještaja. Kontaktirajte nas odmah nakon kupnje i mi ćemo se pobrinuti da vaš novi komad namještaja bude kod vas još danas – spreman za uživanje u vašem domu.
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
