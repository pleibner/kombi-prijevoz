<template>
  <ServiceLayout>
    <div class="content">
      <p>
        Kada je riječ o prijevozu robe, važno je posao povjeriti profesionalcima koji razumiju
        vrijednost vaših pošiljki. Svaka pošiljka za nas je jedinstvena i dobiva pažnju koju bismo
        posvetili vlastitoj imovini.
      </p>

      <p>
        S preko 30 godina iskustva izgradili smo reputaciju pouzdanosti i stručnosti kojoj možete
        vjerovati. Naša ekipa profesionalaca brine o svemu – oni su majstori pažljivog rukovanja
        robom svih vrsta i veličina.
      </p>

      <p>
        Bez obzira radi li se o osjetljivoj elektronici, vrijednom namještaju ili industrijskoj
        opremi, naš pristup je uvijek isti: maksimalna briga i pažnja. Koristimo specijalizirana
        vozila i opremu koja osigurava da vaša roba stigne na odredište u istom stanju u kojem je
        preuzeta.
      </p>

      <p>
        Naša predanost kvaliteti vidi se u svakom detalju – od pažljivog učvršćivanja, preko
        optimalnog planiranja ruta, do pravovremene isporuke. Svaki prijevoz za nas je prilika da
        pokažemo zašto smo lideri u području profesionalnog prijevoza.
      </p>
    </div>

    <template #footer>
      <CardGrid centered>
        <ServiceCard
          to="/kombi-prijevoz-zagreb"
          icon="map"
          title="Gdje god treba"
          description="Po Zagrebu prevozimo svaki dan, a po potrebi vozimo i po cijeloj Hrvatskoj – čak i na otoke. Brzi, pouzdani i uvijek na vrijeme."
        />
        <ServiceCard
          to="/povoljan-kombi-prijevoz"
          icon="euro"
          title="Pristupačne cijene"
          description="Zahvaljujući pažljivom planiranju i optimizaciji ruta, nudimo konkurentne cijene bez gubitka na kvaliteti usluge. Kod nas su pouzdanost i pristupačnost na istoj adresi."
        />
        <ServiceCard
          to="/specijalni-prijevoz"
          icon="weight"
          title="Specijalni prijevoz"
          description="Klavir kroz prozor? Može! Specijalizirani smo za zahtjevne prijevoze – ondje gdje drugi odustaju, mi pronalazimo rješenje."
        />
      </CardGrid>
    </template>
  </ServiceLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import ServiceLayout from '@/components/ServiceLayout.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import CardGrid from '@/components/CardGrid.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
