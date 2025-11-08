<template>
  <ServiceLayout title="Kombi prijevoz Zagreb" :animate-title="true">
    <div class="content">
      <p>
        Naš tim vozača poznaje Zagreb u dušu – od užeg centra do svih gradskih četvrti, industrijskih zona i prigradskih naselja. Godine iskustva u gradskom prijevozu omogućuju nam izbjegavanje gužvi, zatvorenih ulica i privremenih prometnih izmjena koje bi mogle usporiti vaš prijevoz.
      </p>

      <p>
        Bez obzira radi li se o prijevozu namještaja, uredske opreme, trgovinske robe ili industrijskih materijala, naš kombi prijevoz u Zagrebu pokriva sve vaše potrebe. Koristimo moderna kombi vozila opremljena svom potrebnom opremom za siguran transport – od užadi i pokrivača do specijalnih nosača za vrijedne predmete.
      </p>

      <p>
        Posebno smo ponosni na našu fleksibilnost – ako vam termin nije kritičan, možemo predložiti optimalno vrijeme prijevoza kada su ulice manje prometne, što rezultira bržim obavljanjem posla i nižim troškovima. Naša predanost kvaliteti vidi se u svakom detalju – od profesionalnog pristupa i pažljivog rukovanja vašom robom, do pravovremene isporuke na željenu adresu.
      </p>

      <p>
        U Zagrebu smo dostupni svaki dan u tjednu, uključujući vikende i praznike. Za hitne prijevoze stojimo vam na raspolaganju 24/7. Kontaktirajte nas za besplatnu procjenu vaših potreba i dogovorite termin koji vam najviše odgovara.
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

@media (max-width: 768px) {
  .content p {
    font-size: 1rem;
    line-height: 1.6;
  }
}
</style>
