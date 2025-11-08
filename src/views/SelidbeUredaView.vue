<template>
  <ServiceLayout title="Selidbe ureda" :animate-title="true">
    <div class="content">
      <p>
        Poslovanje se mijenja, a s njim i prostorni zahtjevi vaše tvrtke. Bilo da se vaša firma širi i traži veći prostor, ili se jednostavno selite na povoljniju lokaciju, selidba ureda zahtijeva precizan pristup koji minimalno remeti vaše svakodnevne operacije.
      </p>

      <p>
        Naš tim specijaliziran za poslovne selidbe osigurava da vaš prelazak na novu lokaciju bude što bezbolniji. Možemo organizirati da vaši zaposlenici rade od kuće nekoliko dana, a kada se vrate na novu adresu, dočekat će ih potpuno funkcionalan uredski prostor – sve na svojim mjestima, kako ste i zamislili.
      </p>

      <p>
        Nudimo kompletnu uslugu selidbe ureda koja uključuje stručno razmontiranje radnih stanica, pažljivo pakiranje i transport osjetljive IT opreme, te precizno montiranje i spajanje svega na novoj lokaciji. Naši tehničari brinu o svim kablovima, mrežnim konekcijama i elektroničkoj opremi, osiguravajući da se vaš tim vrati u potpuno funkcionalno radno okruženje.
      </p>

      <p>
        Bez obzira na veličinu vaše tvrtke ili kompleksnost selidbe, naš pristup je temeljen na temeljitom planiranju, profesionalizmu i pažnji prema detaljima. Jer kada je riječ o vašem poslu, svaka minuta prekida rada može biti presudna – a mi smo tu da je svedemo na minimum.
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
