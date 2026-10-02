<template>
  <ServiceLayout>
    <div class="content">
      <p>
        Stari namještaj, dotrajali kućanski aparati ili drugi veliki predmeti zauzimaju prostor u
        vašem domu? Ne čekajte tjednima na komunalnu službu – mi ćemo riješiti problem već danas.
      </p>

      <p>
        Glomazni otpad može biti pravi izazov za odvoz. Veliki, teški predmeti zahtijevaju snagu,
        opremu i vozilo prilagođeno takvom prijevozu. Naša ekipa ima sve potrebno za siguran i brz
        odvoz bilo kojeg glomaznog otpada.
      </p>

      <p>
        Bez obzira radi li se o starom kauču, ormaru, hladnjaku, perilici ili bilo kojem drugom
        velikom predmetu – mi ćemo ga sigurno iznijeti iz vašeg prostora i odvesti u reciklažno
        dvorište. Vi se ne morate brinuti ni o čemu.
      </p>

      <p>
        Naša usluga je brza i fleksibilna. Nazovite nas, dogovorimo termin koji vama odgovara, i mi
        stižemo s opremom i vozilom. Profesionalno rukovanje i odgovorno zbrinjavanje otpada – to je
        naša garancija.
      </p>
    </div>

    <template #footer>
      <ServicesSection compact />
    </template>
  </ServiceLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import ServiceLayout from '@/components/ServiceLayout.vue'
import ServicesSection from '@/components/ServicesSection.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
