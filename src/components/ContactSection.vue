<script setup lang="ts">
import { useRouter } from 'vue-router'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import { trackingService } from '@/utils/tracking'

const router = useRouter()

const navigateToContact = () => {
  trackingService.trackClick('contact_section_contact_button_click')
  router.push('/kontakt')
}

const trackWhatsAppClick = () => {
  trackingService.trackClick('whatsapp_button_click')
}

const trackPhoneFocus = () => {
  trackingService.trackClick('phone_number_focus')
}
</script>

<template>
  <section class="contact fade-in-section">
    <div class="container">
      <h2>Kontaktirajte nas</h2>
      <p>Spremni smo pomoći vam s vašim prijevozom, selidbom ili dostavom. Kontaktirajte nas za besplatnu procjenu.</p>
      <div class="contact-info">
        <div class="contact-item">
          <span class="contact-icon">📞</span>
          <input
            type="text"
            value="+385 98 915 6061"
            readonly
            class="phone-input"
            @focus="trackPhoneFocus"
          />
        </div>
        <div class="contact-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
       alt="WhatsApp" width="24" height="24">
          <a href="https://wa.me/385989156061" target="_blank" rel="noopener noreferrer" class="contact-link" @click="trackWhatsAppClick">
            WhatsApp
          </a>
        </div>
        <div class="contact-item">
          <span class="contact-icon">📍</span>
          <span>Crnčićeva 41a, Zagreb</span>
        </div>
      </div>
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

.contact-info {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: #555;
}

.contact-icon {
  font-size: 1.3rem;
}

.phone-input {
  border: none;
  background: transparent;
  font-size: 1.1rem;
  color: #555;
  font-family: inherit;
  outline: none;
  cursor: text;
  padding: 0;
  margin: 0;
  width: auto;
  min-width: 120px;
}

.phone-input:focus {
  background: rgba(239, 68, 68, 0.1);
  border-radius: 4px;
  padding: 2px 4px;
  margin: -2px -4px;
}

.contact-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: var(--accent-color);
  text-decoration: underline;
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

  .contact-info {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .contact-link {
    font-size: 1rem;
  }

}
</style>
