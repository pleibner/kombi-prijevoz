<script setup lang="ts">
import { ref, onMounted } from 'vue'
import RemarkItem from '@/components/RemarkItem.vue'
import ButtonPrimary from '@/components/ButtonPrimary.vue'

// Hero section component with dynamic animations and interactive elements
const isVisible = ref(false)
const mousePosition = ref({ x: 0, y: 0 })

const handleMouseMove = (e: MouseEvent) => {
  const hero = e.currentTarget as HTMLElement
  const rect = hero.getBoundingClientRect()
  mousePosition.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}


onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 300)
})
</script>

<template>
  <section
    class="hero"
    @mousemove="handleMouseMove"
    :class="{ 'hero-visible': isVisible }"
  >
    <!-- Map background with roads and vehicles -->
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

    <!-- Main Content -->
    <div class="hero-container">
        <div class="hero-content">
        <!-- Company branding -->
        <div class="brand-section">
          <h1 class="company-name">
            <span class="name-main">Kombi</span>
            <span class="name-accent">Prijevoz</span>
          </h1>
          <p class="company-tagline">Najpouzdaniji prijevoz po najnižim cijenama</p>
            </div>

        <!-- Key services -->
        <div class="services-preview">
          <div class="service-item">
            <span class="service-icon">🚚</span>
            <span class="service-text">Brzi transport</span>
            </div>
          <div class="service-item">
            <span class="service-icon">🏠</span>
            <span class="service-text">Selidbe</span>
            </div>
          <div class="service-item">
            <span class="service-icon">📦</span>
            <span class="service-text">Dostava</span>
            </div>
          </div>


        <!-- Remarks -->
        <div class="hero-remarks">
          <RemarkItem text="Profesionalna usluga" :delay="0.3" />
          <RemarkItem text="Konkurentne cijene" :delay="0.5" />
          <RemarkItem text="Brza reakcija" :delay="0.7" />
          <RemarkItem text="Siguran transport" :delay="0.9" />
            </div>

        <!-- Call to action -->
        <div class="cta-section">
          <ButtonPrimary button-class="hero-btn" show-ripple>Kontaktirajte nas</ButtonPrimary>
          </div>

            </div>
          </div>

    <!-- Enhanced Road animation with parallax -->
    <div class="road-animation" :style="{ transform: `translateY(${mousePosition.y * 0.02}px)` }">
      <div class="road-line"></div>
      <div class="road-cars">
        <div class="car car-1">🚛</div>
        <div class="car car-2">🚚</div>
        <div class="car car-3">📦</div>
    </div>
    </div>

  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #001a44 0%, #1a365d 50%, #2c5282 100%);
  background-size: 400% 400%;
  animation: gradientShift 12s ease-in-out infinite;
  color: white;
  padding: 4rem 2rem;
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Hero visibility animation */
.hero-visible .hero-container {
  animation: slideInFromRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.hero-visible .map-background {
  animation: mapFadeIn 2s ease-out forwards;
}

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

/* Main Content Styles */
.hero-container {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  width: 100%;
}

.brand-section {
  margin-bottom: 2rem;
}

.company-name {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.name-main {
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.name-accent {
  color: #ef4444;
  text-shadow: 0 4px 8px rgba(239, 68, 68, 0.3);
}

.company-tagline {
  font-size: 1.3rem;
  opacity: 0.9;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin: 0;
}

.services-preview {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1.25rem;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.service-item:hover {
  transform: translateY(-3px);
}

.service-icon {
  font-size: 1.5rem;
}

.service-text {
  font-weight: 500;
  opacity: 0.95;
}


.cta-section {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2.5rem 0;
  flex-wrap: wrap;
}


.hero-remarks {
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}


@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bgElementsFadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Enhanced Road Animation */
.road-animation {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  height: 40px;
  background: transparent;
  z-index: 5;
  border-top: 3px solid rgba(255, 255, 255, 0.3);
  border-bottom: 3px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.1s ease-out;
}

.road-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 4px;
  background: repeating-linear-gradient(
    to right,
    rgba(255, 255, 255, 0.8) 0px 3vw,
    rgba(239, 68, 68, 0.6) 3vw 3.5vw,
    transparent 3.5vw 6vw
  );
  transform: translateY(-50%);
  animation: moveLine 2s linear infinite;
}

@keyframes moveLine {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: 6vw 0px;
  }
}

.road-cars {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 20px;
  transform: translateY(-50%);
}

.car {
  position: absolute;
  font-size: 1.5rem;
  animation: driveAcross 8s linear infinite;
  opacity: 0.8;
}

.car-1 {
  animation-delay: 0s;
}

.car-2 {
  animation-delay: 2.5s;
}

.car-3 {
  animation-delay: 5s;
}

@keyframes driveAcross {
  0% {
    left: -10%;
    transform: scale(0.8);
  }
  10% {
    transform: scale(1);
  }
  90% {
    transform: scale(1);
  }
  100% {
    left: 110%;
    transform: scale(0.8);
  }
}

.hero-left {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  animation: vehicleFloat 6s ease-in-out infinite;
}

@keyframes vehicleFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(1deg); }
}

.hero-vehicle {
  position: relative;
  width: 320px;
  height: 220px;
  transform-style: preserve-3d;
  filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.5));
}

.vehicle-body {
  position: relative;
  width: 100%;
  height: 100%;
  animation: vehicleIdle 5s ease-in-out infinite;
}

@keyframes vehicleIdle {
  0%, 100% { transform: scale(1) rotateY(0deg); }
  50% { transform: scale(1.03) rotateY(1deg); }
}

/* Enhanced Cabin Design */
.vehicle-cabin {
  position: absolute;
  top: 45px;
  left: 55px;
  width: 85px;
  height: 70px;
  background: linear-gradient(145deg, #1f2937 0%, #374151 50%, #4b5563 100%);
  border-radius: 10px 10px 2px 2px;
  box-shadow:
    inset 0 3px 6px rgba(0, 0, 0, 0.4),
    0 4px 8px rgba(0, 0, 0, 0.3);
  border: 2px solid #6b7280;
  border-bottom: none;
}

.vehicle-cabin::before {
  content: '';
  position: absolute;
  top: 12px;
  left: 8px;
  right: 8px;
  height: 25px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(37, 99, 235, 0.6) 100%);
  border-radius: 3px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
}

.vehicle-cabin::after {
  content: '';
  position: absolute;
  top: 40px;
  left: 8px;
  right: 8px;
  height: 12px;
  background: linear-gradient(135deg, rgba(75, 85, 99, 0.8) 0%, rgba(55, 65, 81, 0.9) 100%);
  border-radius: 2px;
}

/* Driver's Side Window */
.vehicle-cabin .driver-window {
  position: absolute;
  top: 12px;
  left: 35px;
  width: 20px;
  height: 20px;
  background: rgba(135, 206, 235, 0.3);
  border-radius: 2px;
  border: 1px solid rgba(107, 114, 128, 0.5);
}

/* Enhanced Cargo Area */
.vehicle-cargo {
  position: absolute;
  top: 45px;
  right: 15px;
  width: 150px;
  height: 85px;
  background: linear-gradient(145deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%);
  border-radius: 0 15px 15px 0;
  box-shadow:
    inset 0 3px 6px rgba(0, 0, 0, 0.4),
    0 4px 8px rgba(0, 0, 0, 0.3);
  border: 2px solid #dc2626;
  border-left: none;
  overflow: hidden;
}

.vehicle-cargo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.1) 75%,
    transparent 100%);
  background-size: 20px 20px;
}

.vehicle-cargo::after {
  content: '';
  position: absolute;
  top: 20px;
  left: 10px;
  right: 10px;
  height: 6px;
  background: repeating-linear-gradient(
    to right,
    rgba(255, 255, 255, 0.4) 0px,
    rgba(255, 255, 255, 0.4) 10px,
    transparent 10px,
    transparent 20px
  );
  border-radius: 2px;
}

/* Enhanced Wheels */
.vehicle-wheels {
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
}

.wheel {
  position: absolute;
  width: 28px;
  height: 28px;
  background: radial-gradient(circle at 30% 30%, #f8fafc 20%, #1f2937 40%, #374151 80%);
  border-radius: 50%;
  border: 4px solid #4b5563;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.5),
    inset 0 2px 4px rgba(0, 0, 0, 0.3);
}

.wheel::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  background: radial-gradient(circle, #6b7280 30%, #4b5563 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.5);
}

.wheel::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  background: #9ca3af;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.7);
}

.wheel-front {
  left: 65px;
  animation: wheelRotation 1.5s linear infinite;
}

.wheel-rear {
  right: 55px;
  animation: wheelRotation 1.5s linear infinite;
  animation-delay: 0.15s;
}

@keyframes wheelRotation {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Enhanced Details */
.vehicle-details {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.headlights {
  position: absolute;
  top: 75px;
  left: 50px;
  width: 15px;
  height: 10px;
  background: radial-gradient(ellipse, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
  border-radius: 50%;
  box-shadow:
    0 0 12px rgba(251, 191, 36, 0.8),
    0 0 24px rgba(245, 158, 11, 0.4);
  animation: headlightGlow 2.5s ease-in-out infinite alternate;
}

@keyframes headlightGlow {
  from {
    opacity: 0.8;
    box-shadow: 0 0 12px rgba(251, 191, 36, 0.8), 0 0 24px rgba(245, 158, 11, 0.4);
  }
  to {
    opacity: 1;
    box-shadow: 0 0 20px rgba(251, 191, 36, 1), 0 0 40px rgba(245, 158, 11, 0.6);
  }
}

.grille {
  position: absolute;
  top: 85px;
  left: 30px;
  width: 25px;
  height: 18px;
  background: linear-gradient(to bottom,
    rgba(75, 85, 99, 0.9) 0%,
    rgba(55, 65, 81, 1) 50%,
    rgba(75, 85, 99, 0.9) 100%);
  border-radius: 3px;
  background-image: repeating-linear-gradient(
    to right,
    transparent 0px,
    transparent 3px,
    rgba(107, 114, 128, 0.5) 3px,
    rgba(107, 114, 128, 0.5) 6px
  );
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* Side Mirrors */
.vehicle-mirrors {
  position: absolute;
  top: 65px;
  left: 45px;
  width: 6px;
  height: 12px;
  background: linear-gradient(135deg, #4b5563 0%, #6b7280 100%);
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.vehicle-mirrors::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border: 1px solid #9ca3af;
  border-radius: 2px;
}

/* Exhaust Pipe */
.exhaust-pipe {
  position: absolute;
  bottom: 35px;
  right: 10px;
  width: 8px;
  height: 20px;
  background: linear-gradient(to bottom, #4b5563 0%, #374151 100%);
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.5);
}

.exhaust-pipe::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 1px;
  right: 1px;
  height: 6px;
  background: radial-gradient(ellipse, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  animation: exhaustSmoke 1s ease-in-out infinite alternate;
}

@keyframes exhaustSmoke {
  from { opacity: 0.3; transform: scaleY(1); }
  to { opacity: 0.7; transform: scaleY(1.2); }
}

.hero-right {
  flex: 1;
}

.hero-title {
  margin-bottom: 1.5rem;
  font-weight: bold;
  line-height: 1.1;
}

.title-main {
  display: block;
  font-size: 3.8rem;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: titleGlow 3s ease-in-out infinite alternate;
}

.title-accent {
  display: block;
  font-size: 1.8rem;
  color: #ef4444;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-top: 0.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  animation: accentPulse 2s ease-in-out infinite;
}

@keyframes titleGlow {
  from { text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4); }
  to { text-shadow: 3px 3px 12px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2); }
}

@keyframes accentPulse {
  0%, 100% { opacity: 0.9; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}

.hero-subtitle {
  font-size: 1.6rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: 500;
  letter-spacing: 0.5px;
}

/* Enhanced Statistics Banner */
.hero-stats-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 3rem 0;
  padding: 2rem 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.stat-item {
  text-align: center;
  position: relative;
  padding: 1rem;
  border-radius: 10px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.1);
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: bold;
  color: #ef4444;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  animation: numberPulse 2s ease-in-out infinite;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.95;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #e2e8f0;
  font-weight: 600;
}

.stat-divider {
  color: rgba(239, 68, 68, 0.6);
  font-size: 2rem;
  font-weight: 300;
  background: linear-gradient(45deg, transparent 40%, rgba(239, 68, 68, 0.6) 50%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes numberPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Interactive CTA Section */
.hero-cta-section {
  margin-top: 3rem;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}


.cta-subtitle {
  text-align: center;
  font-size: 1.1rem;
  opacity: 0.9;
  margin-top: 1.5rem;
  font-style: italic;
  color: #cbd5e1;
  letter-spacing: 0.5px;
}

.remark-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  opacity: 0;
  transform: translateY(20px) scale(0.9);
  animation: remarkSlideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.8rem 1.2rem;
  border-radius: 25px;
  border-left: 4px solid #ef4444;
  transition: all 0.3s ease;
}

.remark-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(10px) scale(1.02);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.remark-item:nth-child(1) { animation-delay: 0.3s; }
.remark-item:nth-child(2) { animation-delay: 0.5s; }
.remark-item:nth-child(3) { animation-delay: 0.7s; }
.remark-item:nth-child(4) { animation-delay: 0.9s; }

@keyframes remarkSlideIn {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.checkmark {
  color: #ef4444;
  font-size: 1.4rem;
  font-weight: bold;
  background: rgba(239, 68, 68, 0.2);
  padding: 0.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  transition: all 0.3s ease;
}

.remark-item:hover .checkmark {
  background: rgba(239, 68, 68, 0.4);
  transform: rotate(360deg) scale(1.1);
}


/* Enhanced Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
    min-height: 90vh;
    flex-direction: column;
  }

  .hero-container {
    padding: 0 1rem;
  }

  .company-name {
    font-size: clamp(2.5rem, 12vw, 4rem);
  }

  .company-tagline {
    font-size: 1.1rem;
  }

  .services-preview {
    gap: 1rem;
  }

  .service-item {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }


  .cta-section {
    flex-direction: column;
    align-items: center;
  }

  .hero-remarks {
    gap: 0.6rem;
  }

  /* Adjust map background for mobile */
  .road-network {
    opacity: 0.4;
  }

  .stat-item {
    padding: 0.8rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .stat-divider {
    display: none;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }

  .cta-subtitle {
    font-size: 1rem;
    margin-top: 1rem;
    padding: 0 1rem;
  }

  .remark-item {
    font-size: 1rem;
    padding: 0.6rem 1rem;
    margin-bottom: 0.8rem;
  }


  /* Simplified background elements on mobile */
  .bg-circle {
    opacity: 0.3;
  }

  .bg-triangle {
    opacity: 0.2;
  }

  /* Road animation mobile */
  .road-animation {
    height: 30px;
    border-top-width: 2px;
    border-bottom-width: 2px;
    bottom: 5px;
  }

  .road-line {
    height: 3px;
  }

  .car {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 1.5rem 0.8rem;
  }

  .company-name {
    font-size: clamp(2rem, 15vw, 3rem);
  }

  .company-tagline {
    font-size: 1rem;
  }

  .service-item {
    padding: 0.5rem 0.8rem;
  }


  .hero-remarks {
    gap: 0.4rem;
  }
}
</style>
