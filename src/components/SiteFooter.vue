<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
import { site } from '@/data/site'
import { trackingService } from '@/utils/tracking'

const year = new Date().getFullYear()

const serviceLinks = [
  { to: '/kombi-prijevoz', label: 'Prijevoz robe' },
  { to: '/kombi-selidbe', label: 'Selidbe' },
  { to: '/kombi-dostava', label: 'Dostava' },
  { to: '/odvoz-otpada', label: 'Odvoz otpada' },
  { to: '/specijalni-prijevoz', label: 'Specijalni prijevoz' },
]

const moreLinks = [
  { to: '/selidbe-stanova-i-kuca', label: 'Selidbe stanova i kuća' },
  { to: '/selidbe-ureda', label: 'Selidbe ureda' },
  { to: '/hitne-selidbe', label: 'Hitne selidbe' },
  { to: '/dostava-namjestaja', label: 'Dostava namještaja' },
  { to: '/dostava-bijele-tehnike', label: 'Dostava bijele tehnike' },
  { to: '/odvoz-glomaznog-otpada', label: 'Odvoz glomaznog otpada' },
  { to: '/odvoz-sute', label: 'Odvoz šute' },
]

const trackWhatsApp = () => trackingService.trackClick('footer_whatsapp_click')
const trackFacebook = () => trackingService.trackClick('footer_facebook_click')
const trackPhone = () => trackingService.trackClick('footer_phone_click')
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div class="site-footer__grid">
        <div class="site-footer__brand">
          <span class="site-footer__word"
            >Kombi <span class="site-footer__accent">Transport</span></span
          >
          <p>Profesionalni kombi prijevoz, selidbe, dostava i odvoz otpada u Zagrebu i okolici.</p>
          <p>Radimo {{ site.hoursShort }}</p>
        </div>

        <nav class="site-footer__col" aria-label="Usluge">
          <h3>Usluge</h3>
          <RouterLink v-for="link in serviceLinks" :key="link.to" :to="link.to">{{
            link.label
          }}</RouterLink>
        </nav>

        <nav class="site-footer__col" aria-label="Više usluga">
          <h3>Više</h3>
          <RouterLink v-for="link in moreLinks" :key="link.to" :to="link.to">{{
            link.label
          }}</RouterLink>
        </nav>

        <div class="site-footer__col">
          <h3>Kontakt</h3>
          <a :href="site.phoneHref" @click="trackPhone">
            <AppIcon name="phone" :size="18" :stroke-width="2" />
            {{ site.phoneDisplay }}
          </a>
          <a
            :href="site.whatsappHref"
            target="_blank"
            rel="noopener noreferrer"
            @click="trackWhatsApp"
          >
            <AppIcon name="whatsapp" :size="18" />
            WhatsApp
          </a>
          <a
            :href="site.facebookHref"
            target="_blank"
            rel="noopener noreferrer"
            @click="trackFacebook"
          >
            <AppIcon name="facebook" :size="18" />
            Facebook
          </a>
          <RouterLink to="/kako-do-nas">
            <AppIcon name="pin" :size="18" :stroke-width="2" />
            {{ site.street }}, Zagreb
          </RouterLink>
        </div>
      </div>

      <div class="site-footer__bottom">
        <span>© {{ year }} Kombi Transport, Zagreb</span>
        <span>{{ site.street }}, {{ site.city }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--ink);
  color: var(--on-dark-muted);
  padding: 64px 0 32px;
}

.site-footer__inner {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.site-footer__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
  gap: 40px;
}

.site-footer__brand {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 15px;
}

.site-footer__brand p:first-of-type {
  max-width: 280px;
}

.site-footer__word {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 28px;
  letter-spacing: 0.02em;
  line-height: 1;
  text-transform: uppercase;
  color: #fff;
}

.site-footer__accent {
  color: var(--accent);
}

.site-footer__col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.site-footer__col h3 {
  font-size: 20px;
  color: #fff;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.site-footer__col a {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--on-dark-muted);
  text-decoration: none;
  font-size: 15px;
  transition: color 0.15s;
}

.site-footer__col a:hover {
  color: #fff;
}

.site-footer__bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 14px;
}
</style>
