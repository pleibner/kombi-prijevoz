<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
import { faqItems } from '@/data/faq'
</script>

<template>
  <section class="section" aria-labelledby="faq-heading">
    <div class="container faq">
      <div class="faq__heading">
        <p class="eyebrow">Česta pitanja</p>
        <h2 id="faq-heading" class="section-title">Ono što nas najčešće pitate.</h2>
      </div>

      <div class="faq__grid">
        <details v-for="item in faqItems" :key="item.question" class="faq__item">
          <summary>
            <h3>{{ item.question }}</h3>
            <AppIcon name="chevron-down" :size="20" :stroke-width="2" class="faq__chevron" />
          </summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.faq__heading {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 640px;
}

.faq__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(360px, 100%), 1fr));
  gap: 0 48px;
}

.faq__item {
  border-top: 2px solid var(--ink);
  padding: 20px 0;
}

.faq__item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
  list-style: none;
  min-height: 44px;
}

.faq__item summary::-webkit-details-marker {
  display: none;
}

.faq__item h3 {
  font-size: 24px;
}

.faq__chevron {
  flex-shrink: 0;
  transition: transform 0.2s;
}

.faq__item[open] .faq__chevron {
  transform: rotate(180deg);
}

.faq__item p {
  padding-top: 10px;
  color: var(--muted);
  max-width: 60ch;
}
</style>
