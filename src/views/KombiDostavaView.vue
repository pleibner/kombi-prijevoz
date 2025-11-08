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
    </div>

    <template #footer>
      <CardGrid centered>
        <ServiceCard
          to="/dostava-iz-trgovina"
          icon="🛒"
          title="Dostava iz trgovina"
          description="Veće narudžbe iz IKEA-e, Bauhausa, Peveca i drugih trgovina dostavljamo direktno na vašu kućnu adresu. Bez gužve na parkingu i nošenja teških paketa."
        />
        <ServiceCard
          to="/ponavljajuce-dostave"
          icon="🔄"
          title="Ponavljajuće dostave"
          description="Mjesečna dostava materijala ili proizvoda u trgovine i tvrtke. Redovite isporuke prema dogovorenom rasporedu, uvijek na vrijeme i bez iznenađenja."
        />
        <ServiceCard
          to="/dostava-centar"
          icon="🏛️"
          title="Dostava u centar"
          description="Specijalizirani smo za dostavu u povijesnu jezgru grada gdje obična vozila nemaju pristup. Kombi vozila s posebnim dozvolama osiguravaju da vaša pošiljka stigne bez problema."
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
