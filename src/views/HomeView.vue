<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import HowItWorksSection from '@/components/HowItWorksSection.vue'
import PricingSection from '@/components/PricingSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import CoverageSection from '@/components/CoverageSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import CtaBand from '@/components/CtaBand.vue'
import { faqItems } from '@/data/faq'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

useHead({
  title: 'Kombi Transport - Profesionalne usluge prijevoza Zagreb',
  meta: [
    {
      name: 'description',
      content:
        'Profesionalne usluge prijevoza u Zagrebu - brzi transport, selidbe i dostava po najnižoj cijeni. Kontaktirajte nas za besplatnu procjenu.',
    },
    {
      property: 'og:title',
      content: 'Kombi Transport - Profesionalne usluge prijevoza Zagreb',
    },
    {
      property: 'og:description',
      content:
        'Profesionalne usluge prijevoza u Zagrebu - brzi transport, selidbe i dostava po najnižoj cijeni. Kontaktirajte nas za besplatnu procjenu.',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://kombi-transport.com/',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(faqSchema),
    },
  ],
})

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="home">
    <HeroSection />
    <ServicesSection />
    <HowItWorksSection />
    <PricingSection />
    <AboutSection />
    <TestimonialsSection />
    <CoverageSection />
    <FaqSection />
    <CtaBand />
  </div>
</template>
