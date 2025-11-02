<template>
  <g class="vehicle-on-road" :class="vehicleClass">
    <rect :x="x" :y="y" width="24" height="14" :fill="color" rx="2"/>
    <circle :cx="x + 6" :cy="y + 17" r="3.5" fill="#1f2937"/>
    <circle :cx="x + 18" :cy="y + 17" r="3.5" fill="#1f2937"/>
    <circle :cx="x" :cy="y + 5" r="1.5" fill="#fbbf24"/>
  </g>
</template>

<script setup lang="ts">
defineProps<{
  x: number
  y: number
  color: string
  vehicleClass?: string
}>()
</script>
