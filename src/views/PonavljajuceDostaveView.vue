<template>
  <ServiceLayout title="Ponavljajuće dostave" :animate-title="true">
    <div class="content">
      <p>
        Za tvrtke koje ovise o redovitim dostavama robe, materijala ili proizvoda, pravilna logistika je ključna za nesmetan rad. Bilo da vodite trgovinu, restoran, proizvodno poduzeće ili bilo koju drugu tvrtku koja zahtijeva periodične isporuke, mi vam nudimo kompletnu uslugu ponavljajućih dostava.
      </p>

      <p>
        Naša usluga uključuje preuzimanje robe u vaše ime na točno određene termine, organiziranje transporta i pravovremenu dostavu u vaše skladište ili prodajni prostor. Bez obzira radi li se o dnevnim, tjednim ili mjesečnim dostavama, mi osiguravamo da vaš opskrbni lanac funkcionira bez prekida.
      </p>

      <p>
        Surađujemo s vašim dobavljačima kako bismo koordinirali termine preuzimanja i osigurali da roba stigne na vrijeme. Naši vozači su upoznati s vašim rasporedom i procedurama, što omogućava brže i učinkovitije procese. Također nudimo fleksibilnost u slučaju promjena – ako se vaši zahtjevi promijene, jednostavno nas obavijestite i mi ćemo prilagoditi raspored.
      </p>

      <p>
        Prepustite nam brigu o vašim ponavljajućim dostavama i fokusirajte se na svoje temeljne poslovne aktivnosti. Kontaktirajte nas da dogovorimo personalizirani plan dostava koji će odgovarati vašim specifičnim potrebama i osigurati kontinuirani tok robe u vašem poslovanju.
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
