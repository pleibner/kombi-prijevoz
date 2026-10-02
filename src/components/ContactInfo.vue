<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
import { site } from '@/data/site'
import { trackingService } from '@/utils/tracking'

withDefaults(
  defineProps<{
    variant?: 'light' | 'dark'
    showFacebook?: boolean
  }>(),
  { variant: 'light', showFacebook: false },
)

const trackPhone = () => trackingService.trackClick('phone_number_click')
const trackWhatsApp = () => trackingService.trackClick('whatsapp_button_click')
const trackFacebook = () => trackingService.trackClick('facebook_button_click')
</script>

<template>
  <ul class="contact-info" :class="`contact-info--${variant}`">
    <li>
      <AppIcon name="phone" :size="20" :stroke-width="2" class="contact-info__icon" />
      <span>
        <a :href="site.phoneHref" class="contact-info__primary" @click="trackPhone">{{
          site.phoneDisplay
        }}</a>
        <small>poziv, {{ site.hoursShort }}</small>
      </span>
    </li>
    <li>
      <AppIcon name="whatsapp" :size="20" class="contact-info__icon" />
      <span>
        <a
          :href="site.whatsappHref"
          class="contact-info__primary"
          target="_blank"
          rel="noopener noreferrer"
          @click="trackWhatsApp"
        >
          WhatsApp
        </a>
        <small>pošaljite poruku</small>
      </span>
    </li>
    <li v-if="showFacebook">
      <AppIcon name="facebook" :size="20" class="contact-info__icon" />
      <span>
        <a
          :href="site.facebookHref"
          class="contact-info__primary"
          target="_blank"
          rel="noopener noreferrer"
          @click="trackFacebook"
        >
          Facebook
        </a>
        <small>pratite nas</small>
      </span>
    </li>
    <li>
      <AppIcon name="pin" :size="20" :stroke-width="2" class="contact-info__icon" />
      <span>
        {{ site.street }}, {{ site.city }}
        <RouterLink to="/kako-do-nas" class="contact-info__link">Kako do nas</RouterLink>
      </span>
    </li>
    <li>
      <AppIcon name="clock" :size="20" :stroke-width="2" class="contact-info__icon" />
      <span>{{ site.hours }}</span>
    </li>
  </ul>
</template>

<style scoped>
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 16px;
}

.contact-info li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.contact-info li > span {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contact-info__icon {
  margin-top: 2px;
  color: var(--accent);
}

.contact-info__primary {
  font-weight: 600;
  text-decoration: none;
}

.contact-info__primary:hover,
.contact-info__link:hover {
  color: var(--accent);
}

.contact-info small {
  font-size: 14px;
  color: var(--muted);
}

.contact-info__link {
  font-size: 14px;
  color: var(--accent);
}

.contact-info--dark {
  color: #fff;
}

.contact-info--dark .contact-info__icon,
.contact-info--dark .contact-info__link {
  color: var(--signal);
}

.contact-info--dark small {
  color: var(--on-dark-muted);
}
</style>
