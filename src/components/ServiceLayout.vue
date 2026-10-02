<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppIcon from '@/components/AppIcon.vue'
import ContactInfo from '@/components/ContactInfo.vue'
import CtaBand from '@/components/CtaBand.vue'
import { useJsonLd } from '@/composables/useJsonLd'
import { usePageMeta } from '@/composables/usePageMeta'
import { findServicePage } from '@/data/services'
import { site } from '@/data/site'
import { breadcrumbSchema, serviceSchema } from '@/utils/schema'
import { trackingService } from '@/utils/tracking'

const props = withDefaults(
  defineProps<{
    /** Defaults to the service name for routes listed in data/services. */
    title?: string
    eyebrow?: string
  }>(),
  { eyebrow: 'Usluga' },
)

const router = useRouter()

// Service pages take their heading, head tags and structured data from data/services.
// Other pages using this layout (price list, 404) set their own.
const service = findServicePage(useRoute().path)
const heading = computed(() => props.title ?? service?.name ?? '')

if (service) {
  usePageMeta({ title: service.title, description: service.description })
  useJsonLd('ld-service', serviceSchema(service.name, service.description, service.path))
  useJsonLd('ld-breadcrumb', breadcrumbSchema(service.name, service.path))
}

const navigateToContact = () => {
  trackingService.trackClick('service_layout_contact_button_click', {
    page: router.currentRoute.value.name || router.currentRoute.value.path,
  })
  router.push('/kontakt')
}

const trackPhone = () => trackingService.trackClick('service_layout_phone_click')
</script>

<template>
  <div class="service-page">
    <header class="page-hero">
      <div class="container page-hero__inner">
        <nav class="breadcrumb" aria-label="Putanja">
          <RouterLink to="/">Početna</RouterLink>
          <span aria-hidden="true">/</span>
          <strong>{{ heading }}</strong>
        </nav>
        <p class="eyebrow">{{ eyebrow }}</p>
        <h1 class="page-hero__title">{{ heading }}</h1>
        <div class="page-hero__actions">
          <button type="button" class="btn btn-primary" @click="navigateToContact">
            Zatraži ponudu
          </button>
          <a :href="site.phoneHref" class="btn btn-secondary" @click="trackPhone">
            <AppIcon name="phone" :size="18" :stroke-width="2" />
            {{ site.phoneDisplay }}
          </a>
        </div>
      </div>
    </header>

    <div class="container service-body">
      <div class="prose">
        <slot></slot>
      </div>
      <aside class="service-aside">
        <div class="card service-aside__card">
          <h2>Dogovorite termin</h2>
          <ContactInfo />
          <button type="button" class="btn btn-primary btn-block" @click="navigateToContact">
            Pošalji upit
          </button>
          <p class="service-aside__note">Odgovaramo u najkraćem roku. Procjena je besplatna.</p>
        </div>
      </aside>
    </div>

    <section v-if="$slots.footer" class="service-related">
      <div class="container">
        <slot name="footer"></slot>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<style scoped>
.page-hero {
  background: var(--surface);
  border-bottom: 1px solid var(--line);
}

.page-hero__inner {
  padding-top: 32px;
  padding-bottom: 56px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.page-hero__inner .eyebrow {
  margin-top: 12px;
}

.page-hero__title {
  font-size: clamp(44px, 5vw, 76px);
  line-height: 0.98;
  max-width: 900px;
}

.page-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 8px;
}

.service-body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 56px;
  align-items: start;
  padding-top: 64px;
  padding-bottom: 80px;
}

.prose {
  max-width: 720px;
  display: flex;
  flex-direction: column;
}

.prose :deep(p) {
  font-size: 18px;
  line-height: 1.65;
  color: #374151;
  margin-bottom: 20px;
}

.prose :deep(p:first-child) {
  font-size: 22px;
  line-height: 1.5;
  font-weight: 600;
  color: var(--ink);
}

.prose :deep(p:last-child) {
  margin-bottom: 0;
}

.service-aside {
  position: sticky;
  top: calc(var(--header-height) + 24px);
}

.service-aside__card {
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.service-aside__card h2 {
  font-size: 30px;
}

.service-aside__note {
  font-size: 13px;
  color: var(--muted);
  text-align: center;
}

.service-related {
  padding: 0 0 96px;
}

@media (max-width: 960px) {
  .service-body {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
    padding-top: 48px;
    padding-bottom: 64px;
  }

  .service-aside {
    position: static;
  }

  .service-related {
    padding-bottom: 64px;
  }
}

@media (max-width: 760px) {
  .page-hero__actions .btn {
    flex: 1 1 auto;
  }

  .prose :deep(p) {
    font-size: 17px;
  }

  .prose :deep(p:first-child) {
    font-size: 20px;
  }
}
</style>
