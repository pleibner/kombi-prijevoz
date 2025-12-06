<template>
  <ServiceLayout title="Odvoz glomaznog otpada" :animate-title="true">
    <div class="content">
      <p>
        Stari namještaj, dotrajali kućanski aparati ili drugi veliki predmeti zauzimaju prostor u vašem domu? Ne čekajte tjednima na komunalnu službu – mi ćemo riješiti problem već danas.
      </p>

      <p>
        Glomazni otpad može biti pravi izazov za odvoz. Veliki, teški predmeti zahtijevaju snagu, opremu i vozilo prilagođeno takvom prijevozu. Naša ekipa ima sve potrebno za siguran i brz odvoz bilo kojeg glomaznog otpada.
      </p>

      <p>
        Bez obzira radi li se o starom kauču, ormaru, hladnjaku, perilici ili bilo kojem drugom velikom predmetu – mi ćemo ga sigurno iznijeti iz vašeg prostora i odvesti na odgovarajuće odlagalište. Vi se ne morate brinuti ni o čemu.
      </p>

      <p>
        Naša usluga je brza i fleksibilna. Nazovite nas, dogovorimo termin koji vama odgovara, i mi stižemo s opremom i vozilom. Profesionalno rukovanje i odgovorno zbrinjavanje otpada – to je naša garancija.
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
  title: 'Odvoz glomaznog otpada - Brzo i pouzdano Zagreb',
  meta: [
    {
      name: 'description',
      content: 'Profesionalni odvoz glomaznog otpada u Zagrebu. Brzo odvozimo stari namještaj, aparate i druge velike predmete.'
    },
    {
      property: 'og:title',
      content: 'Odvoz glomaznog otpada - Brzo i pouzdano Zagreb'
    },
    {
      property: 'og:description',
      content: 'Profesionalni odvoz glomaznog otpada u Zagrebu. Brzo odvozimo stari namještaj, aparate i druge velike predmete.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://kombi-transport.com/odvoz-glomaznog-otpada'
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
