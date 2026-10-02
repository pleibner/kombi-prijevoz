<template>
  <ServiceLayout title="Kombi selidbe">
    <div class="content">
      <p>
        Selidba je važna prekretnica u životu – bilo da se radi o obiteljskoj selidbi u novi dom ili
        preseljenju ureda u moderne prostore. To je trenutak pun uzbuđenja, ali i potencijalnih
        izazova koji lako mogu pretvoriti radost u stres.
      </p>

      <p>
        Kako biste izbjegli neugodne situacije i osigurali da sve teče glatko, prepustite posao
        iskusnim profesionalcima. Naša ekipa razumije koliko selidba može biti zahtjevna i brine se
        o svim detaljima umjesto vas.
      </p>

      <p>
        Bolje je platiti nekome da nosi težak kauč nego kasnije kiropraktičara zbog bolnih leđa. Naš
        pristup je jednostavan i siguran, koristimo provjerenu opremu, stručno planiranje i brigu
        koja štedi i vaše zdravlje i vašu imovinu.
      </p>

      <p>
        Svaka selidba je posebna, a naš tim posjeduje iskustvo i kreativna rješenja za sigurno
        premještanje teških, zahtjevnih i vrijednih predmeta – čak i tamo gdje je prostor ograničen.
        Obratite nam se s povjerenjem.
      </p>
    </div>

    <template #footer>
      <CardGrid centered>
        <ServiceCard
          to="/selidbe-stanova-i-kuca"
          icon="home"
          title="Selidba doma"
          description="Selidba doma poseban je trenutak za vašu obitelj. Prepustite je stručnjacima i uživajte u novom početku, bez stresa."
        />
        <ServiceCard
          to="/selidbe-ureda"
          icon="building"
          title="Selidba ureda"
          description="Selimo urede svih veličina. Vi se fokusirajte na posao – mi ćemo se pobrinuti da sutra jednostavno uključite računalo i nastavite gdje ste stali."
        />
        <ServiceCard
          to="/hitne-selidbe"
          icon="zap"
          title="Hitne situacije"
          description="Auto vam se pokvario baš na dan selidbe? Dogovoreni prijevoz nije se pojavio? Bez brige – mi smo uvijek dostupni, samo nas nazovite i stižemo odmah."
        />
      </CardGrid>
    </template>
  </ServiceLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import ServiceLayout from '@/components/ServiceLayout.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import CardGrid from '@/components/CardGrid.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

useHead({
  title: 'Kombi selidbe - Profesionalne usluge selidbe Zagreb',
  meta: [
    {
      name: 'description',
      content:
        'Kompletne usluge selidbe s kombijem u Zagrebu. Sigurno i efikasno premještanje vašeg namještaja i stvari.',
    },
    {
      property: 'og:title',
      content: 'Kombi selidbe - Profesionalne usluge selidbe Zagreb',
    },
    {
      property: 'og:description',
      content:
        'Kompletne usluge selidbe s kombijem u Zagrebu. Sigurno i efikasno premještanje vašeg namještaja i stvari.',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://kombi-transport.com/kombi-selidbe',
    },
  ],
})
</script>
