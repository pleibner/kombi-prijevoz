<template>
  <ServiceLayout title="Odvoz šute" :animate-title="true">
    <div class="content">
      <p>
        Renovacija ili gradnja stvara velike količine građevinskog otpada koji može brzo postati problem. Hrpe betona, cigle, keramike i drugog materijala zauzimaju prostor i usporavaju radove. Mi to rješavamo brzo i efikasno.
      </p>

      <p>
        Odvoz šute zahtijeva odgovarajuće vozilo i iskustvo u rukovanju teškim materijalom. Naša ekipa je opremljena i obučena za siguran i brz odvoz svih vrsta građevinskog otpada – od sitnog šuta do velikih komada betona.
      </p>

      <p>
        Bez obzira na količinu – bilo da se radi o manjoj renovaciji kupaonice ili velikim građevinskim radovima – imamo kapacitet i opremu za odvoz. Dolazimo na lokaciju, utovarujemo šutu i odvozimo je na ovlašteno odlagalište.
      </p>

      <p>
        Naša usluga vam omogućava da se fokusirate na radove, dok mi brinemo o čistoći gradilišta. Redoviti odvoz šute znači sigurniji i organiziraniji prostor za rad, a to znači brže i kvalitetnije završene radove.
      </p>
    </div>

    <template #footer>
      <ServicesSection :show-title="false" custom-padding="2rem 2rem" centered />
    </template>
  </ServiceLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import ServiceLayout from '@/components/ServiceLayout.vue'
import ServicesSection from '@/components/ServicesSection.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

useHead({
  title: 'Odvoz šute - Odvoz građevinskog otpada Zagreb',
  meta: [
    {
      name: 'description',
      content: 'Profesionalni odvoz šute i građevinskog otpada u Zagrebu. Brzo i efikasno odvozimo beton, cigle i drugi građevinski materijal.'
    },
    {
      property: 'og:title',
      content: 'Odvoz šute - Odvoz građevinskog otpada Zagreb'
    },
    {
      property: 'og:description',
      content: 'Profesionalni odvoz šute i građevinskog otpada u Zagrebu. Brzo i efikasno odvozimo beton, cigle i drugi građevinski materijal.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://kombi-transport.com/odvoz-sute'
    }
  ]
})
</script>

<style scoped>
.content {
  max-width: 900px;
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
