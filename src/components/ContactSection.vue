<script setup lang="ts">
import { useRouter } from 'vue-router'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import ContactInfo from '@/components/ContactInfo.vue'
import { trackingService } from '@/utils/tracking'

const router = useRouter()

const navigateToContact = () => {
  trackingService.trackClick('contact_section_contact_button_click')
  router.push('/kontakt')
}
</script>

<template>
  <section class="contact fade-in-section">
    <div class="container">
      <h2>Kontaktirajte nas</h2>
      <p>Spremni smo vam pomoći s prijevozom, selidbom ili dostavom. Javite nam se za besplatnu procjenu.</p>
      <ContactInfo class="contact-info-spacing"/>
      <ButtonPrimary button-class="contact-btn" @click="navigateToContact">Pošaljite upit</ButtonPrimary>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 6rem 2rem;
  background: var(--light-bg);
  text-align: center;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
}

.contact h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.contact p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-info-spacing {
  margin-bottom: 3rem;
}

@media (max-width: 768px) {
  .contact {
    padding: 4rem 1rem;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
  }

  .contact h2 {
    font-size: 2rem;
  }

  .contact p {
    font-size: 1rem;
  }
}
</style>
