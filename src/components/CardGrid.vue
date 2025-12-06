<template>
  <div class="card-grid" :class="{ 'centered': centered, 'scrollable': scrollable }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  centered?: boolean
  scrollable?: boolean
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

.card-grid.scrollable {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(300px, 350px);
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 2rem;
  padding-bottom: 1rem;
  -webkit-overflow-scrolling: touch;
}

.card-grid.scrollable::-webkit-scrollbar {
  height: 8px;
}

.card-grid.scrollable::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.card-grid.scrollable::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.card-grid.scrollable::-webkit-scrollbar-thumb:hover {
  background: #555;
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card-grid.scrollable {
    grid-auto-columns: 50vw;
    gap: 1.5rem;
  }

  .card-grid.scrollable > :deep(*) {
    width: 50vw;
    min-width: 50vw;
    max-width: 50vw;
  }
}
</style>
