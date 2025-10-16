<template>
  <div class="map-background">
    <!-- Road Network -->
    <svg class="road-network" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <!-- Main roads -->
      <path class="road main-road-1" d="M100,200 L900,200" stroke-width="8" fill="none"/>
      <path class="road main-road-2" d="M200,100 L200,900" stroke-width="8" fill="none"/>
      <path class="road main-road-3" d="M300,300 L700,300" stroke-width="6" fill="none"/>
      <path class="road main-road-4" d="M400,150 L400,850" stroke-width="6" fill="none"/>
      <path class="road connecting-road-1" d="M200,200 L300,300" stroke-width="4" fill="none"/>
      <path class="road connecting-road-2" d="M400,200 L400,300" stroke-width="4" fill="none"/>
      <path class="road connecting-road-3" d="M200,400 L400,400" stroke-width="4" fill="none"/>

      <!-- Vehicles on roads -->
      <g class="moving-vehicles">
        <g class="vehicle-on-road vehicle-1">
          <rect x="150" y="190" width="24" height="14" fill="#ef4444" rx="2"/>
          <circle cx="156" cy="207" r="3.5" fill="#1f2937"/>
          <circle cx="168" cy="207" r="3.5" fill="#1f2937"/>
          <!-- Headlights -->
          <circle cx="150" cy="195" r="1.5" fill="#fbbf24"/>
        </g>
        <g class="vehicle-on-road vehicle-2">
          <rect x="390" y="130" width="24" height="14" fill="#3b82f6" rx="2"/>
          <circle cx="396" cy="145" r="3.5" fill="#1f2937"/>
          <circle cx="408" cy="145" r="3.5" fill="#1f2937"/>
          <circle cx="390" cy="135" r="1.5" fill="#fbbf24"/>
        </g>
        <g class="vehicle-on-road vehicle-3">
          <rect x="280" y="290" width="24" height="14" fill="#10b981" rx="2"/>
          <circle cx="286" cy="305" r="3.5" fill="#1f2937"/>
          <circle cx="298" cy="305" r="3.5" fill="#1f2937"/>
          <circle cx="280" cy="295" r="1.5" fill="#fbbf24"/>
        </g>
        <g class="vehicle-on-road vehicle-4">
          <rect x="500" y="200" width="24" height="14" fill="#f59e0b" rx="2"/>
          <circle cx="506" cy="215" r="3.5" fill="#1f2937"/>
          <circle cx="518" cy="215" r="3.5" fill="#1f2937"/>
          <circle cx="500" cy="205" r="1.5" fill="#fbbf24"/>
        </g>
        <g class="vehicle-on-road vehicle-5">
          <rect x="100" y="400" width="24" height="14" fill="#8b5cf6" rx="2"/>
          <circle cx="106" cy="415" r="3.5" fill="#1f2937"/>
          <circle cx="118" cy="415" r="3.5" fill="#1f2937"/>
          <circle cx="100" cy="405" r="1.5" fill="#fbbf24"/>
        </g>
        <g class="vehicle-on-road vehicle-6">
          <rect x="650" y="100" width="24" height="14" fill="#ec4899" rx="2"/>
          <circle cx="656" cy="115" r="3.5" fill="#1f2937"/>
          <circle cx="668" cy="115" r="3.5" fill="#1f2937"/>
          <circle cx="650" cy="105" r="1.5" fill="#fbbf24"/>
        </g>
      </g>

      <!-- Road intersections and markers -->
      <g class="road-features">
        <circle cx="200" cy="200" r="8" fill="none" stroke="#ef4444" stroke-width="2" opacity="0.6"/>
        <circle cx="400" cy="300" r="6" fill="none" stroke="#3b82f6" stroke-width="1.5" opacity="0.4"/>
        <circle cx="300" cy="150" r="5" fill="none" stroke="#10b981" stroke-width="1" opacity="0.5"/>
      </g>
    </svg>

    <!-- Road markers and intersections -->
    <div class="road-markers">
      <div class="marker marker-1"></div>
      <div class="marker marker-2"></div>
      <div class="marker marker-3"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Road network background component with animated roads and vehicles
</script>

<style scoped>
/* Map Background with Roads and Vehicles */
.map-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: 0;
  z-index: 1;
  animation: mapFadeIn 2s ease-out forwards;
}

.road-network {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
}

.road {
  stroke: rgba(255, 255, 255, 0.8);
  stroke-linecap: round;
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.3));
  animation: roadPulse 4s ease-in-out infinite;
}

.main-road-1 { animation-delay: 0s; }
.main-road-2 { animation-delay: 1s; }
.main-road-3 { animation-delay: 2s; }
.main-road-4 { animation-delay: 3s; }

@keyframes roadPulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 0.9; }
}

/* Enhanced Vehicle Movement */
.moving-vehicles {
  animation: vehiclesFlow 12s linear infinite;
}

@keyframes vehiclesFlow {
  0% { transform: translateX(0) translateY(0); }
  25% { transform: translateX(30px) translateY(2px); }
  50% { transform: translateX(60px) translateY(-1px); }
  75% { transform: translateX(90px) translateY(1px); }
  100% { transform: translateX(120px) translateY(0); }
}

/* Road features animation */
.road-features {
  animation: roadFeaturesPulse 8s ease-in-out infinite;
}

@keyframes roadFeaturesPulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
}

/* Enhanced road pulsing - individual delays already set above */

@keyframes roadPulse {
  0%, 100% { opacity: 0.6; stroke-width: 8; }
  50% { opacity: 0.9; stroke-width: 10; }
}

/* Road markers instead of floating icons */
.road-markers {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.marker {
  position: absolute;
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, #ef4444 0%, rgba(239, 68, 68, 0.3) 70%);
  border-radius: 50%;
  animation: markerPulse 4s ease-in-out infinite;
}

.marker-1 {
  top: 25%;
  left: 20%;
  animation-delay: 0s;
}

.marker-2 {
  top: 65%;
  right: 25%;
  animation-delay: 1s;
  background: radial-gradient(circle, #3b82f6 0%, rgba(59, 130, 246, 0.3) 70%);
}

.marker-3 {
  bottom: 30%;
  left: 30%;
  animation-delay: 2s;
  background: radial-gradient(circle, #10b981 0%, rgba(16, 185, 129, 0.3) 70%);
}

@keyframes markerPulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.5); opacity: 1; }
}

@keyframes mapFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  /* Adjust map background for mobile */
  .road-network {
    opacity: 0.4;
  }
}
</style>
