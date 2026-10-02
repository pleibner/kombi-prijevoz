<template>
  <ServiceLayout title="Cjenik kombi prijevoza i selidbi" eyebrow="Cijene">
    <div class="content">
      <p>
        Kombi s vozačem stoji {{ formatAnchorPrice(prices.vanWithDriver) }}, selidba garsonijere ili
        jednosobnog stana unutar Zagreba {{ formatAnchorPrice(prices.flatMove) }}, a odvoz manje
        količine glomaznog otpada {{ formatAnchorPrice(prices.bulkyWaste) }}. Radimo
        {{ site.hoursShort }}, i praznicima, a procjena je besplatna.
      </p>

      <h2>Cijene usluga</h2>
      <table class="price-table">
        <thead>
          <tr>
            <th scope="col">Usluga</th>
            <th scope="col">Cijena</th>
            <th scope="col">Što je uključeno</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="anchor in priceAnchors" :key="anchor.title">
            <th scope="row">
              <RouterLink :to="anchor.path">{{ anchor.title }}</RouterLink>
            </th>
            <td class="price-table__price">{{ formatAnchorPrice(anchor) }}</td>
            <td>{{ anchor.description }}</td>
          </tr>
          <tr v-for="item in extraPrices" :key="item.title">
            <th scope="row">{{ item.title }}</th>
            <td class="price-table__price">{{ item.price }}</td>
            <td>{{ item.description }}</td>
          </tr>
        </tbody>
      </table>

      <h2>Kako računamo konačnu cijenu</h2>
      <p>
        Konačnu cijenu potvrđujemo prije termina. Na nju utječu udaljenost, količina stvari, kat i
        lift te hitnost.
      </p>
      <ul class="price-notes">
        <li v-for="note in pricingNotes" :key="note">
          <AppIcon name="check" :size="18" :stroke-width="2" />
          {{ note }}
        </li>
      </ul>

      <h2>Česta pitanja o cijenama</h2>
      <div v-for="item in priceFaq" :key="item.question" class="price-faq">
        <h3>{{ item.question }}</h3>
        <p>{{ item.answer }}</p>
      </div>
    </div>

    <template #footer>
      <ServicesSection compact />
    </template>
  </ServiceLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import ServiceLayout from '@/components/ServiceLayout.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import { useJsonLd } from '@/composables/useJsonLd'
import { usePageMeta } from '@/composables/usePageMeta'
import type { FaqItem } from '@/data/faq'
import {
  extraPrices,
  extraWorkerPerHour,
  formatAnchorPrice,
  formatPrice,
  priceAnchors,
  pricePerKmOutsideZagreb,
  prices,
  pricingNotes,
} from '@/data/pricing'
import { site } from '@/data/site'
import { breadcrumbSchema, faqSchema } from '@/utils/schema'

const priceFaq: FaqItem[] = [
  {
    question: 'Koliko košta kombi prijevoz u Zagrebu?',
    answer: `Kombi s vozačem stoji ${formatAnchorPrice(prices.vanWithDriver)}. Cijena uključuje kombi, gorivo po Zagrebu i vozača koji pomaže pri utovaru i istovaru. Dodatni radnik stoji ${formatPrice(extraWorkerPerHour)} po satu.`,
  },
  {
    question: 'Koliko košta selidba garsonijere ili jednosobnog stana?',
    answer: `Selidba garsonijere ili jednosobnog stana unutar Zagreba stoji ${formatAnchorPrice(prices.flatMove)}. Cijena uključuje kombi i dva radnika, nošenje i prijevoz.`,
  },
  {
    question: 'Koliko košta odvoz glomaznog otpada?',
    answer: `Odvoz manje količine glomaznog otpada, poput kauča, ormara ili bijele tehnike, stoji ${formatAnchorPrice(prices.bulkyWaste)} s utovarom i odvozom na odlagalište. Veće količine naplaćujemo po ponudi.`,
  },
  {
    question: 'Koliko košta prijevoz izvan Zagreba?',
    answer: `Za vožnju izvan Zagreba naplaćujemo ${formatPrice(pricePerKmOutsideZagreb)} po kilometru. Najčešće vozimo unutar ${site.serviceRadiusKm} km od Zagreba, a po dogovoru po cijeloj Hrvatskoj.`,
  },
]

usePageMeta({
  title: 'Cjenik kombi prijevoza i selidbi u Zagrebu',
  description: `Cjenik kombi prijevoza u Zagrebu: kombi s vozačem ${formatAnchorPrice(prices.vanWithDriver)}, selidba stana ${formatAnchorPrice(prices.flatMove)}, odvoz glomaznog otpada ${formatAnchorPrice(prices.bulkyWaste)}. Procjena je besplatna.`,
})
useJsonLd('ld-breadcrumb', breadcrumbSchema('Cjenik kombi prijevoza i selidbi', '/cjenik'))
useJsonLd('ld-faq', faqSchema(priceFaq))

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
h2 {
  font-size: 36px;
  margin: 28px 0 20px;
}

h3 {
  font-size: 24px;
  margin-bottom: 8px;
}

.price-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  font-size: 16px;
  text-align: left;
}

.price-table th,
.price-table td {
  padding: 14px 12px;
  border-bottom: 1px solid var(--line);
  vertical-align: top;
}

.price-table thead th {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  border-bottom: 2px solid var(--ink);
}

.price-table tbody th {
  font-weight: 600;
}

.price-table td {
  color: #374151;
}

.price-table .price-table__price {
  font-weight: 700;
  white-space: nowrap;
  color: var(--accent);
}

.price-notes {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  font-weight: 500;
}

.price-notes li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.price-faq {
  padding: 16px 0;
  border-top: 1px solid var(--line);
}

@media (max-width: 640px) {
  .price-table thead {
    display: none;
  }

  .price-table tr {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 4px 12px;
    padding: 14px 0;
    border-bottom: 1px solid var(--line);
  }

  .price-table th,
  .price-table td {
    padding: 0;
    border: 0;
  }

  .price-table td:last-child {
    grid-column: 1 / -1;
  }
}
</style>
