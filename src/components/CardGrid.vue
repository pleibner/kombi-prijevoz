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
  display: flex;
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

.card-grid.scrollable > :deep(*) {
  flex: 0 0 calc(33.333% - 1.333rem);
  min-width: 300px;
  max-width: 350px;
}

@media (max-width: 1024px) {
  .card-grid.scrollable > :deep(*) {
    flex: 0 0 calc(50% - 1rem);
  }
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card-grid.scrollable {
    gap: 1.5rem;
  }

  .card-grid.scrollable > :deep(*) {
    flex: 0 0 calc(100% - 2rem);
    min-width: 280px;
  }
}
</style>
