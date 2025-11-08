<template>
  <ServiceLayout title="Kombi selidbe" :animate-title="true">
    <div class="content">
      <p>
        Selidba je uvijek važna prekretnica u životu - bilo da se radi o obiteljskoj selidbi u novi dom
        ili preseljenju ureda u moderne prostore. To je trenutak pun uzbuđenja, ali i potencijalnih
        izazova koji mogu pretvoriti radost u stres.
      </p>

      <p>
        Za izbjegavanje neželjenih posljedica i očuvanje mentalnog mira, uvijek je najbolje potražiti
        podršku iskusnih profesionalaca. Naša ekipa razumije koliko je selidba emocionalno zahtjevna
        i brine se o svim logističkim detaljima umjesto vas.
      </p>

      <p>
        Bolje je platiti nekome da nosi težak kauč nego kasnije plaćati kiropraktičara zbog povreda
        leđa. Naš pristup je preventivan - koristimo specijaliziranu opremu i tehnike koje čuvaju vaše
        zdravlje i imovinu. Svaka selidba je jedinstvena prilika da pokažemo zašto smo lideri u branši.
      </p>
    </div>

    <template #footer>
      <CardGrid centered>
        <ServiceCard
          to="/selidba-doma"
          icon="🏠"
          title="Selidba doma"
          description="Selidba doma poseban je trenutak za vašu obitelj. Prepustite je stručnjacima i uživajte u novom početku, bez stresa."
        />
        <ServiceCard
          to="/selidba-ureda"
          icon="🏢"
          title="Selidba ureda"
          description="Selimo urede svih veličina. Vi se fokusirajte na posao – mi ćemo se pobrinuti da sutra jednostavno uključite računalo i nastavite gdje ste stali."
        />
        <ServiceCard
          to="/hitne-usluge"
          icon="🚨"
          title="Hitne usluge"
          description="Neočekivana selidba? Hitna dostava? Kad zatreba spas u zadnji čas – samo nas nazovite i stižemo odmah!"
        />
      </CardGrid>
    </template>
  </ServiceLayout>
</template>

<script setup lang="ts">
import ServiceLayout from '@/components/ServiceLayout.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import CardGrid from '@/components/CardGrid.vue'
</script>

<style scoped>
.content {
  max-width: 900px;
  margin: 0 auto;
}

.content p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 1.5rem;
}

.content p:first-child {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}
</style>
