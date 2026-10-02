<template>
  <ServiceLayout title="Stranica nije pronađena" eyebrow="Greška 404">
    <div class="content">
      <div class="error-content">
        <span class="error-icon"><AppIcon name="search" :size="36" /></span>
        <p>
          Nažalost, stranica koju tražite ne postoji ili je možda premještena. Provjerite jeste li
          pravilno upisali adresu ili se vratite na početnu stranicu.
        </p>
        <div class="actions">
          <RouterLink to="/" class="btn btn-primary">Početna stranica</RouterLink>
          <RouterLink to="/kontakt" class="btn btn-secondary">Kontakt</RouterLink>
        </div>
      </div>
    </div>

    <template #footer>
      <ServicesSection compact />
    </template>
  </ServiceLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import AppIcon from '@/components/AppIcon.vue'
import ServiceLayout from '@/components/ServiceLayout.vue'
import ServicesSection from '@/components/ServicesSection.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

useHead({
  title: '404 - Stranica nije pronađena | Kombi Transport',
  meta: [
    {
      name: 'description',
      content:
        'Stranica koju tražite nije pronađena. Vratite se na početnu stranicu Kombi Transport za profesionalne usluge prijevoza.',
    },
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
})
</script>

<style scoped>
.error-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
}

.error-icon {
  width: 64px;
  height: 64px;
  border-radius: 999px;
  background: var(--tint);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
