<script setup lang="ts">
// Kombi prijevoz - profesionalne usluge prijevoza, selidbi i dostave

import { onMounted, onUnmounted } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import ContactSection from '@/components/ContactSection.vue'

let observer: IntersectionObserver | null = null

onMounted(() => {
  // Create intersection observer for fade-in animations
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
    }
  )

  // Observe all fade-in sections
  const fadeSections = document.querySelectorAll('.fade-in-section')
  fadeSections.forEach((section) => {
    observer?.observe(section)
  })
})

onUnmounted(() => {
  // Clean up observer
  observer?.disconnect()
})
</script>

<template>
  <!-- JSON-LD Structured Data for Local Business -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kombi Prijevoz",
    "description": "Profesionalne usluge prijevoza - brzi transport, selidbe i dostava po najnižoj cijeni",
    "url": "https://pleibner.github.io/kombi-prijevoz/",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Zagreb",
      "addressRegion": "HR-21",
      "addressCountry": "HR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.8150",
      "longitude": "15.9819"
    },
    "areaServed": {
      "@type": "City",
      "name": "Zagreb"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "45.8150",
        "longitude": "15.9819"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Prijevoz usluge",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transport robe",
            "description": "Siguran i efikasan transport svih vrsta robe diljem zemlje"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Selidbe",
            "description": "Kompletne usluge selidbe stanova, kuća i ureda"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dostava",
            "description": "Brza i pouzdana dostava paketa, dokumenata i robe"
          }
        }
      ]
    },
    "priceRange": "€€",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "EUR",
    "openingHours": "Mo-Su 08:00-20:00"
  }
  </script>

  <div class="home">
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <TestimonialsSection />
    <ContactSection />
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}

/* Global container styles for consistency */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Fade-in animation for sections */
.fade-in-section {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in-section.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsivnost */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}
</style>
