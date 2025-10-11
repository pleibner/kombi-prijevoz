<script setup lang="ts">
// Hero section component with logo, text, and road animation
</script>

<template>
  <section class="hero">
    <div class="hero-container">
      <div class="hero-left">
        <div class="hero-logo">
          <img src="../assets/logo.png" alt="Kombi Prijevoz Logo" class="logo-image" />
        </div>
      </div>
      <div class="hero-right">
        <div class="hero-content">
          <h1>Kombi prijevoz</h1>
          <p class="hero-subtitle">Prijevoz, selidbe i dostava</p>
          <div class="hero-remarks">
            <div class="remark-item">
              <span class="checkmark">✓</span>
              <span>Profesionalna usluga</span>
            </div>
            <div class="remark-item">
              <span class="checkmark">✓</span>
              <span>20+ godina iskustva</span>
            </div>
            <div class="remark-item">
              <span class="checkmark">✓</span>
              <span>Siguran transport</span>
            </div>
            <div class="remark-item">
              <span class="checkmark">✓</span>
              <span>Pristupačna cijena</span>
            </div>
          </div>
          <div class="hero-buttons">
            <button class="btn-primary">Kontaktirajte nas</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Road animation -->
    <div class="road-animation">
      <div class="road-line"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: #002153;
  color: white;
  padding: 4rem 2rem;
  min-height: 60vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 4rem;
  width: 100%;
  position: relative;
  z-index: 2;
  animation: slideInFromRight 1s ease-out;
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

/* Road Animation */
.road-animation {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  height: 30px;
  background: transparent;
  z-index: 1;
}

.road-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 4px;
  background: repeating-linear-gradient(
    to right,
    rgba(255, 255, 255, 0.8) 0px,
    rgba(255, 255, 255, 0.8) 20px,
    transparent 20px,
    transparent 40px
  );
  transform: translateY(-50%);
  animation: moveLine 1.5s linear infinite;
}

@keyframes moveLine {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: 40px 0px;
  }
}

.hero-left {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.hero-logo {
  margin: 0;
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0;
  box-shadow: none;
  background: transparent;
}

.hero-right {
  flex: 1;
}

.hero-content {
  text-align: center;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.hero-remarks {
  margin-bottom: 3rem;
  margin-left: 7rem;
}

.remark-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  opacity: 0;
  transform: translateY(20px) translateX(-50px);
  animation: cascadeIn 0.8s ease-out forwards;
  margin-left: 0;
}

/* Cascade effect - increasing left margin for each item */
.remark-item:nth-child(1) {
  animation-delay: 0.2s;
  margin-left: 0;
}
.remark-item:nth-child(2) {
  animation-delay: 0.4s;
  margin-left: 4rem;
}
.remark-item:nth-child(3) {
  animation-delay: 0.6s;
  margin-left: 8rem;
}
.remark-item:nth-child(4) {
  animation-delay: 0.8s;
  margin-left: 12rem;
}

@keyframes cascadeIn {
  to {
    opacity: 1;
    transform: translateY(0) translateX(0);
  }
}

.checkmark {
  color: #27ae60;
  font-size: 1.3rem;
  font-weight: bold;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(30px);
  animation: buttonEntrance 0.8s ease-out forwards;
  animation-delay: 1.2s;
}

@keyframes buttonEntrance {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.btn-primary {
  background-color: var(--accent-color);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #a02828;
  transform: translateY(-2px);
}

/* Responsivnost */
@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
    min-height: auto;
    flex-direction: column;
  }

  .hero-container {
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 10px;
    animation: slideInFromBottom 0.8s ease-out;
  }

  @keyframes slideInFromBottom {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .logo-image {
    max-width: 300px;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-buttons {
    justify-content: center;
    animation-delay: 0.6s; /* Faster on mobile */
  }

  .hero-remarks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-left: 0;
  }

  .remark-item {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    margin-left: 0 !important; /* Remove cascade effect on mobile */
    transform: translateY(20px); /* Reset initial transform */
    animation-delay: 0.1s, 0.2s, 0.3s, 0.4s; /* Faster cascade on mobile */
  }

  /* Road animation responsive */
  .road-animation {
    height: 20px;
    border-top-width: 3px;
    border-bottom-width: 3px;
    bottom: 5px;
  }

  .road-line {
    height: 3px;
  }
}
</style>
