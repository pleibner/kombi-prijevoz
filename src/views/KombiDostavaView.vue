<template>
  <ServiceLayout>
    <div class="content">
      <p>
        U današnjem užurbanom životu, vrijeme je najvrjednija valuta. Ako vašoj narudžbi treba
        predugo da stigne, jednostavno nas nazovite – mi ćemo vam je dostaviti već danas.
      </p>

      <p>
        Dostavljamo brzo i pouzdano, jer razumijemo koliko je važno da vaši paketi stignu na
        vrijeme. Naša ekipa profesionalaca brine o svakoj dostavi s istom pažnjom i predanošću, bez
        obzira na veličinu pošiljke.
      </p>

      <p>
        Fleksibilnost je naša snaga. Radimo svaki dan od 8 do 20 h, uključujući vikende i praznike,
        a hitne dostave obavljamo 0–24, bez nadoplate.
      </p>

      <p>
        Posebno smo ponosni na našu sposobnost dostave u manje pristupačne dijelove grada. Imamo
        dozvolu za ulaz u pješačku zonu, pa dostavljamo i na adrese u samom centru Zagreba, kamo
        obična dostavna vozila ne smiju ući.
      </p>
    </div>

    <template #footer>
      <CardGrid centered>
        <ServiceCard
          to="/dostava-namjestaja"
          icon="armchair"
          title="Dostava namještaja"
          description="Veći komadi namještaja iz IKEA-e, Lesnine, Harvey Normana i drugih trgovina dostavljamo direktno na vašu kućnu adresu. Bez gužve na parkingu i nošenja teškog namještaja."
        />
        <ServiceCard
          to="/dostava-bijele-tehnike"
          icon="refrigerator"
          title="Dostava bijele tehnike"
          description="Frižidere, perilice, štednjake i drugu bijelu tehniku iz Pevexa, Big Banga, Elipsa i drugih trgovina dostavljamo direktno do vaših vrata. Uključujući i postavljanje."
        />
        <ServiceCard
          to="/redovne-dostave"
          icon="repeat"
          title="Redovne dostave"
          description="Mjesečna dostava materijala ili proizvoda u trgovine i tvrtke. Redovite isporuke prema dogovorenom rasporedu, uvijek na vrijeme i bez iznenađenja."
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
