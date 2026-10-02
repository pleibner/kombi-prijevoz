<script setup lang="ts">
import ContactInfo from '@/components/ContactInfo.vue'
import { serviceAreas } from '@/data/site'
</script>

<template>
  <section class="coverage" aria-labelledby="coverage-heading">
    <div class="container coverage__inner">
      <div class="coverage__copy">
        <div class="coverage__heading">
          <p class="eyebrow coverage__eyebrow">Područje rada</p>
          <h2 id="coverage-heading" class="section-title">
            Zagreb i okolica, a po dogovoru cijela Hrvatska.
          </h2>
        </div>
        <p class="coverage__lead">
          Najčešće vozimo unutar 50 km od Zagreba. Za dulje relacije javite nam se i dogovorit ćemo
          termin i cijenu.
        </p>
        <ul class="coverage__areas">
          <li v-for="area in serviceAreas" :key="area">{{ area }}</li>
        </ul>
      </div>

      <div class="coverage__card">
        <h3>Kontakt i radno vrijeme</h3>
        <ContactInfo variant="dark" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.coverage {
  background: var(--ink);
  color: #fff;
  padding: 96px 0;
}

.coverage__inner {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 56px;
  align-items: center;
}

.coverage__copy {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.coverage__heading {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.coverage__eyebrow {
  color: var(--signal);
}

.coverage__lead {
  color: var(--on-dark-muted);
  font-size: 17px;
  max-width: 520px;
}

.coverage__areas {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.coverage__areas li {
  padding: 8px 14px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
}

.coverage__card {
  background: var(--ink-2);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-md);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.coverage__card h3 {
  font-size: 28px;
}

@media (max-width: 860px) {
  .coverage {
    padding: 64px 0;
  }

  .coverage__inner {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
  }
}
</style>
