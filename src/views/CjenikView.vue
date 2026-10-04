<template>
  <ServiceLayout title="Cjenik kombi prijevoza i selidbi" eyebrow="Cijene">
    <div class="content">
      <p>
        Kombi s vozačem stoji {{ formatAnchorPrice(prices.vanWithDriver) }} (minimalno 1 sat, bez
        naplate dolaska), a selidbe naplaćujemo po satu, od
        {{ formatPrice(crewRates[0].perHour) }} za {{ crewRates[0].crew }}. Dostava iz trgovine
        stoji od {{ formatNetPrice(storeDeliveryFrom) }}, a odvoz do 1 m³ glomaznog otpada
        {{ formatAnchorPrice(prices.bulkyWaste) }}. Hitne prijevoze obavljamo 0–24 bez nadoplate.
      </p>

      <h2>Cijene usluga</h2>
      <table class="price-table">
        <caption>
          {{
            vatNote
          }}
        </caption>
        <thead>
          <tr>
            <th scope="col">Usluga</th>
            <th scope="col">Cijena</th>
            <th scope="col">Što je uključeno</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in priceList" :key="item.title">
            <th scope="row">
              <RouterLink v-if="item.path" :to="item.path">{{ item.title }}</RouterLink>
              <template v-else>{{ item.title }}</template>
            </th>
            <td class="price-table__price">
              {{ item.price }}
            </td>
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
  bedOrWardrobeRemoval,
  bulkyWasteExtraItemFrom,
  crewRates,
  crewRatesText,
  extraWorkerText,
  formatAnchorPrice,
  formatNetPrice,
  formatPrice,
  formatPriceRange,
  priceList,
  pricePerKmOutsideZagreb,
  prices,
  pricingNotes,
  rubblePerBag,
  storeDeliveryFrom,
  vatNote,
} from '@/data/pricing'
import { site } from '@/data/site'
import { breadcrumbSchema, faqSchema } from '@/utils/schema'

const van = prices.vanWithDriver

const priceFaq: FaqItem[] = [
  {
    question: 'Koliko košta kombi prijevoz u Zagrebu?',
    answer: `Kombi s vozačem stoji ${formatAnchorPrice(van)}, uz minimalno 1 sat i bez naplate dolaska. Cijena uključuje kombi, gorivo po Zagrebu i vozača koji koordinira utovar i istovar. Dodatni radnik za nošenje stoji ${extraWorkerText}.`,
  },
  {
    question: 'Koliko košta selidba stana u Zagrebu?',
    answer: `Selidbe unutar Zagreba naplaćujemo po satu, prema veličini ekipe: ${crewRatesText}. Vozač koordinira selidbu, a radnici nose, utovaruju i istovaruju. Konačnu cijenu potvrđujemo prije termina.`,
  },
  {
    question: 'Koliko košta dostava iz trgovine?',
    answer: `Dostava namještaja ili bijele tehnike iz trgovine po Zagrebu stoji od ${formatNetPrice(storeDeliveryFrom)}, s unosom u stan. Po želji sastavljamo namještaj, spajamo uređaje i odvozimo stari komad.`,
  },
  {
    question: 'Koliko košta odvoz glomaznog otpada?',
    answer: `Odvoz do 1 m³ glomaznog otpada, otprilike jednog kauča ili ormara, stoji ${formatAnchorPrice(prices.bulkyWaste)}, a svaki dodatni komad od ${formatNetPrice(bulkyWasteExtraItemFrom)}, ovisno o katu. Krevet ili ormar odvozimo za ${formatPriceRange(bedOrWardrobeRemoval)}, ovisno o težini i katu. Cijena uključuje utovar i odvoz u reciklažno dvorište.`,
  },
  {
    question: 'Koliko košta odvoz šute?',
    answer: `Odvoz šute stoji od ${formatNetPrice(rubblePerBag, 'po vreći')}, s utovarom i odvozom u reciklažno dvorište.`,
  },
  {
    question: 'Koliko košta prijevoz izvan Zagreba?',
    answer: `Vožnju izvan Zagreba naplaćujemo ${formatNetPrice(pricePerKmOutsideZagreb, 'po kilometru')}, a utovar i istovar po satnoj cijeni. Najčešće vozimo unutar ${site.serviceRadiusKm} km od Zagreba, a po dogovoru po cijeloj Hrvatskoj.`,
  },
  {
    question: 'Jesu li noćni i blagdanski termini skuplji?',
    answer:
      'Ne. Hitne prijevoze obavljamo 0–24, i praznicima, po istim cijenama kao i redovne. U Zagrebu stižemo u roku od sat vremena ako imamo slobodan kombi.',
  },
]

usePageMeta({
  title: 'Cjenik kombi prijevoza i selidbi u Zagrebu',
  description: `Cjenik kombi prijevoza u Zagrebu: kombi s vozačem od ${formatPrice(van.from)}/h, ${crewRates[0].crew} ${formatPrice(crewRates[0].perHour)}/h, glomazni otpad od ${formatPrice(prices.bulkyWaste.from)}, šuta od ${formatPrice(rubblePerBag)} po vreći. Cijene su bez PDV-a.`,
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

.price-table caption {
  caption-side: bottom;
  padding-top: 12px;
  text-align: left;
  font-size: 14px;
  color: var(--muted);
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
