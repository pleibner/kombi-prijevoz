<script setup lang="ts">
/**
 * Zagreb city-centre street grid drawn as a quiet line texture.
 * With `vehicles`, a small fleet of vans drives the real streets at night,
 * headlights on, following looped routes with rounded turns.
 */
withDefaults(
  defineProps<{
    tone?: 'light' | 'dark'
    opacity?: number
    vehicles?: boolean
  }>(),
  { tone: 'light', opacity: 0.13, vehicles: false },
)

interface Van {
  id: string
  path: string
  dur: number
  begin: string
  brand?: boolean
}

// Routes follow the roads above: Pavla Hatza, Draškovićeva, Boškovićeva, Savska, Kneza Mislava,
// Trg žrtava fašizma, Račkoga, Palmotićeva, Ilica, Gundulićeva, Zrinjevac, Amruševa, Bauerova, Vlaška.
const vans: Van[] = [
  {
    id: 'a',
    path: 'M300,600 L1376,600 Q1400,600 1400,576 L1400,424 Q1400,400 1376,400 L224,400 Q200,400 194,423 L158,577 Q152,600 176,600 Z',
    dur: 34,
    begin: '0s',
    brand: true,
  },
  {
    id: 'b',
    path: 'M1250,400 L1250,576 Q1250,600 1274,600 L1376,600 Q1400,600 1419,586 L1581,464 Q1600,450 1624,450 L1676,450 Q1700,450 1700,426 L1700,374 Q1700,350 1676,350 L1624,350 Q1600,350 1579,339 L1439,265 Q1418,254 1395,248 L1273,218 Q1250,212 1250,236 Z',
    dur: 20,
    begin: '-7s',
  },
  {
    id: 'c',
    path: 'M300,100 L376,100 Q400,100 400,124 L400,576 Q400,600 376,600 L176,600 Q152,600 158,577 L194,423 Q200,400 200,376 L200,124 Q200,100 224,100 Z',
    dur: 18,
    begin: '-3s',
  },
  {
    id: 'd',
    path: 'M800,300 L800,576 Q800,600 824,600 L926,600 Q950,600 950,576 L950,274 Q950,250 926,250 L824,250 Q800,250 800,274 Z',
    dur: 14,
    begin: '-9s',
  },
  {
    id: 'e',
    path: 'M1500,600 L1805,600 Q1829,600 1829,576 L1829,124 Q1829,100 1805,100 L1424,100 Q1400,100 1400,124 L1400,576 Q1400,600 1424,600 Z',
    dur: 22,
    begin: '-13s',
  },
]
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

    <g v-if="vehicles" class="fleet">
      <defs>
        <radialGradient id="van-beam" cx="0" cy="0.5" r="1">
          <stop offset="0" stop-color="#ffe9a8" stop-opacity="0.5" />
          <stop offset="1" stop-color="#ffe9a8" stop-opacity="0" />
        </radialGradient>
      </defs>
      <g v-for="van in vans" :key="van.id" class="van" :class="{ 'van--brand': van.brand }">
        <path class="van__beam" d="M14,-4 L66,-18 L66,18 L14,4 Z" fill="url(#van-beam)" />
        <rect class="van__body" x="-16" y="-7" width="32" height="14" rx="3" />
        <rect class="van__glass" x="4" y="-6" width="5" height="12" rx="1" />
        <rect class="van__tail" x="-15.5" y="-6" width="2" height="3" rx="0.5" />
        <rect class="van__tail" x="-15.5" y="3" width="2" height="3" rx="0.5" />
        <rect class="van__lamp" x="15" y="-5.5" width="1.6" height="3" />
        <rect class="van__lamp" x="15" y="2.5" width="1.6" height="3" />
        <animateMotion
          :dur="`${van.dur}s`"
          :begin="van.begin"
          :path="van.path"
          repeatCount="indefinite"
          rotate="auto"
        />
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

.van__body {
  fill: #fff;
  opacity: 0.85;
}

.van--brand .van__body {
  fill: var(--accent);
  opacity: 1;
}

.van__glass {
  fill: var(--ink);
  opacity: 0.55;
}

.van__tail {
  fill: #ff5a5a;
}

.van__lamp {
  fill: #ffe9a8;
}

.van__beam {
  opacity: 0.9;
}

@media (prefers-reduced-motion: reduce) {
  .fleet {
    display: none;
  }
}
</style>
