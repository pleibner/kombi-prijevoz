<template>
  <div class="service-layout">
    <!-- Header -->
    <header class="service-header">
      <div class="header-background"></div>
      <div class="header-content">
        <div class="header-navigation">
          <router-link to="/" class="home-link">
            <span class="home-icon">⌂</span>
          </router-link>
        <ButtonPrimary
          button-class="contact-btn"
          @click="navigateToContact"
        >
          Kontakt
        </ButtonPrimary>
        </div>
        <div class="header-title">
          <h1 class="service-title" :class="{ 'animate-title': animateTitle }">{{ title }}</h1>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="service-content">
      <slot></slot>
    </main>

    <!-- Footer -->
    <footer class="service-footer">
      <slot name="footer"></slot>
    </footer>

    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import ContactSection from '@/components/ContactSection.vue'
import { trackingService } from '@/utils/tracking'

defineProps<{
  title: string
  animateTitle?: boolean
}>()

const router = useRouter()

const navigateToContact = () => {
  trackingService.trackClick('service_layout_contact_button_click')
  router.push('/kontakt')
}
</script>

<style scoped>
.service-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.service-header {
  position: relative;
  color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #001a44 0%, #1a365d 50%, #2c5282 100%);
  background-size: 400% 400%;
  animation: gradientShift 12s ease-in-out infinite;
}

.header-content {
  position: relative;
  z-index: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
}

.header-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  text-align: left;
}

.service-title::first-letter {
  color: #ef4444;
  font-weight: 900;
}


@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.home-link {
  text-decoration: none;
  color: white;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  height: 100%;
}

.home-link:hover {
  transform: scale(1.1);
}

.home-icon {
  font-size: 3.5rem;
  color: #ef4444;
  line-height: 1;
  transform: scale(1.2);
}

.service-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  margin: 0;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.service-title.animate-title {
  animation: titleFadeIn 1s ease-out;
}

@keyframes titleFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.service-content {
  background: white;
  flex: 1;
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}

.service-footer {
  background-color: var(--light-bg);
  padding: 4rem 2rem;
}

@media (max-width: 768px) {
  .header-content {
    padding: 1.5rem;
  }

  .service-title {
    font-size: clamp(2rem, 7vw, 3rem);
    word-wrap: break-word;
    hyphens: auto;
  }

  .home-icon {
    font-size: 2.5rem;
  }

  .service-content {
    padding: 2rem 1rem;
  }

  .service-footer {
    padding: 2rem 1rem;
  }
}
</style>
