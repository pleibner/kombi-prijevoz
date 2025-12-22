<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import ContactInfo from '@/components/ContactInfo.vue'

useHead({
  title: 'Kako do nas? - Kombi Transport Zagreb',
  meta: [
    {
      name: 'description',
      content: 'Pronađite nas na adresi Trg Ivana Kukuljevića 5, Zagreb. Pogledajte kartu i upute kako doći do nas.'
    }
  ]
})

const router = useRouter()

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="how-to-reach-us">
    <div class="container">
      <button @click="router.back()" class="back-button">
        ← Natrag
      </button>
      
      <h1>Kako do nas?</h1>
      
      <div class="content-wrapper">
        <section class="info-section">
          <h2>Naša lokacija</h2>
          <div class="contact-info-wrapper">
            <ContactInfo />
          </div>
        </section>

        <section class="map-section">
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.564571736636!2d15.895287376840733!3d45.80801841031383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d14251412071%3A0xb69b329c0160d704!2sTrg%20Ivana%20Kukuljevi%C4%87a%205%2C%2010090%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1734879944000!5m2!1shr!2shr"
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.how-to-reach-us {
  min-height: 100vh;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #001a44 0%, #1a365d 50%, #2c5282 100%);
  background-size: 400% 400%;
  animation: gradientShift 12s ease-in-out infinite;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 3rem;
}

.back-button {
  background: transparent;
  border: none;
  color: var(--primary-color, #ef4444);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.back-button:hover {
  color: var(--text-color, #333);
}

h1 {
  text-align: center;
  color: var(--text-color, #333);
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

h2 {
  color: var(--primary-color, #ef4444);
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  text-align: center;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.contact-info-wrapper {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  border: 1px solid #e1e5e9;
}

.map-container {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e1e5e9;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@media (max-width: 768px) {
  .how-to-reach-us {
    padding: 2rem 1rem;
  }

  .container {
    padding: 2rem;
  }

  h1 {
    font-size: 2rem;
  }

  .contact-info-wrapper {
    padding: 1rem;
  }
}
</style>
