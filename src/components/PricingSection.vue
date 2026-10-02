<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { formatPrice, priceAnchors, pricingNotes } from '@/data/pricing'
</script>

<template>
  <section class="section--tight" aria-labelledby="pricing-heading">
    <div class="container pricing">
      <SectionHeading
        id="pricing-heading"
        v-reveal
        eyebrow="Cijene"
        title="Jasna cijena prije nego krenemo."
        lead="Konačnu cijenu potvrđujemo prije termina. Na nju utječu udaljenost, količina stvari, kat i lift te hitnost."
      />

      <ul class="pricing__grid">
        <li
          v-for="(anchor, index) in priceAnchors"
          :key="anchor.title"
          v-reveal="index * 100"
          class="card pricing__card"
        >
          <h3>{{ anchor.title }}</h3>
          <p class="pricing__price">
            <span class="pricing__from">od</span>
            <span class="pricing__amount">{{ formatPrice(anchor.from) }}</span>
            <span v-if="anchor.unit" class="pricing__unit">{{ anchor.unit }}</span>
          </p>
          <p class="pricing__description">{{ anchor.description }}</p>
        </li>
      </ul>

      <ul v-reveal class="pricing__notes">
        <li v-for="note in pricingNotes" :key="note">
          <AppIcon name="check" :size="18" :stroke-width="2" />
          {{ note }}
        </li>
      </ul>

      <RouterLink to="/cjenik" class="pricing__more">
        Pogledajte cijeli cjenik
        <AppIcon name="arrow-right" :size="18" :stroke-width="2" />
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.pricing {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.pricing__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: 20px;
}

.pricing__card {
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.pricing__card h3 {
  font-size: 26px;
}

.pricing__price {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
}

.pricing__from,
.pricing__unit {
  font-weight: 600;
  color: var(--muted);
}

.pricing__amount {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 48px;
  line-height: 1;
  color: var(--accent);
}

.pricing__description {
  color: var(--muted);
}

.pricing__notes {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 32px;
  align-items: center;
  padding: 20px 24px;
  border-radius: 10px;
  background: var(--tint);
  font-size: 15px;
  font-weight: 500;
}

.pricing__notes li {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pricing__more {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: 8px;
  font-weight: 600;
  font-size: 15px;
  color: var(--accent);
}
</style>
