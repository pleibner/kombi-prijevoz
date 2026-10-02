<script setup lang="ts">
import { useRouter } from 'vue-router'
import AppIcon from '@/components/AppIcon.vue'
import { site } from '@/data/site'
import { trackingService } from '@/utils/tracking'

withDefaults(
  defineProps<{
    title?: string
    text?: string
  }>(),
  {
    title: 'Spremni za prijevoz?',
    text: 'Pošaljite upit ili nazovite. Odgovaramo brzo, a procjena je besplatna.',
  },
)

const router = useRouter()

const goToContact = () => {
  trackingService.trackClick('cta_band_quote_click', {
    page: router.currentRoute.value.name || router.currentRoute.value.path,
  })
  router.push('/kontakt')
}

const trackPhone = () => trackingService.trackClick('cta_band_phone_click')
</script>

<template>
  <section class="section--tight">
    <div class="container">
      <div class="cta-band">
        <div class="cta-band__copy">
          <h2>{{ title }}</h2>
          <p>{{ text }}</p>
        </div>
        <div class="cta-band__actions">
          <button type="button" class="btn btn-light" @click="goToContact">Zatraži ponudu</button>
          <a :href="site.phoneHref" class="btn btn-ghost" @click="trackPhone">
            <AppIcon name="phone" :size="18" :stroke-width="2" />
            {{ site.phoneDisplay }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-band {
  background: var(--accent);
  color: #fff;
  border-radius: var(--radius-lg);
  padding: 64px 56px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.cta-band__copy {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 560px;
}

.cta-band__copy h2 {
  font-size: clamp(40px, 4.4vw, 64px);
}

.cta-band__copy p {
  font-size: 18px;
  opacity: 0.92;
}

.cta-band__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 760px) {
  .cta-band {
    padding: 40px 24px;
  }

  .cta-band__actions,
  .cta-band__actions .btn {
    width: 100%;
  }
}
</style>
