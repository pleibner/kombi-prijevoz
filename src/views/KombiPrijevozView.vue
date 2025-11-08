<template>
  <ServiceLayout title="Kombi prijevoz" :animate-title="true">
    <div class="content">
      <p>
        Kada je u pitanju prijevoz robe, važno je povjeriti posao profesionalcima koji razumiju
        vrijednost vašeg tereta. Svaka pošiljka za nas je jedinstvena i zaslužuje pažnju koju
        bismo posvetili vlastitoj robi.
      </p>

      <p>
        S preko 30 godina iskustva u prijevozu robe, izgradili smo reputaciju pouzdanosti i
        profesionalnosti kojoj možete vjerovati. Naši vozači nisu samo stručnjaci za upravljanje
        vozilima - oni su majstori pažljivog rukovanja robom svih vrsta i veličina.
      </p>

      <p>
        Bez obzira radi li se o osjetljivoj elektronici, vrijednom namještaju ili industrijskoj
        opremi, naš pristup je uvijek isti: maksimalna briga i pažnja. Koristimo specijalizirana
        vozila i opremu koja osigurava da vaša roba stigne na odredište u istom stanju u kojem
        ste je predali.
      </p>

      <p>
        Naša predanost kvaliteti ogleda se u svakom detalju - od pažljivog utovara i učvršćivanja
        tereta, preko optimalnog planiranja ruta, do pravovremene isporuke. Za nas, svaki
        prijevoz je prilika da potvrdimo zašto smo lideri u svojoj branši.
      </p>
    </div>

    <template #footer>
      <CardGrid centered>
        <ServiceCard
          to="/podrucje-djelovanja"
          icon="🗺️"
          title="Područje djelovanja"
          description="Najjači smo u Zagrebu, ali vozimo po cijeloj Hrvatskoj. Naša mreža pokriva sve županije s brzom i pouzdanom dostavom."
        />
        <ServiceCard
          to="/cijene"
          icon="💰"
          title="Pristupačne cijene"
          description="Najjeftiniji smo jer optimiziramo rute i radimo učinkovito. Dajte da vam objasnimo zašto naša konkurentnost ne ugrožava kvalitetu."
        />
        <ServiceCard
          to="/specijalni-prijevoz"
          icon="🎹"
          title="Specijalni prijevoz"
          description="Dostava klavira kroz prozor? Može! Specijalizirani smo za izazovne prijevoze gdje drugi odustaju."
        />
      </CardGrid>
    </template>
  </ServiceLayout>
</template>

<script setup lang="ts">
import ServiceLayout from '@/components/ServiceLayout.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import CardGrid from '@/components/CardGrid.vue'
</script>

<style scoped>
.content {
  /* Koristi punu širinu roditeljskog kontejnera (1000px) */
}

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
