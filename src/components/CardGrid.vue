<script setup lang="ts">
defineProps<{
  centered?: boolean
}>()
</script>

<template>
  <div class="card-grid" :class="{ 'card-grid--centered': centered }">
    <slot></slot>
  </div>
</template>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
  gap: 20px;
}

.card-grid--centered {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
