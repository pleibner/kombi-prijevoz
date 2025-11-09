<template>
  <ServiceLayout title="Stranica nije pronađena" :animate-title="true">
    <div class="content">
      <div class="error-content">
        <div class="error-icon">🔍</div>
        <h2>404 - Stranica nije pronađena</h2>
        <p>
          Nažalost, stranica koju tražite ne postoji ili je možda premještena.
          Provjerite jeste li pravilno upisali URL adresu ili se vratite na početnu stranicu.
        </p>
        <div class="actions">
          <ButtonPrimary @click="goHome" class="home-btn">
            Početna stranica
          </ButtonPrimary>
          <ButtonPrimary @click="goToContact" button-class="secondary">
            Kontakt
          </ButtonPrimary>
        </div>
      </div>
    </div>

    <template #footer>
      <ServicesSection />
    </template>
  </ServiceLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import ServiceLayout from '@/components/ServiceLayout.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import ButtonPrimary from '@/components/ButtonPrimary.vue'

const router = useRouter()

onMounted(() => {
  window.scrollTo(0, 0)
})

const goHome = () => {
  router.push('/')
}

const goToContact = () => {
  router.push('/kontakt')
}

useHead({
  title: '404 - Stranica nije pronađena | Kombi Transport',
  meta: [
    {
      name: 'description',
      content: 'Stranica koju tražite nije pronađena. Vratite se na početnu stranicu Kombi Transport za profesionalne usluge prijevoza.'
    },
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
})
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}

.error-content {
  text-align: center;
  max-width: 600px;
  padding: 2rem;
}

.error-icon {
  font-size: 5rem;
  margin-bottom: 1.5rem;
  opacity: 0.8;
}

.error-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  text-shadow: none;
}

.error-content p {
  font-size: 1.2rem;
  line-height: 1.7;
  color: #666;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.home-btn {
  min-width: 160px;
}

@media (max-width: 768px) {
  .error-content {
    padding: 1rem;
  }

  .error-content h2 {
    font-size: 2rem;
  }

  .error-content p {
    font-size: 1.1rem;
  }

  .error-icon {
    font-size: 4rem;
  }

  .actions {
    flex-direction: column;
    align-items: center;
  }

  .home-btn {
    width: 100%;
    max-width: 200px;
  }
}
</style>
