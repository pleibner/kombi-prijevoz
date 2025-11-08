<template>
  <div class="card-grid" :class="{ 'centered': centered }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  centered?: boolean
}>()
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  place-items: stretch;
}

.card-grid.centered {
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
