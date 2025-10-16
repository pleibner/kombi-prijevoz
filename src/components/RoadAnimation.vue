<template>
  <div class="road-animation">
    <div class="road-line"></div>
    <div class="road-cars">
      <div class="car car-1">🚛</div>
      <div class="car car-2">🚚</div>
      <div class="car car-3">📦</div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Road animation component
</script>

<style scoped>
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

/* Responsive design */
@media (max-width: 768px) {
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
</style>
