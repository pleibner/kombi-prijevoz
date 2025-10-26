<template>
  <div class="map-background">
    <!-- Road Network -->
    <svg class="road-network" viewBox="0 0 2000 1000" xmlns="http://www.w3.org/2000/svg">
      <path class="road main-road-1" d="M200,600 L1600,600" stroke-width="12" fill="none"/> <!-- Klaićeva, Hebrangova, Boškovićeva -->
      <path class="road main-road-2" d="M100,800 L1400,800" stroke-width="12" fill="none"/> <!-- Pavla Hatza -->
      <path class="road main-road-3" d="M200,200 L200,600" stroke-width="12" fill="none"/> <!-- Frankopanska -->
      <path class="road main-road-4" d="M200,600 L55,990" stroke-width="12" fill="none"/> <!-- Savska -->
      <path class="road main-road-5" d="M0,200 L400,200" stroke-width="12" fill="none"/> <!-- Ilica -->
      <path class="road main-road-6" d="M400,200 L400,450" stroke-width="12" fill="none"/> <!-- Gundulićeva -->
      <path class="road main-road-7" d="M200,500 L400,450" stroke-width="12" fill="none"/> <!-- Masarykova -->
      <path class="road main-road-8" d="M1400,600 L1400,990" stroke-width="12" fill="none"/> <!-- Draškovićeva jug -->
      <path class="road main-road-9" d="M1400,800 L1600,650" stroke-width="12" fill="none"/> <!-- Kneza Mislava -->
      <rect class="road main-road-10" x=1600 y=550 width=100 height=100 stroke-width="12" rx=15 ry=15 fill="none"/> <!-- Trg žrtava fašizma -->
      <path class="road main-road-11" d="M1250,100 L1400,200 L2000,200" stroke-width="12" fill="none"/> <!-- Vlaška -->
      <path class="road main-road-12" d="M1700,595 L2000,595" stroke-width="12" fill="none"/> <!-- Zvonimirova (north) -->
      <path class="road main-road-13" d="M1700,605 L2000,605" stroke-width="12" fill="none"/> <!-- Zvonimirova (south) -->
      <path class="road main-road-14" d="M1700,650 L2000,982" stroke-width="12" fill="none"/> <!-- Kneza Višeslava -->
      <circle class="road main-road-15" cx="1829" cy="800" r="15" stroke-width="12" fill="none"/> <!-- Roundabout -->
      <path class="road main-road-16" d="M1950,927 L2000,877" stroke-width="12" fill="none"/> <!-- Šubićeva -->
      
      <path class="road secondary-road-1" d="M400,450 L400,990" stroke-width="8" fill="none"/> <!-- Gundulićeva jug -->
      <path class="road secondary-road-2" d="M0,350 L400,350" stroke-width="8" fill="none"/> <!-- Varšavska, Dalmatinska -->
      <path class="road secondary-road-3" d="M0,500 L200,500" stroke-width="8" fill="none"/> <!-- Deželićeva -->
      <path class="road secondary-road-4" d="M1416,354 L1608,546" stroke-width="8" fill="none"/> <!-- Račkoga JI-SZ smjer -->
      <path class="road secondary-road-5 " d="M1398,353 L1598,553" stroke-width="8" fill="none"/> <!-- Račkoga SZ-JI smjer -->
      <path class="road secondary-road-6 " d="M600,500 L600,990" stroke-width="8" fill="none"/> <!-- Preradovićeva -->
      <path class="road secondary-road-7 " d="M600,500 L800,500" stroke-width="8" fill="none"/> <!-- Berislavićeva -->
      <path class="road secondary-road-8 " d="M800,400 L800,990" stroke-width="8" fill="none"/> <!-- Zrinjevac, Strossmayerov trg, Tomislavov trg - zapad -->
      <path class="road secondary-road-9 " d="M950,400 L950,990" stroke-width="8" fill="none"/> <!-- Zrinjevac, Strossmayerov trg, Tomislavov trg - istok -->
      <path class="road secondary-road-10 " d="M1070,400 L1070,990" stroke-width="8" fill="none"/> <!-- Petrinjska -->
      <path class="road secondary-road-11 " d="M1250,100 L1250,990" stroke-width="8" fill="none"/> <!-- Palmotićeva -->
      <path class="road secondary-road-12 " d="M750,400 L1250,400" stroke-width="8" fill="none"/> <!-- Amruševa -->
      <path class="road secondary-road-13 " d="M950,500 L1550,500" stroke-width="8" fill="none"/> <!-- Đorđićeva -->
      <path class="road secondary-road-14 " d="M1400,350 L1400,600" stroke-width="8" fill="none"/> <!-- Draškovićeva sjever -->
      <path class="road secondary-road-15" d="M750,400 L750,500 Q760,550 700,600" stroke-width="8" fill="none"/> <!-- Gajeva (part 2 - to Hebrangova) -->
      <path class="road secondary-road-16" d="M700,600 L700,990" stroke-width="8" fill="none"/> <!-- Gajeva (part 3 - south extension) -->
      <path class="road secondary-road-17" d="M1550,500 L1550,200" stroke-width="8" fill="none"/> <!-- Drage Iblera -->
      <path class="road secondary-road-18" d="M1829,815 L1829,200" stroke-width="8" fill="none"/> <!-- Bauerova -->
      <path class="road secondary-road-19" d="M1650,200 L1650,100" stroke-width="8" fill="none"/> <!-- Vončinina -->
      <path class="road secondary-road-20" d="M1950,200 L1950,100" stroke-width="8" fill="none"/> <!-- Petrova -->
      <path class="road secondary-road-21" d="M267,200 L267,100" stroke-width="8" fill="none"/> <!-- Vertical from Ilica -->
      
      <path class="road tertiary-road-1" d="M50,200 L50,250 L60,255 L60,290 L70,310 L70,330" stroke-width="4" fill="none"/>
      <path class="road tertiary-road-2" d="M320,200 L320,280" stroke-width="4" fill="none"/>
      <path class="road tertiary-road-3" d="M200,300 L250,300" stroke-width="4" fill="none"/>
      <path class="road tertiary-road-4" d="M1400,350 L2000,350" stroke-width="4" fill="none"/> <!-- Martićeva -->
      <path class="road tertiary-road-5" d="M400,200 L800,200" stroke-width="4" fill="none"/> <!-- Ilica (east extension) -->
      <path class="road tertiary-road-6" d="M600,200 L600,500" stroke-width="4" fill="none"/> <!-- Preradovićeva (north extension) -->
      <path class="road tertiary-road-7" d="M400,350 L600,350" stroke-width="4" fill="none"/> <!-- Varšavska (east extension) -->
      <path class="road tertiary-road-8" d="M400,450 L600,400" stroke-width="4" fill="none"/> <!-- Masarykova (east extension) -->
      <path class="road tertiary-road-9" d="M600,400 L800,400" stroke-width="4" fill="none"/> <!-- Teslina -->
      <path class="road tertiary-road-10" d="M800,200 L1400,350" stroke-width="4" fill="none"/> <!-- Jurišićeva -->
      <path class="road tertiary-road-11" d="M800,450 L800,200" stroke-width="4" fill="none"/> <!-- Praška -->
      <path class="road tertiary-road-12" d="M750,200 L750,400" stroke-width="4" fill="none"/> <!-- Gajeva (part 1 - vertical) -->
      <path class="road tertiary-road-13" d="M600,300 L750,300" stroke-width="4" fill="none"/> <!-- Bogovićeva -->
      <path class="road tertiary-road-14" d="M675,200 L675,300" stroke-width="4" fill="none"/> <!-- Petrićeva -->
      <path class="road tertiary-road-15" d="M1070,400 L1040,260" stroke-width="4" fill="none"/> <!-- Petrinjska (north extension) -->
      <path class="road tertiary-road-16" d="M1400,350 L1400,200" stroke-width="4" fill="none"/> <!-- Draškovićeva (north extension) -->
      <path class="road tertiary-road-17" d="M1700,550 L1700,500" stroke-width="4" fill="none"/> <!-- Popa Dukljanina -->
      <path class="road tertiary-road-18" d="M1650,500 L1829,500" stroke-width="4" fill="none"/> <!-- Lopašićeva -->
      <path class="road tertiary-road-19" d="M1650,500 L1650,350" stroke-width="4" fill="none"/> <!-- Tomašićeva -->
      <path class="road tertiary-road-20" d="M1750,500 L1750,350" stroke-width="4" fill="none"/> <!-- Bulićeva -->
      <path class="road tertiary-road-21" d="M1700,350 L1700,200" stroke-width="4" fill="none"/> <!-- Ratkajeva -->
      <path class="road tertiary-road-22" d="M1950,200 L1950,927" stroke-width="4" fill="none"/> <!-- Vojnovićeva -->
      <path class="road tertiary-road-23" d="M1829,275 L1970,275" stroke-width="4" fill="none"/> <!-- Laginjina -->
      <path class="road tertiary-road-24" d="M1829,815 L1829,990" stroke-width="4" fill="none"/> <!-- Petra Krešimira -->
      <path class="road tertiary-road-25" d="M1400,800 L1950,800" stroke-width="4" fill="none"/> <!-- Kneza Borne -->
      <path class="road tertiary-road-26" d="M1829,600 L2000,600" stroke-width="4" fill="none"/> <!-- Šandora Brešćenskoga -->
      <path class="road tertiary-road-27" d="M1570,725 L1715,725" stroke-width="4" fill="none"/> <!-- Križanićeva -->
      <path class="road tertiary-road-28" d="M1570,725 L1540,700" stroke-width="4" fill="none"/> <!-- Connection to Kneza Mislava -->
      <path class="road tertiary-road-29" d="M1715,725 L1735,700" stroke-width="4" fill="none"/> <!-- Connection to Kneza Višeslava -->
      <path class="road tertiary-road-30" d="M1570,725 L1570,990" stroke-width="4" fill="none"/> <!-- Kneza Domagoja -->
      <path class="road tertiary-road-31" d="M1715,725 L1715,990" stroke-width="4" fill="none"/> <!-- Erdodyjeva -->
      <path class="road tertiary-road-32" d="M1715,850 L1950,850" stroke-width="4" fill="none"/> <!-- Horizontal from Erdodyjeva -->
      <path class="road tertiary-road-33" d="M1485,800 L1485,990" stroke-width="4" fill="none"/> <!-- Vertical south of Kneza Borne -->
      <path class="road tertiary-road-34" d="M1070,667 L1250,667" stroke-width="4" fill="none"/> <!-- Mrazovićeva -->
      <path class="road tertiary-road-35" d="M950,700 L1070,700" stroke-width="4" fill="none"/> <!-- Matice Hrvatske -->
      <path class="road tertiary-road-36" d="M800,700 L700,700" stroke-width="4" fill="none"/> <!-- Katančićeva -->
      <path class="road tertiary-road-37" d="M600,667 L700,667" stroke-width="4" fill="none"/> <!-- Kovačićeva -->
      <path class="road tertiary-road-38" d="M300,475 L300,990" stroke-width="4" fill="none"/> <!-- Marulićev trg east -->
      <path class="road tertiary-road-39" d="M200,600 L200,990" stroke-width="4" fill="none"/> <!-- Marulićev trg west -->
      <path class="road tertiary-road-40" d="M500,800 L500,990" stroke-width="4" fill="none"/> <!-- Kumičićeva -->
      <path class="road tertiary-road-41" d="M500,900 L600,900" stroke-width="4" fill="none"/> <!-- Svačićev trg -->
      <path class="road tertiary-road-42" d="M950,900 L1400,900" stroke-width="4" fill="none"/> <!-- Šenoina -->
      <path class="road tertiary-road-43" d="M1400,200 L1000,200" stroke-width="4" fill="none"/> <!-- Stara Vlaška -->
      <path class="road tertiary-road-44" d="M980,245 L1045,100" stroke-width="4" fill="none"/> <!-- Bakačeva -->
      <path class="road tertiary-road-45" d="M712,200 L712,150 Q680,120 650,100" stroke-width="4" fill="none"/> <!-- Radićeva -->
      <path class="road tertiary-road-46" d="M500,200 L500,100" stroke-width="4" fill="none"/> <!-- Tomićeva -->
      
      <!-- Vehicles on roads -->
      <g class="moving-vehicles">
        <AnimatedVehicle :x="0" :y="0" color="#ef4444" vehicle-class="vehicle-1" />
        <AnimatedVehicle :x="0" :y="0" color="#3b82f6" vehicle-class="vehicle-2" />
        <!--AnimatedVehicle :x="0" :y="0" color="#10b981" vehicle-class="vehicle-3" />
        <AnimatedVehicle :x="500" :y="200" color="#f59e0b" vehicle-class="vehicle-4" />
        <AnimatedVehicle :x="100" :y="400" color="#8b5cf6" vehicle-class="vehicle-5" />
        <AnimatedVehicle :x="650" :y="100" color="#ec4899" vehicle-class="vehicle-6" />
        <AnimatedVehicle :x="450" :y="490" color="#06b6d4" vehicle-class="vehicle-7" />
        <AnimatedVehicle :x="580" :y="690" color="#84cc16" vehicle-class="vehicle-8" />
        <AnimatedVehicle :x="120" :y="690" color="#f97316" vehicle-class="vehicle-9" />
        <AnimatedVehicle :x="780" :y="240" color="#a855f7" vehicle-class="vehicle-10" / -->
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import AnimatedVehicle from '@/components/AnimatedVehicle.vue'

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
  height: 100%;
  opacity: 0.6;
  overflow-x:hidden;
}

.road {
  stroke: rgba(255, 255, 255, 0.8);
  stroke-linecap: round;
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.3));
}

/* Enhanced Vehicle Movement */
.moving-vehicles {
  animation: vehiclesFlow 12s linear infinite;
}

/* Vehicle 1: Pavla Hatza → Draškovićeva → Boškovićeva → Savska → Pavla Hatza */
.vehicle-1 {
  animation: vehicle1Route 20s linear infinite;
}

@keyframes vehicle1Route {
  0% { transform: translateX(105px) translateY(790px); } /* Pavla Hatza start */
  40% { transform: translateX(1390px) translateY(790px); } /* Pavla Hatza end */
  50% { transform: translateX(1390px) translateY(590px); } /* Draškovićeva up */
  80% { transform: translateX(190px) translateY(590px); } /* Boškovićeva left */
  100% { transform: translateX(105px) translateY(790px); } /* Savska down */
}

/* Vehicle 2: Pavla Hatza → Kneza Mislava → Trg žrtava fašizma → Račkoga → Jurišićeva → Palmotićeva → Pavla Hatza */
.vehicle-2 {
  animation: vehicle2Route 20s linear infinite;
}

@keyframes vehicle2Route {
  0% { transform: translateX(1240px) translateY(790px); } /* Pavla Hatza */
  10% { transform: translateX(1390px) translateY(790px); } /* Pavla Hatza */
  25% { transform: translateX(1600px) translateY(640px); } /* Kneza Mislava diagonal */
  30% { transform: translateX(1690px) translateY(640px); } /* Trg žrtava fašizma */
  35% { transform: translateX(1690px) translateY(540px); } /* Trg žrtava fašizma */
  40% { transform: translateX(1600px) translateY(540px); } /* Trg žrtava fašizma */
  55% { transform: translateX(1400px) translateY(340px); } /* Račkoga */
  70% { transform: translateX(1240px) translateY(295px); } /* Jurišićeva */
  100% { transform: translateX(1240px) translateY(790px); } /* Palmotićeva */
}

/* Vehicle 3: Ilica → Frankopanska → Savska → Pavla Hatza → Gundulićeva → Ilica */
.vehicle-3 {
  animation: vehicle3Route 20s linear infinite;
}

@keyframes vehicle3Route {
  0% { transform: translateX(0px) translateY(200px); } /* Ilica start */
  15% { transform: translateX(400px) translateY(200px); } /* Ilica east */
  25% { transform: translateX(200px) translateY(400px); } /* Frankopanska up */
  40% { transform: translateX(200px) translateY(800px); } /* Savska down to Pavla Hatza */
  55% { transform: translateX(800px) translateY(800px); } /* Pavla Hatza east */
  70% { transform: translateX(400px) translateY(350px); } /* Gundulićeva up */
  85% { transform: translateX(400px) translateY(200px); } /* Gundulićeva to Ilica level */
  100% { transform: translateX(0px) translateY(200px); } /* Back to Ilica start */
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

.marker-4 {
  top: 50%;
  left: 60%;
  animation-delay: 0.5s;
  background: radial-gradient(circle, #06b6d4 0%, rgba(6, 182, 212, 0.3) 70%);
}

.marker-5 {
  bottom: 20%;
  left: 50%;
  animation-delay: 1.5s;
  background: radial-gradient(circle, #84cc16 0%, rgba(132, 204, 22, 0.3) 70%);
}

.marker-6 {
  top: 30%;
  right: 15%;
  animation-delay: 2.5s;
  background: radial-gradient(circle, #a855f7 0%, rgba(168, 85, 247, 0.3) 70%);
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
