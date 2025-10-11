<script setup lang="ts">
// Kombi prijevoz - profesionalne usluge prijevoza, selidbi i dostave

import { onMounted, onUnmounted } from 'vue'

let observer: IntersectionObserver | null = null

onMounted(() => {
  // Create intersection observer for fade-in animations
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
    }
  )

  // Observe all fade-in sections
  const fadeSections = document.querySelectorAll('.fade-in-section')
  fadeSections.forEach((section) => {
    observer?.observe(section)
  })
})

onUnmounted(() => {
  // Clean up observer
  observer?.disconnect()
})
</script>

<template>
  <div class="home">
    <!-- Hero sekcija -->
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

    <!-- Usluge sekcija -->
    <section class="services fade-in-section">
      <div class="container">
        <h2>Naše usluge</h2>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🚛</div>
            <h3>Transport robe</h3>
            <p>Siguran i efikasan transport svih vrsta robe diljem zemlje. Koristimo moderno vozilo i profesionalnu opremu za siguran prijevoz vaših stvari.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">🏠</div>
            <h3>Selidbe</h3>
            <p>Kompletne usluge selidbe stanova, kuća i ureda. Naš tim brine o svakom detalju kako bi vaša selidba protekla glatko i bez stresa.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">📦</div>
            <h3>Dostava</h3>
            <p>Brza i pouzdana dostava paketa, dokumenata i robe. Fleksibilni rasporedi dostave prilagođeni vašim potrebama.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- O nama sekcija -->
    <section class="about fade-in-section">
      <div class="container">
        <h2>Zašto odabrati nas?</h2>
        <div class="about-content">
          <div class="about-text">
            <h3>Profesionalizam i iskustvo</h3>
            <p>S više od 20 godina iskustva u prijevozu robe, selidbama i dostavi, izgradili smo reputaciju pouzdanog partnera. Naš tim stručnih radnika svakom zadatku pristupa s maksimalnom profesionalnošću.</p>

            <h3>Briga i sigurnost</h3>
            <p>Razumijemo koliko su vaše stvari važne. Zato svaki paket, komad namještaja ili dokument tretiramo s posebnom pažnjom. Koristimo kvalitetnu ambalažu i moderne metode osiguranja kako bismo osigurali siguran transport.</p>

            <h3>Dostupne cijene</h3>
            <p>Vjerujemo da kvalitetne usluge ne moraju biti skupe. Nudimo konkurentne cijene bez kompromisa u kvaliteti. Transparentno cjenovno oblikovanje bez skrivenih troškova.</p>
          </div>
          <div class="about-stats">
            <div class="stat">
              <span class="stat-number">1000+</span>
              <span class="stat-label">Zadovoljnih klijenata</span>
            </div>
            <div class="stat">
              <span class="stat-number">20+</span>
              <span class="stat-label">Godina iskustva</span>
            </div>
            <div class="stat">
              <span class="stat-number">365</span>
              <span class="stat-label">Dostupnost</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials sekcija -->
    <section class="testimonials fade-in-section">
      <div class="container">
        <h2>Što kažu naši klijenti</h2>
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

    <!-- Kontakt sekcija -->
    <section class="contact fade-in-section">
      <div class="container">
        <h2>Kontaktirajte nas</h2>
        <p>Spremni smo pomoći vam s vašim prijevozom, selidbom ili dostavom. Kontaktirajte nas za besplatnu procjenu.</p>
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-icon">📞</span>
            <span>+385 98 915 6061</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">✉️</span>
            <span>info@kombiprijevoz.hr</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <span>Crnčićeva 41a, Zagreb</span>
          </div>
        </div>
        <button class="btn-primary contact-btn">Pošaljite upit</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero sekcija */
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
  border-top: 5px solid white;
  border-bottom: 5px solid white;
}

.road-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 4px;
  background: repeating-linear-gradient(
    to right,
    yellow 0 2.5vw,
    transparent 2.5vw 5vw
  );
  transform: translateY(-50%);
  animation: moveLine 1.5s linear infinite;
}

@keyframes moveLine {
  0% { background-position: 0 0; }
  100% { background-position: 5vw 0; } /* duljina jednog segmenta */
}

.hero-left {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-logo {
  margin: 0;
}

.logo-image {
  max-width: 450px;
  width: 100%;
  height: auto;
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

/* Usluge sekcija */
.services {
  padding: 6rem 2rem;
  background-color: var(--light-bg);
}

.services h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.service-card p {
  color: #666;
  line-height: 1.6;
}

/* O nama sekcija */
.about {
  padding: 6rem 2rem;
}

.about h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h3 {
  color: var(--primary-color);
  margin: 2rem 0 1rem 0;
  font-size: 1.3rem;
}

.about-text h3:first-child {
  margin-top: 0;
}

.about-text p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: #555;
}

.about-stats {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stat {
  text-align: center;
  padding: 2rem;
  background: var(--light-bg);
  border-radius: 12px;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #666;
  font-size: 1.1rem;
}

/* Testimonials sekcija */
.testimonials {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  position: relative;
}

.testimonials::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(26, 54, 93, 0.05)"/><circle cx="80" cy="40" r="1.5" fill="rgba(26, 54, 93, 0.05)"/><circle cx="40" cy="70" r="2.5" fill="rgba(26, 54, 93, 0.05)"/><circle cx="70" cy="10" r="1" fill="rgba(26, 54, 93, 0.05)"/><circle cx="10" cy="80" r="2" fill="rgba(26, 54, 93, 0.05)"/><circle cx="90" cy="60" r="1.5" fill="rgba(26, 54, 93, 0.05)"/></svg>') repeat;
  opacity: 0.3;
  pointer-events: none;
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

/* Fade-in animation for sections */
.fade-in-section {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in-section.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Kontakt sekcija */
.contact {
  padding: 6rem 2rem;
  background: var(--light-bg);
  text-align: center;
}

.contact h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.contact p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: #555;
}

.contact-icon {
  font-size: 1.3rem;
}

.contact-btn {
  font-size: 1.2rem;
  padding: 1.2rem 3rem;
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
  }

  .hero-left {
    order: 1;
  }

  .logo-image {
    max-width: 300px;
  }

  .hero-right {
    order: 2;
    padding-left: 0;
    text-align: center;
  }

  .hero-content {
    text-align: center;
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

  .services-grid {
    grid-template-columns: 1fr;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-info {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .container {
    padding: 0 1rem;
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

  /* Testimonials responsive */
  .testimonials {
    padding: 4rem 1rem;
  }

  .testimonials h2 {
    font-size: 2rem;
  }

  .testimonial-card {
    padding: 2rem 1.5rem;
    min-height: 250px;
  }

  .testimonial-content p {
    font-size: 1rem;
  }

  .testimonial-content p::before {
    font-size: 3rem;
    top: -0.5rem;
    left: -0.5rem;
  }
}
</style>