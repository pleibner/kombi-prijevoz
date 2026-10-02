<script setup lang="ts">
import ServiceCard from '@/components/ServiceCard.vue'
import CardGrid from '@/components/CardGrid.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import type { IconName } from '@/data/icons'

withDefaults(
  defineProps<{
    compact?: boolean
  }>(),
  { compact: false },
)

const services: { to: string; icon: IconName; title: string; description: string }[] = [
  {
    to: '/kombi-prijevoz',
    icon: 'truck',
    title: 'Prijevoz robe',
    description:
      'Siguran prijevoz robe po Zagrebu i cijeloj Hrvatskoj, modernim vozilima i profesionalnom opremom.',
  },
  {
    to: '/kombi-selidbe',
    icon: 'home',
    title: 'Selidbe',
    description:
      'Selidbe stanova, kuća i ureda od vrata do vrata. Nosimo, osiguravamo i brinemo o svakom detalju.',
  },
  {
    to: '/kombi-dostava',
    icon: 'package',
    title: 'Dostava',
    description:
      'Brza dostava paketa, namještaja i bijele tehnike, s rasporedom prilagođenim vama.',
  },
  {
    to: '/odvoz-otpada',
    icon: 'trash',
    title: 'Odvoz otpada',
    description: 'Odvoz glomaznog otpada, starog namještaja i šute. Brzo, uredno i bez vaše muke.',
  },
]

const chips = [
  { to: '/dostava-namjestaja', label: 'Dostava namještaja' },
  { to: '/dostava-bijele-tehnike', label: 'Dostava bijele tehnike' },
  { to: '/redovne-dostave', label: 'Redovne dostave' },
  { to: '/hitne-selidbe', label: 'Hitne selidbe' },
  { to: '/selidbe-ureda', label: 'Selidbe ureda' },
  { to: '/odvoz-sute', label: 'Odvoz šute' },
  { to: '/specijalni-prijevoz', label: 'Specijalni prijevoz' },
  { to: '/povoljan-kombi-prijevoz', label: 'Povoljan kombi prijevoz' },
]
</script>

<template>
  <section
    class="services"
    :class="{ 'services--compact': compact }"
    aria-labelledby="services-heading"
  >
    <div class="container services__inner">
      <h2 v-if="compact" id="services-heading" class="services__compact-title">Ostale usluge</h2>
      <SectionHeading
        v-else
        v-reveal
        id="services-heading"
        eyebrow="Usluge"
        title="Jedan poziv za sve što treba prevesti."
        lead="Od jedne vreće šute do cijelog stana. Recite nam što trebate, a mi ćemo pronaći najbrži i najpovoljniji način."
      />

      <CardGrid>
        <ServiceCard
          v-for="(service, index) in services"
          :key="service.to"
          v-reveal="index * 90"
          :to="service.to"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
        />
        <slot></slot>
      </CardGrid>

      <div v-if="!compact" v-reveal class="services__chips">
        <span class="services__chips-label">Tražite nešto konkretno?</span>
        <RouterLink v-for="chip in chips" :key="chip.to" :to="chip.to" class="chip">{{
          chip.label
        }}</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 96px 0 72px;
}

.services--compact {
  padding: 0;
}

.services__inner {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.services--compact .services__inner {
  gap: 24px;
}

.services__compact-title {
  font-size: 32px;
}

.services__chips {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.services__chips-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--muted);
  margin-right: 6px;
}

@media (max-width: 760px) {
  .services {
    padding: 64px 0 48px;
  }
}
</style>
