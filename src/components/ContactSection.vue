<script setup lang="ts">
// Contact section component
</script>

<template>
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
</template>

<style scoped>
.contact {
  padding: 6rem 2rem;
  background: var(--light-bg);
  text-align: center;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
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
  .contact {
    padding: 4rem 1rem;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
  }

  .contact h2 {
    font-size: 2rem;
  }

  .contact p {
    font-size: 1rem;
  }

  .contact-info {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .contact-btn {
    font-size: 1.1rem;
    padding: 1rem 2rem;
  }
}
</style>
