<template>
  <ServiceLayout>
    <div class="content">
      <p>
        Renovacija ili gradnja stvara velike količine građevinskog otpada koji može brzo postati
        problem. Hrpe betona, cigle, keramike i drugog materijala zauzimaju prostor i usporavaju
        radove. Mi to rješavamo brzo i efikasno.
      </p>

      <p>
        Odvoz šute zahtijeva odgovarajuće vozilo i iskustvo u rukovanju teškim materijalom. Naša
        ekipa je opremljena i obučena za siguran i brz odvoz svih vrsta građevinskog otpada – od
        sitnog šuta do velikih komada betona.
      </p>

      <p>
        Bez obzira na količinu – bilo da se radi o manjoj renovaciji kupaonice ili velikim
        građevinskim radovima – imamo kapacitet i opremu za odvoz. Dolazimo na lokaciju, utovarujemo
        šutu i odvozimo je na ovlašteno odlagalište.
      </p>

      <p>
        Naša usluga vam omogućava da se fokusirate na radove, dok mi brinemo o čistoći gradilišta.
        Redoviti odvoz šute znači sigurniji i organiziraniji prostor za rad, a to znači brže i
        kvalitetnije završene radove.
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
