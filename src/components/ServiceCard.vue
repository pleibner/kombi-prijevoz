<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
import type { IconName } from '@/data/icons'

defineProps<{
  to: string
  icon: IconName
  title: string
  description: string
}>()
</script>

<template>
  <RouterLink :to="to" class="card service-card">
    <span class="icon-box"><AppIcon :name="icon" /></span>
    <h3 class="service-card__title">{{ title }}</h3>
    <p class="service-card__description">{{ description }}</p>
    <span class="service-card__more">
      Saznajte više
      <AppIcon name="arrow-right" :size="18" :stroke-width="2" />
    </span>
  </RouterLink>
</template>

<style scoped>
.service-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 28px;
  height: 100%;
  text-decoration: none;
  color: inherit;
  transition:
    border-color 0.15s,
    transform 0.15s;
}

.service-card:hover {
  border-color: var(--ink);
  transform: translateY(-2px);
}

.service-card__title {
  font-size: 28px;
}

.service-card__description {
  color: var(--muted);
  flex-grow: 1;
}

.service-card__more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 15px;
}

@media (max-width: 760px) {
  .service-card {
    padding: 22px;
  }
}
</style>
