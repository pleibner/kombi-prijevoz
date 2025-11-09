<template>
  <ServiceLayout title="Specijalni prijevoz" :animate-title="true">
    <div class="content">
      <p>
        U našoj dugogodišnjoj praksi specijaliziranog prijevoza, susreli smo se s izazovima koji zahtijevaju kreativna i sigurna rješenja. Svaki predmet ima svoju priču, a mi smo majstori u pronalaženju načina da te priče sigurno stignu na odredište.
      </p>

      <p>
        Zamislite koncertni klavir koji se pažljivo izvlači kroz prozor višekatnice uz pomoć specijalizirane dizalice, ili vrijedne umjetnine neprocjenjive vrijednosti koje zahtijevaju klimatski kontrolirane uvjete transporta. Naši stručnjaci su uspješno izveli prijevoz sefova težine preko tone, glomaznih industrijskih strojeva i osjetljivih medicinskih aparata.
      </p>

      <p>
        Naša predanost inovativnim pristupima vidljiva je u svakom projektu - koristimo najmoderniju opremu, surađujemo s vrhunskim stručnjacima iz različitih područja i razvijamo individualna rješenja prilagođena specifičnim potrebama. Bez obzira radi li se o predmetima izuzetne vrijednosti, gabarita ili osjetljivosti, naš tim pristupa svakom izazovu s kombinacijom stručnosti, kreativnosti i maksimalne sigurnosti.
      </p>

      <p>
        Ako smatrate da je vaš predmet "nemoguće prevesti", kontaktirajte nas. Naši klijenti su iznenađeni kako se čak i najkompleksniji prijevozi mogu realizirati bez kompromisa na sigurnost i integritet predmeta. Jer za nas, riječ "nemoguće" jednostavno ne postoji u rječniku specijaliziranog prijevoza.
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
