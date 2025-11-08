<script setup lang="ts">
import { useRouter } from 'vue-router'
import RemarkItem from '@/components/RemarkItem.vue'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import RoadNetworkBackground from '@/components/RoadNetworkBackground.vue'
import { trackingService } from '@/utils/tracking'

const router = useRouter()

const navigateToContact = () => {
  trackingService.trackClick('hero_contact_button_click')
  router.push('/kontakt')
}
</script>

<template>
  <section class="hero">
    <RoadNetworkBackground />

    <div class="hero-container">
        <div class="hero-content">
        <div class="brand-section">
          <h1 class="company-name" id="main-heading">
            <span class="name-main">Kombi</span>
            <span class="name-accent">Transport</span>
          </h1>
          <p class="company-tagline">Najpouzdaniji prijevoz po najnižoj cijeni</p>
            </div>

        <div class="services-remarks-container">
          <div class="services-preview">
            <router-link to="/kombi-prijevoz" class="service-link">
              <RemarkItem
                icon="🚚"
                text="Prijevoz robe"
                :reverse="true"
                :delay="0.1"
              />
            </router-link>
            <router-link to="/kombi-selidbe" class="service-link">
              <RemarkItem
                icon="🏠"
                text="Selidbe"
                :reverse="true"
                :delay="0.2"
              />
            </router-link>
            <router-link to="/kombi-dostava" class="service-link">
              <RemarkItem
                icon="📦"
                text="Dostava"
                :reverse="true"
                :delay="0.3"
              />
            </router-link>
            </div>

          <div class="vertical-separator"></div>

          <div class="horizontal-separator"></div>

          <div class="hero-remarks">
            <RemarkItem text="Profesionalna usluga" :delay="0.3" />
            <RemarkItem text="Konkurentne cijene" :delay="0.5" />
            <RemarkItem text="Brza reakcija" :delay="0.7" />
            <RemarkItem text="Siguran transport" :delay="0.9" />
            </div>
            </div>

        <div class="cta-section">
          <ButtonPrimary button-class="hero-btn" show-ripple @click="navigateToContact">Kontaktirajte nas</ButtonPrimary>
          </div>

            </div>
          </div>
</section>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #001a44 0%, #1a365d 50%, #2c5282 100%);
  background-size: 400% 400%;
  animation: gradientShift 12s ease-in-out infinite;
  color: white;
  padding: 4rem 2rem;
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.hero-container {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  width: 100%;
}

.brand-section {
  margin-bottom: 2rem;
}

.company-name {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
  width: 100%;
}

.name-main {
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.name-accent {
  color: #ef4444;
  text-shadow: 0 4px 8px rgba(239, 68, 68, 0.3);
}

.company-tagline {
  font-size: 1.3rem;
  opacity: 0.9;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin: 0;
}

.services-remarks-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  margin: 2rem 0;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.services-preview {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
}

.service-link {
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
}

.vertical-separator {
  width: 2px;
  height: 280px;
  background: linear-gradient(to bottom, rgba(239, 68, 68, 0.3) 0%, rgba(239, 68, 68, 0.8) 50%, rgba(239, 68, 68, 0.3) 100%);
  border-radius: 1px;
  align-self: center;
}

.horizontal-separator {
  display: none;
  height: 2px;
  width: 200px;
  background: linear-gradient(to right, rgba(239, 68, 68, 0.3) 0%, rgba(239, 68, 68, 0.8) 50%, rgba(239, 68, 68, 0.3) 100%);
  border-radius: 1px;
  align-self: center;
  margin: 0.5rem 0;
}

.hero-remarks {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-start;
}

.cta-section {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2.5rem 0;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
    min-height: 90vh;
    flex-direction: column;
  }

  .hero-container {
    padding: 0 1rem;
  }

  .company-name {
    font-size: clamp(1.8rem, 8vw, 3rem);
    margin-bottom: 0.5rem;
    line-height: 1.05;
  }

  .company-tagline {
    font-size: 1.1rem;
  }

  .services-remarks-container {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  .services-preview {
    gap: 1rem;
    align-items: center;
  }

  .vertical-separator {
    display: none;
  }

  .horizontal-separator {
    display: block;
    width: 150px;
  }

  .cta-section {
    flex-direction: column;
    align-items: center;
  }

  .hero-remarks {
    gap: 0.6rem;
    align-items: center;
  }

  .road-network {
    opacity: 0.4;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 1.5rem 0.8rem;
  }

  .company-name {
    font-size: clamp(1.5rem, 10vw, 2.2rem);
    margin-bottom: 0.3rem;
    line-height: 1.0;
  }

  .company-tagline {
    font-size: 1rem;
  }

  .services-remarks-container {
    gap: 1rem;
  }

  .hero-remarks {
    gap: 0.4rem;
  }
}

@media (max-width: 360px) {
  .company-name {
    font-size: clamp(1.3rem, 9vw, 2rem);
    margin-bottom: 0.2rem;
    line-height: 1.0;
  }
}
</style>
