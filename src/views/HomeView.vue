<script setup lang="ts">
import { onMounted } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import HowItWorksSection from '@/components/HowItWorksSection.vue'
import PricingSection from '@/components/PricingSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import CoverageSection from '@/components/CoverageSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import CtaBand from '@/components/CtaBand.vue'
import { useJsonLd } from '@/composables/useJsonLd'
import { usePageMeta } from '@/composables/usePageMeta'
import { faqItems } from '@/data/faq'
import { formatAnchorPrice, prices } from '@/data/pricing'
import { site } from '@/data/site'
import { faqSchema } from '@/utils/schema'

usePageMeta({
  title: 'Kombi Transport - Profesionalne usluge prijevoza Zagreb',
  description: `${site.description} Radimo ${site.hoursShort}, ${site.urgentShort}. Kombi s vozačem ${formatAnchorPrice(prices.vanWithDriver)}, selidba stana ${formatAnchorPrice(prices.flatMove)}.`,
})
useJsonLd('ld-faq', faqSchema(faqItems))

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
