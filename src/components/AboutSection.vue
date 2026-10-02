<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
import StreetGridBackground from '@/components/StreetGridBackground.vue'
import VanIllustration from '@/components/VanIllustration.vue'
import type { IconName } from '@/data/icons'
import { site } from '@/data/site'

const reasons: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'users',
    title: 'Profesionalizam i iskustvo',
    text: `Više od ${site.yearsExperience} godina u prijevozu, selidbama i dostavi. Svakom zadatku pristupamo s punom pažnjom.`,
  },
  {
    icon: 'shield',
    title: 'Briga i sigurnost',
    text: 'Kvalitetna ambalaža i moderne metode osiguranja. Svaki komad namještaja, paket ili dokument putuje zaštićen.',
  },
  {
    icon: 'tag',
    title: 'Dostupne cijene',
    text: 'Kvalitetna usluga ne mora biti skupa. Konkurentne cijene, transparentno i bez skrivenih troškova.',
  },
]

const stats = [
  { value: '1000+', label: 'zadovoljnih klijenata' },
  { value: `${site.yearsExperience}+`, label: 'godina iskustva' },
  { value: '365', label: 'dana u godini' },
]
</script>

<template>
  <section class="section--tight" aria-labelledby="about-heading">
    <div class="container about">
      <div class="about__visual">
        <StreetGridBackground tone="dark" :opacity="0.1" />
        <VanIllustration class="about__van" />
      </div>

      <div class="about__content">
        <div class="about__heading">
          <p class="eyebrow">Zašto Kombi Transport</p>
          <h2 id="about-heading" class="section-title">
            Ekipa kojoj možete prepustiti i ono najteže.
          </h2>
        </div>

        <ul class="about__reasons">
          <li v-for="reason in reasons" :key="reason.title">
            <span class="about__icon"><AppIcon :name="reason.icon" :size="22" /></span>
            <span class="about__reason">
              <strong>{{ reason.title }}</strong>
              <span>{{ reason.text }}</span>
            </span>
          </li>
        </ul>

        <ul class="about__stats">
          <li v-for="stat in stats" :key="stat.label">
            <span class="about__stat-value">{{ stat.value }}</span>
            <span class="about__stat-label">{{ stat.label }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 56px;
  align-items: center;
}

.about__visual {
  position: relative;
  overflow: hidden;
  background: var(--tint);
  border-radius: var(--radius-lg);
  min-height: 440px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 48px 32px 36px;
}

.about__van {
  position: relative;
  max-width: 520px;
}

.about__content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.about__heading {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.about__reasons {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.about__reasons li {
  display: flex;
  gap: 16px;
}

.about__icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
}

.about__reason {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.about__reason strong {
  font-size: 18px;
}

.about__reason span {
  color: var(--muted);
}

.about__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(140px, 100%), 1fr));
  gap: 16px;
  padding-top: 8px;
  border-top: 1px solid var(--line);
}

.about__stats li {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 16px;
}

.about__stat-value {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 48px;
  line-height: 1;
}

.about__stat-label {
  font-size: 14px;
  color: var(--muted);
}

@media (max-width: 860px) {
  .about {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
  }

  .about__visual {
    min-height: 0;
    padding: 32px 20px 24px;
  }
}
</style>
