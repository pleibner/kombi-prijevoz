<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  lead?: string
}>()
</script>

<template>
  <div class="section-heading">
    <div class="section-heading__main">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h2 class="section-title">{{ title }}</h2>
    </div>
    <p v-if="lead" class="lead section-heading__lead">{{ lead }}</p>
  </div>
</template>

<style scoped>
.section-heading {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px 40px;
}

.section-heading__main {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 680px;
}

.section-heading__lead {
  max-width: 380px;
}
</style>
