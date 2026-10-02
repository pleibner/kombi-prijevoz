<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
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
  { value: 1000, suffix: '+', label: 'zadovoljnih klijenata' },
  { value: site.yearsExperience, suffix: '+', label: 'godina iskustva' },
  { value: 365, suffix: '', label: 'dana u godini' },
]

// Rendered values: final numbers on the server and without JS, counted up on screen.
const shown = ref(stats.map((stat) => stat.value))
const vanState = ref<'static' | 'pending' | 'driving'>('static')
const visualEl = ref<HTMLElement | null>(null)
const statsEl = ref<HTMLElement | null>(null)

let observers: IntersectionObserver[] = []
let frame = 0

const countUp = () => {
  const duration = 1400
  const start = performance.now()
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - t, 3)
    shown.value = stats.map((stat) => Math.round(stat.value * eased))
    if (t < 1) frame = requestAnimationFrame(tick)
  }
  frame = requestAnimationFrame(tick)
}

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced || !('IntersectionObserver' in window)) return

  const belowFold = (el: HTMLElement | null) =>
    !!el && el.getBoundingClientRect().top > window.innerHeight

  if (belowFold(visualEl.value)) {
    vanState.value = 'pending'
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          vanState.value = 'driving'
          io.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(visualEl.value as HTMLElement)
    observers.push(io)
  }

  if (belowFold(statsEl.value)) {
    shown.value = stats.map(() => 0)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          countUp()
          io.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    io.observe(statsEl.value as HTMLElement)
    observers.push(io)
  }
})

onBeforeUnmount(() => {
  observers.forEach((io) => io.disconnect())
  observers = []
  cancelAnimationFrame(frame)
})
</script>

<template>
  <section class="section--tight" aria-labelledby="about-heading">
    <div class="container about">
      <div ref="visualEl" class="about__visual">
        <StreetGridBackground tone="dark" :opacity="0.1" />
        <VanIllustration class="about__van" :state="vanState" />
      </div>

      <div class="about__content">
        <div v-reveal class="about__heading">
          <p class="eyebrow">Zašto Kombi Transport</p>
          <h2 id="about-heading" class="section-title">
            Ekipa kojoj možete prepustiti i ono najteže.
          </h2>
        </div>

        <ul class="about__reasons">
          <li v-for="(reason, index) in reasons" :key="reason.title" v-reveal="index * 110">
            <span class="about__icon"><AppIcon :name="reason.icon" :size="22" /></span>
            <span class="about__reason">
              <strong>{{ reason.title }}</strong>
              <span>{{ reason.text }}</span>
            </span>
          </li>
        </ul>

        <ul ref="statsEl" class="about__stats">
          <li v-for="(stat, index) in stats" :key="stat.label">
            <span class="about__stat-value">{{ shown[index] }}{{ stat.suffix }}</span>
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
  font-variant-numeric: tabular-nums;
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
