<script setup lang="ts">
// About section component with company information and statistics
</script>

<template>
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
            <span class="stat-label">zadovoljnih klijenata</span>
          </div>
          <div class="stat">
            <span class="stat-number">20+</span>
            <span class="stat-label">godina iskustva</span>
          </div>
          <div class="stat">
            <span class="stat-number">365</span>
            <span class="stat-label">dana u godini</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 6rem 2rem;
  background-color: white;
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.stat:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
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

/* Responsivnost */
@media (max-width: 768px) {
  .about {
    padding: 4rem 1rem;
    background-color: white;
  }

  .about h2 {
    font-size: 2rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-text h3 {
    font-size: 1.2rem;
  }

  .about-stats {
    gap: 1.5rem;
  }

  .stat {
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .stat:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  .stat-number {
    font-size: 2rem;
  }
}
</style>
