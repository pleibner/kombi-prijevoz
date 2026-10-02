<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import AppIcon from '@/components/AppIcon.vue'
import StreetGridBackground from '@/components/StreetGridBackground.vue'
import { site } from '@/data/site'
import { trackingService } from '@/utils/tracking'

const router = useRouter()

const categories = [
  'Selidba stana ili kuće',
  'Namještaj ili bijela tehnika',
  'Paketi i roba',
  'Glomazni otpad ili šuta',
  'Nešto drugo',
]

const quote = reactive({ from: '', to: '', what: '', when: '' })

const submitQuickQuote = () => {
  trackingService.trackClick('hero_quick_quote_submit', {
    has_from: !!quote.from.trim(),
    has_to: !!quote.to.trim(),
    category: quote.what,
    has_date: !!quote.when,
  })

  const query: Record<string, string> = {}
  if (quote.from.trim()) query.od = quote.from.trim()
  if (quote.to.trim()) query.do = quote.to.trim()
  if (quote.what) query.sto = quote.what
  if (quote.when) query.kad = quote.when

  router.push({ path: '/kontakt', query })
}

const trackQuote = () => trackingService.trackClick('hero_contact_button_click')
const trackPhone = () => trackingService.trackClick('hero_phone_click')
const trackWhatsApp = () => trackingService.trackClick('hero_whatsapp_click')
</script>

<template>
  <section class="hero">
    <StreetGridBackground tone="light" :opacity="0.13" />

    <div class="container hero__inner">
      <div class="hero__copy">
        <p class="hero__badge">
          <AppIcon name="clock" :size="16" :stroke-width="2" />
          Radimo {{ site.hoursShort }}, i praznicima. Zagreb i okolica.
        </p>
        <h1 class="hero__title">Selidbe, dostava i prijevoz kombijem po Zagrebu.</h1>
        <p class="hero__lead">
          Više od {{ site.yearsExperience }} godina nosimo, vozimo i dostavljamo. Jasna cijena
          unaprijed, bez skrivenih troškova, i ekipa koja na vaše stvari pazi kao na svoje.
        </p>
        <div class="hero__actions">
          <RouterLink to="/kontakt" class="btn btn-primary" @click="trackQuote">
            Zatraži besplatnu ponudu
          </RouterLink>
          <a :href="site.phoneHref" class="btn btn-ghost" @click="trackPhone">
            <AppIcon name="phone" :size="18" :stroke-width="2" />
            {{ site.phoneDisplay }}
          </a>
        </div>
        <ul class="hero__facts">
          <li>
            <AppIcon name="check" :size="18" :stroke-width="2.5" />{{ site.yearsExperience }}+
            godina iskustva
          </li>
          <li>
            <AppIcon name="check" :size="18" :stroke-width="2.5" />1000+ zadovoljnih klijenata
          </li>
          <li><AppIcon name="check" :size="18" :stroke-width="2.5" />Besplatna procjena</li>
        </ul>
      </div>

      <form class="quick-quote" @submit.prevent="submitQuickQuote">
        <div class="quick-quote__head">
          <h2>Brza procjena u 2 minute</h2>
          <p>Javimo se s cijenom i terminom.</p>
        </div>
        <div class="quick-quote__fields">
          <div class="field">
            <label for="qq-from">Odakle</label>
            <input
              id="qq-from"
              v-model="quote.from"
              type="text"
              placeholder="npr. Trešnjevka, Zagreb"
            />
          </div>
          <div class="field">
            <label for="qq-to">Kamo</label>
            <input id="qq-to" v-model="quote.to" type="text" placeholder="npr. Velika Gorica" />
          </div>
          <div class="field">
            <label for="qq-what">Što prevozimo</label>
            <select id="qq-what" v-model="quote.what">
              <option value="">Odaberite</option>
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>
          <div class="field">
            <label for="qq-when">Kada</label>
            <input id="qq-when" v-model="quote.when" type="date" />
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Pošalji upit</button>
        <p class="quick-quote__note">
          Neobvezujuće. Radije pišete?
          <a
            :href="site.whatsappHref"
            target="_blank"
            rel="noopener noreferrer"
            @click="trackWhatsApp"
          >
            <AppIcon name="whatsapp" :size="16" />
            WhatsApp
          </a>
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background: var(--ink);
  color: #fff;
}

.hero__inner {
  position: relative;
  padding-top: 88px;
  padding-bottom: 96px;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 56px;
  align-items: center;
}

.hero__copy {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
  padding: 8px 14px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: #dce3ee;
}

.hero__title {
  font-size: clamp(46px, 5.6vw, 84px);
  line-height: 0.98;
}

.hero__lead {
  font-size: 20px;
  line-height: 1.5;
  color: var(--on-dark-muted);
  max-width: 560px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero__facts {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 28px;
  padding-top: 8px;
  font-size: 15px;
  font-weight: 500;
  color: #dce3ee;
}

.hero__facts li {
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero__facts svg {
  color: var(--accent);
}

.quick-quote {
  background: var(--surface);
  color: var(--ink);
  border-radius: var(--radius-md);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}

.quick-quote__head {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.quick-quote__head h2 {
  font-size: 32px;
}

.quick-quote__head p {
  color: var(--muted);
}

.quick-quote__fields {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
  gap: 14px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field label {
  font-size: 13px;
  font-weight: 600;
}

.quick-quote__note {
  font-size: 13px;
  color: var(--muted);
  text-align: center;
}

.quick-quote__note a {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  vertical-align: middle;
  color: var(--ink);
  font-weight: 600;
}

.quick-quote__note a:hover {
  color: var(--accent);
}

@media (max-width: 860px) {
  .hero__inner {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
    padding-top: 56px;
    padding-bottom: 64px;
  }

  .hero__actions .btn {
    flex: 1 1 auto;
  }
}
</style>
