<script setup lang="ts">
const testimonials = [
  {
    quote:
      'Izuzetna usluga! Tim je bio veoma profesionalan i pažljiv prilikom selidbe našeg stana. Sve je prošlo glatko i bez ikakvih problema. Cijena je bila povoljna, a kvaliteta usluge izvanredna.',
    name: 'Marija K.',
    meta: 'Zagreb, selidba stana',
  },
  {
    quote:
      'Koristili smo usluge Kombi prijevoza za transport naše robe diljem Hrvatske. Brza, sigurna i pouzdana dostava po dobroj cijeni. Preporučujem svima!',
    name: 'Andrija J.',
    meta: 'Krapina, prijevoz robe',
  },
  {
    quote:
      'Profesionalci od glave do pete! Selidba ureda je bila kompleksna, ali su se savršeno snašli. Sve je stiglo na vrijeme i u savršenom stanju. Hvala vam!',
    name: 'Anđa S.',
    meta: 'Karlovac, selidba ureda',
  },
  {
    quote:
      'Već godinama koristim njihove usluge za dostavu paketa. Uvijek pouzdani, brzi i ljubazni. Odlična komunikacija i transparentne cijene. Pet zvjezdica!',
    name: 'Danijel A.',
    meta: 'Velika Gorica, redovne dostave',
  },
]
</script>

<template>
  <section class="section--tight" aria-labelledby="testimonials-heading">
    <div class="container testimonials">
      <div v-reveal class="testimonials__heading">
        <p class="eyebrow">Iskustva klijenata</p>
        <h2 id="testimonials-heading" class="section-title">
          Što kažu oni koji su se već selili s nama.
        </h2>
      </div>

      <div class="testimonials__grid">
        <figure
          v-for="(item, index) in testimonials"
          :key="item.name"
          v-reveal="index * 90"
          class="card testimonial"
        >
          <span aria-hidden="true" class="testimonial__mark">“</span>
          <blockquote>{{ item.quote }}</blockquote>
          <figcaption>
            <strong>{{ item.name }}</strong>
            <span>{{ item.meta }}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.testimonials__heading {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 720px;
}

.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
  gap: 20px;
}

.testimonial {
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.testimonial__mark {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 56px;
  line-height: 0.6;
  color: var(--accent);
}

.testimonial blockquote {
  flex-grow: 1;
}

.testimonial figcaption {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-top: 1px solid var(--line);
  padding-top: 14px;
}

.testimonial figcaption span {
  font-size: 14px;
  color: var(--muted);
}
</style>
