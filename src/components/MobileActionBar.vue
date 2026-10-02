<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
import { site } from '@/data/site'
import { trackingService } from '@/utils/tracking'

const trackPhone = () => trackingService.trackClick('mobile_bar_phone_click')
const trackWhatsApp = () => trackingService.trackClick('mobile_bar_whatsapp_click')
const trackQuote = () => trackingService.trackClick('mobile_bar_quote_click')
</script>

<template>
  <div class="mobile-bar">
    <a :href="site.phoneHref" class="btn btn-secondary mobile-bar__btn" @click="trackPhone">
      <AppIcon name="phone" :size="18" :stroke-width="2" />
      Nazovi
    </a>
    <a
      :href="site.whatsappHref"
      class="btn btn-secondary mobile-bar__btn"
      target="_blank"
      rel="noopener noreferrer"
      @click="trackWhatsApp"
    >
      <AppIcon name="whatsapp" :size="18" />
      WhatsApp
    </a>
    <RouterLink to="/kontakt" class="btn btn-primary mobile-bar__btn" @click="trackQuote"
      >Ponuda</RouterLink
    >
  </div>
</template>

<style scoped>
.mobile-bar {
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  padding: 10px 12px;
  padding-bottom: calc(10px + env(safe-area-inset-bottom, 0px));
  background: var(--surface);
  border-top: 1px solid var(--line);
}

.mobile-bar__btn {
  height: 48px;
  padding: 0 8px;
  font-size: 15px;
  gap: 6px;
}

@keyframes bar-in {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@media (max-width: 760px) {
  .mobile-bar {
    display: grid;
    animation: bar-in 0.5s 0.4s cubic-bezier(0.2, 0.7, 0.2, 1) both;
  }
}
</style>
