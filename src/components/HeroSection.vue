<script setup lang="ts">
import RemarkItem from '@/components/RemarkItem.vue'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import RoadNetworkBackground from '@/components/RoadNetworkBackground.vue'
import RoadAnimation from '@/components/RoadAnimation.vue'

// Hero section component with dynamic animations and interactive elements
</script>

<template>
  <section class="hero">
    <!-- Road Network Background -->
    <RoadNetworkBackground />

    <!-- Main Content -->
    <div class="hero-container">
        <div class="hero-content">
        <!-- Company branding -->
        <div class="brand-section">
          <h1 class="company-name">
            <span class="name-main">Kombi</span>
            <span class="name-accent">Prijevoz</span>
          </h1>
          <p class="company-tagline">Najpouzdaniji prijevoz po najnižoj cijeni</p>
            </div>

        <!-- Services and Remarks in Two Columns -->
        <div class="services-remarks-container">
          <!-- Key services -->
          <div class="services-preview">
            <RemarkItem
              icon="🚚"
              text="Brzi transport"
              :reverse="true"
              :delay="0.1"
            />
            <RemarkItem
              icon="🏠"
              text="Selidbe"
              :reverse="true"
              :delay="0.2"
            />
            <RemarkItem
              icon="📦"
              text="Dostava"
              :reverse="true"
              :delay="0.3"
            />
            </div>

          <!-- Vertical Separator -->
          <div class="vertical-separator"></div>

          <!-- Remarks -->
          <div class="hero-remarks">
            <RemarkItem text="Profesionalna usluga" :delay="0.3" />
            <RemarkItem text="Konkurentne cijene" :delay="0.5" />
            <RemarkItem text="Brza reakcija" :delay="0.7" />
            <RemarkItem text="Siguran transport" :delay="0.9" />
            </div>
            </div>

        <!-- Call to action -->
        <div class="cta-section">
          <ButtonPrimary button-class="hero-btn" show-ripple>Kontaktirajte nas</ButtonPrimary>
          </div>

            </div>
          </div>

    <!-- Road Animation -->
    <RoadAnimation />

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











/* Main Content Styles */
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
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin: 2rem 0;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.services-preview {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
}

.vertical-separator {
  width: 2px;
  height: 280px;
  background: linear-gradient(to bottom, rgba(239, 68, 68, 0.3) 0%, rgba(239, 68, 68, 0.8) 50%, rgba(239, 68, 68, 0.3) 100%);
  border-radius: 1px;
  align-self: center;
}

.hero-remarks {
  flex: 1;
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











/* Enhanced Responsive Design */
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
    font-size: clamp(2.5rem, 12vw, 4rem);
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



  .cta-section {
    flex-direction: column;
    align-items: center;
  }

  .hero-remarks {
    gap: 0.6rem;
    align-items: center;
  }

  /* Adjust map background for mobile */
  .road-network {
    opacity: 0.4;
  }



}

@media (max-width: 480px) {
  .hero {
    padding: 1.5rem 0.8rem;
  }

  .company-name {
    font-size: clamp(2rem, 15vw, 3rem);
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
</style>
