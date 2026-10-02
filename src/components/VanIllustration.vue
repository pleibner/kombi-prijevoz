<script setup lang="ts">
/**
 * Flat side view of the brand van. `state` drives the entrance:
 * 'static' shows it parked, 'pending' keeps it off-stage, 'driving' rolls it in.
 */
withDefaults(
  defineProps<{
    state?: 'static' | 'pending' | 'driving'
  }>(),
  { state: 'static' },
)
</script>

<template>
  <svg
    class="van"
    :class="`van--${state}`"
    role="img"
    aria-label="Ilustracija bijelog kombija s natpisom Kombi Transport"
    viewBox="0 0 560 260"
  >
    <ellipse cx="280" cy="238" rx="236" ry="9" class="van__shadow" />
    <g class="van__chassis">
      <path
        d="M48,208 L48,78 Q48,60 66,60 L348,60 Q368,60 379,75 L428,138 Q438,151 438,167 L438,208 Z"
        class="van__body"
      />
      <path d="M50,154 L436,154 L436,170 L50,170 Z" class="van__stripe" />
      <path d="M322,76 L356,76 Q366,76 372,84 L414,138 L322,138 Z" class="van__window" />
      <path d="M312,78 L312,198" class="van__seam" />
      <path d="M70,78 L70,198" class="van__seam van__seam--light" />
      <rect x="290" y="126" width="16" height="5" rx="2.5" class="van__ink" />
      <rect x="430" y="104" width="12" height="18" rx="3" class="van__ink" />
      <rect x="430" y="178" width="8" height="14" rx="2" class="van__headlight" />
      <rect x="48" y="178" width="8" height="14" rx="2" class="van__stripe" />
      <rect x="40" y="202" width="406" height="12" rx="4" class="van__ink2" />
      <path d="M84,208 A38,38 0 0 1 160,208 Z" class="van__ink2" />
      <path d="M322,208 A38,38 0 0 1 398,208 Z" class="van__ink2" />
      <text x="78" y="134" textLength="226" lengthAdjust="spacingAndGlyphs" class="van__text">
        KOMBI
        <tspan class="van__text--accent">TRANSPORT</tspan>
      </text>
    </g>
    <g class="van__wheel">
      <circle cx="122" cy="208" r="29" class="van__ink" />
      <circle cx="122" cy="208" r="13" class="van__rim" />
      <path d="M122,197 L122,219 M111,208 L133,208" class="van__spoke" />
      <circle cx="122" cy="208" r="5" class="van__ink" />
    </g>
    <g class="van__wheel">
      <circle cx="360" cy="208" r="29" class="van__ink" />
      <circle cx="360" cy="208" r="13" class="van__rim" />
      <path d="M360,197 L360,219 M349,208 L371,208" class="van__spoke" />
      <circle cx="360" cy="208" r="5" class="van__ink" />
    </g>
  </svg>
</template>

<style scoped>
.van {
  width: 100%;
  height: auto;
}

.van__shadow {
  fill: var(--ink);
  opacity: 0.14;
}

.van__body {
  fill: #fff;
  stroke: var(--ink);
  stroke-width: 4;
  stroke-linejoin: round;
}

.van__stripe {
  fill: var(--accent);
}

.van__window {
  fill: var(--ink-2);
}

.van__seam {
  stroke: var(--ink);
  stroke-width: 3;
  opacity: 0.35;
}

.van__seam--light {
  opacity: 0.2;
}

.van__ink {
  fill: var(--ink);
}

.van__ink2 {
  fill: var(--ink-2);
}

.van__headlight {
  fill: var(--signal);
}

.van__rim {
  fill: #d9dfe8;
}

.van__spoke {
  stroke: var(--ink);
  stroke-width: 2.5;
  stroke-linecap: round;
}

.van__text {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 34px;
  letter-spacing: 1px;
  fill: var(--ink);
}

.van__text--accent {
  fill: var(--accent);
}

.van__wheel {
  transform-box: fill-box;
  transform-origin: center;
}

/* Entrance: the van rolls in from the left and settles, wheels spinning down */
.van--pending {
  transform: translateX(-120%);
  opacity: 0;
}

.van--driving {
  animation: van-drive 1.6s cubic-bezier(0.2, 0.8, 0.25, 1) both;
}

.van--driving .van__chassis {
  animation: van-bounce 1.6s ease-out both;
}

.van--driving .van__wheel {
  animation: van-wheel 1.6s cubic-bezier(0.2, 0.8, 0.25, 1) both;
}

@keyframes van-drive {
  from {
    transform: translateX(-120%);
    opacity: 1;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes van-bounce {
  0%,
  60% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(3px);
  }
  88% {
    transform: translateY(-1.5px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes van-wheel {
  from {
    transform: rotate(-900deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
