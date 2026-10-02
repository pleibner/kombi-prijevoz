<script setup lang="ts">
const steps = [
  {
    title: 'Pošaljite upit',
    text: 'Ispunite kratki obrazac ili nas nazovite. Recite nam odakle, kamo i što prevozimo.',
  },
  {
    title: 'Potvrdimo cijenu i termin',
    text: 'Javimo se s jasnom ponudom. Bez skrivenih troškova i bez iznenađenja na dan prijevoza.',
  },
  {
    title: 'Dolazimo i obavimo posao',
    text: 'Ekipa stiže u dogovoreno vrijeme, utovari, preveze i istovari. Vi se samo opustite.',
  },
]
</script>

<template>
  <section class="section--tight" aria-labelledby="how-heading">
    <div class="container">
      <div class="card how">
        <div v-reveal class="how__heading">
          <p class="eyebrow">Kako funkcionira</p>
          <h2 id="how-heading" class="section-title">Tri koraka do obavljenog posla.</h2>
        </div>
        <ol class="how__steps">
          <li
            v-for="(step, index) in steps"
            :key="step.title"
            v-reveal="index * 120"
            class="how__step"
          >
            <span class="how__number">0{{ index + 1 }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how {
  padding: 56px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.how__heading {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 640px;
}

.how__steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
  gap: 32px;
}

.how__step {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.how__number {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 64px;
  line-height: 1;
  color: var(--accent);
}

.how__step h3 {
  font-size: 26px;
}

.how__step p {
  color: var(--muted);
}

@media (max-width: 760px) {
  .how {
    padding: 32px 24px;
  }
}
</style>
