<template>
  <ServiceLayout title="Kombi dostava" :animate-title="true">
    <div class="content">
      <p>
        U današnjem užurbanom životu, vrijeme je najvrjednija valuta. Ako vašoj narudžbi treba predugo da stigne, jednostavno nas nazovite – mi ćemo vam je dostaviti već danas.
      </p>

      <p>
        Dostavljamo brzo i pouzdano, jer razumijemo koliko je važno da vaši paketi stignu na vrijeme. Naša ekipa profesionalaca brine o svakoj dostavi s istom pažnjom i predanošću, bez obzira na veličinu pošiljke.
      </p>

      <p>
        Fleksibilnost je naša snaga – dostupni smo kad god vam zatreba. Radimo vikendom, praznicima i izvan uobičajenog radnog vremena, prilagođavajući se vašem rasporedu.
      </p>

      <p>
        Posebno smo ponosni na našu sposobnost dostave u manje pristupačne dijelove grada. Dok obična vozila nemaju dozvolu pristupa u centar, mi koristimo specijalizirana vozila koja mogu stići do svake adrese, osiguravajući da vaša pošiljka stigne bez problema.
      </p>
    </div>

    <template #footer>
      <CardGrid centered>
        <ServiceCard
          to="/dostava-namjestaja"
          icon="🪑"
          title="Dostava namještaja"
          description="Veći komadi namještaja iz IKEA-e, Lesnine, Harvey Normana i drugih trgovina dostavljamo direktno na vašu kućnu adresu. Bez gužve na parkingu i nošenja teškog namještaja."
        />
        <ServiceCard
          to="/dostava-bijele-tehnike"
          icon="❄️"
          title="Dostava bijele tehnike"
          description="Frižidere, perilice, štednjake i drugu bijelu tehniku iz Pevexa, Big Banga, Elipsa i drugih trgovina dostavljamo direktno do vaših vrata. Uključujući i postavljanje."
        />
        <ServiceCard
          to="/redovne-dostave"
          icon="🔄"
          title="Redovne dostave"
          description="Mjesečna dostava materijala ili proizvoda u trgovine i tvrtke. Redovite isporuke prema dogovorenom rasporedu, uvijek na vrijeme i bez iznenađenja."
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
  title: 'Kombi dostava - Brza dostava paketa Zagreb',
  meta: [
    {
      name: 'description',
      content: 'Profesionalna kombi dostava u Zagrebu. Pouzdana dostava paketa, robe i materijala na vrijeme.'
    },
    {
      property: 'og:title',
      content: 'Kombi dostava - Brza dostava paketa Zagreb'
    },
    {
      property: 'og:description',
      content: 'Profesionalna kombi dostava u Zagrebu. Pouzdana dostava paketa, robe i materijala na vrijeme.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://kombi-transport.com/kombi-dostava'
    }
  ]
})
</script>

<style scoped>
.content {
  max-width: 1000px;
  margin: 0 auto;
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
