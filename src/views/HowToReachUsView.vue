<script setup lang="ts">
import { onMounted } from 'vue'
import { useJsonLd } from '@/composables/useJsonLd'
import { usePageMeta } from '@/composables/usePageMeta'
import { breadcrumbSchema } from '@/utils/schema'
import ContactInfo from '@/components/ContactInfo.vue'
import CtaBand from '@/components/CtaBand.vue'

usePageMeta({
  title: 'Kako do nas? - Kombi Transport Zagreb',
  description:
    'Pronađite nas na adresi Trg Ivana Kukuljevića 5, Zagreb. Pogledajte kartu i upute kako doći do nas.',
})
useJsonLd('ld-breadcrumb', breadcrumbSchema('Kako do nas', '/kako-do-nas'))

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="how-to-reach-us">
    <div class="container how-to-reach-us__inner">
      <nav class="breadcrumb" aria-label="Putanja">
        <RouterLink to="/">Početna</RouterLink>
        <span aria-hidden="true">/</span>
        <strong>Kako do nas</strong>
      </nav>

      <div class="how-to-reach-us__heading">
        <p class="eyebrow">Lokacija</p>
        <h1>Kako do nas?</h1>
      </div>

      <div class="how-to-reach-us__grid">
        <div class="card how-to-reach-us__card">
          <h2>Naša lokacija</h2>
          <ContactInfo show-facebook show-google />
        </div>
        <div class="how-to-reach-us__map">
          <iframe
            title="Karta: Trg Ivana Kukuljevića 5, Zagreb"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.564571736636!2d15.895287376840733!3d45.80801841031383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d14251412071%3A0xb69b329c0160d704!2sTrg%20Ivana%20Kukuljevi%C4%87a%205%2C%2010090%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1734879944000!5m2!1shr!2shr"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>

    <CtaBand />
  </div>
</template>

<style scoped>
.how-to-reach-us__inner {
  padding-top: 32px;
  padding-bottom: 96px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.how-to-reach-us__heading {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.how-to-reach-us__heading h1 {
  font-size: clamp(44px, 5vw, 76px);
}

.how-to-reach-us__grid {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  gap: 32px;
  align-items: start;
}

.how-to-reach-us__card {
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.how-to-reach-us__card h2 {
  font-size: 28px;
}

.how-to-reach-us__map {
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--surface);
}

.how-to-reach-us__map iframe {
  display: block;
}

@media (max-width: 860px) {
  .how-to-reach-us__grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .how-to-reach-us__inner {
    padding-bottom: 64px;
  }
}
</style>
