<script setup lang="ts">
// Services section component
</script>

<template>
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
</template>

<style scoped>
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

/* Responsivnost */
@media (max-width: 768px) {
  .services {
    padding: 4rem 1rem;
  }

  .services h2 {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    padding: 2rem 1.5rem;
    min-height: 250px;
  }

  .service-card p {
    font-size: 1rem;
  }

  .service-card p::before {
    font-size: 3rem;
    top: -0.5rem;
    left: -0.5rem;
  }
}
</style>
