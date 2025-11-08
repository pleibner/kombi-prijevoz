<template>
  <ServiceLayout title="Hitne selidbe" :animate-title="true">
    <div class="content">
      <p>
        Život ponekad donosi neočekivane situacije koje zahtijevaju trenutnu akciju. Bilo da vam se dogovoreni prijatelj ili poznanik u zadnji čas otkaže, da vam je istekao rok najma stana ili kuće, ili da jednostavno trebate hitno premještanje zbog nepredviđenih okolnosti – mi smo tu da vam pomognemo.
      </p>

      <p>
        Naš tim za hitne selidbe razumije koliko je stresno kada vrijeme istječe, a vi još niste spremni za preseljenje. Stižemo brzo i organizirano, s kompletnom opremom i stručnjacima koji će vaš prijevoz obaviti sigurno i učinkovito. Bez obzira na veličinu vašeg doma ili kompleksnost situacije, naš pristup je uvijek isti: maksimalna brzina uz maksimalnu pažnju prema vašoj imovini.
      </p>

      <p>
        U hitnim situacijama vrijeme je ključni faktor, ali to ne znači da ćemo žrtvovati kvalitetu usluge. Naši profesionalci dolaze pripremljeni sa svim potrebnim alatima i vozilima, te koordiniraju cijeli proces kako bi se vaše selidbe odvijala što glađe. Od pakiranja i utovara, preko transporta, do istovara i raspoređivanja – sve je pokriveno.
      </p>

      <p>
        Ne dopustite da vam neočekivane okolnosti pokvare planove za novi početak. Bez obzira na to koliko je situacija hitna, možete računati na našu pouzdanost i profesionalizam. Jer kada vam je najpotrebnija, mi smo uvijek samo jedan poziv daleko.
      </p>
    </div>

    <template #footer>
      <ServicesSection :show-title="false" custom-padding="2rem 2rem" centered />
    </template>
  </ServiceLayout>
</template>

<script setup lang="ts">
import ServiceLayout from '@/components/ServiceLayout.vue'
import ServicesSection from '@/components/ServicesSection.vue'
</script>

<style scoped>
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

@media (max-width: 768px) {
  .content p {
    font-size: 1rem;
    line-height: 1.6;
  }
}
</style>
