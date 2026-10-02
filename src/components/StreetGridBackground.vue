<script setup lang="ts">
/**
 * Zagreb city-centre street grid drawn as a quiet line texture.
 * Replaces the animated road network of the previous design.
 */
withDefaults(
  defineProps<{
    tone?: 'light' | 'dark'
    opacity?: number
  }>(),
  { tone: 'light', opacity: 0.13 },
)
</script>

<template>
  <svg
    aria-hidden="true"
    focusable="false"
    class="street-grid"
    viewBox="0 0 2000 1000"
    preserveAspectRatio="xMidYMid slice"
  >
    <g
      fill="none"
      :stroke="tone === 'light' ? '#ffffff' : '#0e1a2b'"
      stroke-linecap="round"
      :opacity="opacity"
    >
      <g stroke-width="3">
        <path d="M200,400 L1600,400" />
        <path d="M100,600 L1400,600" />
        <path d="M200,100 L200,400" />
        <path d="M200,400 L55,1000" />
        <path d="M0,100 L400,100" />
        <path d="M400,100 L400,250" />
        <path d="M200,300 L400,250" />
        <path d="M1400,400 L1400,1000" />
        <path d="M1400,600 L1600,450" />
        <rect x="1600" y="350" width="100" height="100" rx="15" />
        <path d="M1250,50 L1400,100 L2000,100" />
        <path d="M1700,395 L2000,395" />
        <path d="M1700,450 L2000,782" />
        <circle cx="1829" cy="600" r="15" />
        <path d="M1950,727 L2000,677" />
      </g>
      <g stroke-width="2">
        <path d="M400,250 L400,1000" />
        <path d="M0,200 L400,200" />
        <path d="M0,300 L200,300" />
        <path d="M1418,254 L1612,356" />
        <path d="M600,300 L600,1000" />
        <path d="M600,300 L800,300" />
        <path d="M800,250 L800,1000" />
        <path d="M950,250 L950,1000" />
        <path d="M1070,250 L1070,1000" />
        <path d="M1250,50 L1250,1000" />
        <path d="M750,250 L1250,250" />
        <path d="M950,300 L1550,300" />
        <path d="M1400,250 L1400,400" />
        <path d="M750,250 L750,300 Q760,350 700,400" />
        <path d="M700,400 L700,1000" />
        <path d="M1550,300 L1550,100" />
        <path d="M1829,615 L1829,100" />
        <path d="M1650,100 L1650,50" />
        <path d="M1950,100 L1950,50" />
        <path d="M267,100 L267,50" />
      </g>
      <g stroke-width="1.25">
        <path d="M1400,250 L2000,250" />
        <path d="M400,100 L800,100" />
        <path d="M600,100 L600,300" />
        <path d="M400,200 L600,200" />
        <path d="M600,250 L800,250" />
        <path d="M800,100 L1400,250" />
        <path d="M800,250 L800,100" />
        <path d="M1070,467 L1250,467" />
        <path d="M950,500 L1070,500" />
        <path d="M800,500 L700,500" />
        <path d="M600,467 L700,467" />
        <path d="M300,275 L300,1000" />
        <path d="M200,400 L200,1000" />
        <path d="M500,600 L500,1000" />
        <path d="M950,700 L1400,700" />
        <path d="M1400,100 L1000,100" />
        <path d="M1400,600 L1950,600" />
        <path d="M1715,525 L1715,1000" />
        <path d="M1570,525 L1570,1000" />
      </g>
    </g>
  </svg>
</template>

<style scoped>
.street-grid {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
