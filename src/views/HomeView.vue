<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useHead } from '@unhead/vue'
import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import ContactSection from '@/components/ContactSection.vue'

useHead({
  title: 'Kombi Transport - Profesionalne usluge prijevoza Zagreb',
  meta: [
    {
      name: 'description',
      content: 'Profesionalne usluge prijevoza u Zagrebu - brzi transport, selidbe i dostava po najnižoj cijeni. Kontaktirajte nas za besplatnu procjenu.'
    },
    {
      property: 'og:title',
      content: 'Kombi Transport - Profesionalne usluge prijevoza Zagreb'
    },
    {
      property: 'og:description',
      content: 'Profesionalne usluge prijevoza u Zagrebu - brzi transport, selidbe i dostava po najnižoj cijeni. Kontaktirajte nas za besplatnu procjenu.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://kombi-transport.com/'
    }
  ]
})

let observer: IntersectionObserver | null = null

onMounted(() => {
  window.scrollTo(0, 0)

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  const fadeSections = document.querySelectorAll('.fade-in-section')
  fadeSections.forEach((section) => {
    observer?.observe(section)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.fade-in-section {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in-section.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}
</style>
