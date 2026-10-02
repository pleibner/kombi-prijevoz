<script setup lang="ts">
import { computed } from 'vue'
import { icons, type IconName } from '@/data/icons'

const props = withDefaults(
  defineProps<{
    name: IconName
    size?: number
    strokeWidth?: number
  }>(),
  { size: 24, strokeWidth: 1.75 },
)

const icon = computed(() => icons[props.name])
</script>

<template>
  <svg
    aria-hidden="true"
    focusable="false"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    :fill="icon.filled ? 'currentColor' : 'none'"
    :stroke="icon.filled ? 'none' : 'currentColor'"
    :stroke-width="icon.filled ? 0 : strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="app-icon"
  >
    <path v-for="(d, index) in icon.paths" :key="index" :d="d" />
  </svg>
</template>

<style scoped>
.app-icon {
  flex-shrink: 0;
}
</style>
