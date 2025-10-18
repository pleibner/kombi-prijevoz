<script setup lang="ts">
// Testimonials section component with carousel functionality

import { onMounted, onUnmounted } from 'vue'

let startX = 0
let currentTestimonial = 1

function handleTouchStart(e: TouchEvent) {
  startX = e.touches[0]?.clientX || 0
}

function handleTouchEnd(e: TouchEvent) {
  if (!startX) return

  const endX = e.changedTouches[0]?.clientX || 0
  const diffX = startX - endX

  // Minimum swipe distance (30px)
  if (Math.abs(diffX) < 30) return

  if (diffX > 0) {
    // Swipe left - next testimonial
    currentTestimonial = currentTestimonial >= 4 ? 1 : currentTestimonial + 1
  } else {
    // Swipe right - previous testimonial
    currentTestimonial = currentTestimonial <= 1 ? 4 : currentTestimonial - 1
  }

  // Update radio button
  const radio = document.getElementById(`testimonial${currentTestimonial}`) as HTMLInputElement
  if (radio) radio.checked = true

  startX = 0
}

onMounted(() => {
  const carousel = document.querySelector('.testimonials-carousel')
  if (carousel) {
    carousel.addEventListener('touchstart', handleTouchStart as EventListener)
    carousel.addEventListener('touchend', handleTouchEnd as EventListener)
  }
})

onUnmounted(() => {
  const carousel = document.querySelector('.testimonials-carousel')
  if (carousel) {
    carousel.removeEventListener('touchstart', handleTouchStart as EventListener)
    carousel.removeEventListener('touchend', handleTouchEnd as EventListener)
  }
})
</script>

<template>
  <section class="testimonials fade-in-section">
    <div class="container">
      <h2>Što kažu naši klijenti?</h2>
      <!-- Carousel radio buttons -->
      <input type="radio" id="testimonial1" name="testimonial" checked>
      <input type="radio" id="testimonial2" name="testimonial">
      <input type="radio" id="testimonial3" name="testimonial">
      <input type="radio" id="testimonial4" name="testimonial">
      <div class="testimonials-carousel">
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"Izuzetna usluga! Tim je bio veoma profesionalan i pažljiv prilikom selidbe našeg stana. Sve je prošlo glatko i bez ikakvih problema. Cijena je bila povoljna, a kvaliteta usluge izvanredna."</p>
            <div class="testimonial-author">
              <strong>Marija K.</strong>
              <span>Zagreb</span>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"Koristili smo usluge Kombi prijevoza za transport naše robe diljem Hrvatske. Brza, sigurna i pouzdana dostava po dobroj cijeni. Preporučujem svima!"</p>
            <div class="testimonial-author">
              <strong>Andrija J.</strong>
              <span>Krapina</span>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"Profesionalci od glave do pete! Selidba ureda je bila kompleksna, ali su se savršeno snašli. Sve je stiglo na vrijeme i u savršenom stanju. Hvala vam!"</p>
            <div class="testimonial-author">
              <strong>Anđa S.</strong>
              <span>Karlovac</span>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"Već godinama koristim njihove usluge za dostavu paketa. Uvijek pouzdani, brzi i ljubazni. Odlična komunikacija i transparentne cijene. Pet zvjezdica!"</p>
            <div class="testimonial-author">
              <strong>Danijel A.</strong>
              <span>Velika Gorica</span>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-indicators">
        <label for="testimonial1" class="indicator"></label>
        <label for="testimonial2" class="indicator"></label>
        <label for="testimonial3" class="indicator"></label>
        <label for="testimonial4" class="indicator"></label>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  padding: 6rem 2rem;
  background-color: #f5f5f5;
}

.testimonials h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
}

.testimonials-carousel {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  /* Touch-friendly improvements */
  -webkit-tap-highlight-color: transparent;
  touch-action: pan-y; /* Allow vertical scrolling but prevent horizontal */
  background: white;
}

.testimonial-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.5s ease-in-out;
  background: white;
  padding: 3rem;
  min-height: 300px;
  display: flex;
  align-items: center;
}

.testimonial-card.active {
  opacity: 1;
  transform: translateX(0);
  position: relative;
}

.testimonial-card:nth-child(2) {
  transform: translateX(100%);
}

.testimonial-card:nth-child(3) {
  transform: translateX(200%);
}

.testimonial-card:nth-child(4) {
  transform: translateX(300%);
}

/* Carousel functionality with radio buttons */
#testimonial1:checked ~ .testimonials-carousel .testimonial-card:nth-child(1),
#testimonial2:checked ~ .testimonials-carousel .testimonial-card:nth-child(2),
#testimonial3:checked ~ .testimonials-carousel .testimonial-card:nth-child(3),
#testimonial4:checked ~ .testimonials-carousel .testimonial-card:nth-child(4) {
  opacity: 1;
  transform: translateX(0);
  position: relative;
}

#testimonial1:checked ~ .testimonials-carousel .testimonial-card:nth-child(2),
#testimonial2:checked ~ .testimonials-carousel .testimonial-card:nth-child(3),
#testimonial3:checked ~ .testimonials-carousel .testimonial-card:nth-child(4),
#testimonial4:checked ~ .testimonials-carousel .testimonial-card:nth-child(1) {
  transform: translateX(100%);
}

#testimonial1:checked ~ .testimonials-carousel .testimonial-card:nth-child(3),
#testimonial2:checked ~ .testimonials-carousel .testimonial-card:nth-child(4),
#testimonial3:checked ~ .testimonials-carousel .testimonial-card:nth-child(1),
#testimonial4:checked ~ .testimonials-carousel .testimonial-card:nth-child(2) {
  transform: translateX(200%);
}

#testimonial1:checked ~ .testimonials-carousel .testimonial-card:nth-child(4),
#testimonial2:checked ~ .testimonials-carousel .testimonial-card:nth-child(1),
#testimonial3:checked ~ .testimonials-carousel .testimonial-card:nth-child(2),
#testimonial4:checked ~ .testimonials-carousel .testimonial-card:nth-child(3) {
  transform: translateX(300%);
}

.testimonial-content p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 2rem;
  font-style: italic;
  position: relative;
}

.testimonial-content p::before {
  content: '"';
  font-size: 4rem;
  color: var(--primary-color);
  position: absolute;
  top: -1rem;
  left: -1rem;
  opacity: 0.3;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
}

.testimonial-author strong {
  font-size: 1.1rem;
  color: var(--primary-color);
  margin-bottom: 0.25rem;
}

.testimonial-author span {
  font-size: 0.9rem;
  color: #777;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* Carousel indicator active states */
#testimonial1:checked ~ .carousel-indicators label[for="testimonial1"],
#testimonial2:checked ~ .carousel-indicators label[for="testimonial2"],
#testimonial3:checked ~ .carousel-indicators label[for="testimonial3"],
#testimonial4:checked ~ .carousel-indicators label[for="testimonial4"] {
  background-color: var(--primary-color);
  transform: scale(1.2);
}

.indicator:hover {
  background-color: var(--primary-color);
  transform: scale(1.2);
}

/* Hidden radio buttons */
input[type="radio"] {
  display: none;
}

/* Responsivnost */
@media (max-width: 768px) {
  .testimonials {
    padding: 4rem 1rem;
    background-color: #f5f5f5;
  }


  .testimonials h2 {
    font-size: 2rem;
  }

  .testimonial-card {
    padding: 2rem 1.5rem;
    min-height: 250px;
    /* Better touch targets on mobile */
    cursor: default;
  }

  .testimonial-content p {
    font-size: 1rem;
  }

  .testimonial-content p::before {
    font-size: 3rem;
    top: -0.5rem;
    left: -0.5rem;
  }

  /* Make carousel more touch-friendly on mobile */
  .testimonials-carousel {
    /* Better mobile spacing - don't extend too far */
    margin: 0 -0.25rem;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    border: 1px solid #e0e0e0;
  }

  .carousel-indicators {
    margin-top: 1.5rem;
  }
}
</style>
