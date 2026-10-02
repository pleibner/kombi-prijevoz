<template>
  <ServiceLayout title="Hitne selidbe">
    <div class="content">
      <p>
        Život ponekad donosi neočekivane situacije koje zahtijevaju trenutnu akciju. Bilo da vam se
        dogovoreni prijatelj ili poznanik u zadnji čas otkaže, da vam je istekao rok najma stana ili
        kuće, ili da jednostavno trebate hitno premještanje zbog nepredviđenih okolnosti – mi smo tu
        da vam pomognemo.
      </p>

      <p>
        Naš tim za hitne selidbe razumije koliko je stresno kada vrijeme istječe, a vi još niste
        spremni za preseljenje. Stižemo brzo i organizirano, s kompletnom opremom i stručnjacima
        koji će vaš prijevoz obaviti sigurno i učinkovito. Bez obzira na veličinu vašeg doma ili
        kompleksnost situacije, naš pristup je uvijek isti: maksimalna brzina uz maksimalnu pažnju
        prema vašoj imovini.
      </p>

      <p>
        U hitnim situacijama vrijeme je ključni faktor, ali to ne znači da ćemo žrtvovati kvalitetu
        usluge. Naši profesionalci dolaze pripremljeni sa svim potrebnim alatima i vozilima, te
        koordiniraju cijeli proces kako bi se vaše selidbe odvijala što glađe. Od pakiranja i
        utovara, preko transporta, do istovara i raspoređivanja – sve je pokriveno.
      </p>

      <p>
        Ne dopustite da vam neočekivane okolnosti pokvare planove za novi početak. Bez obzira na to
        koliko je situacija hitna, možete računati na našu pouzdanost i profesionalizam. Kad vam je
        najpotrebnije, jedan poziv nas dijeli od vas.
      </p>
    </div>

    <template #footer>
      <ServicesSection compact />
    </template>
  </ServiceLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import ServiceLayout from '@/components/ServiceLayout.vue'
import ServicesSection from '@/components/ServicesSection.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

useHead({
  title: 'Hitne selidbe - Urgentni transport Zagreb',
  meta: [
    {
      name: 'description',
      content: 'Hitne selidbe i urgentni prijevoz u Zagrebu. Brza reakcija i profesionalna usluga.',
    },
    {
      property: 'og:title',
      content: 'Hitne selidbe - Urgentni transport Zagreb',
    },
    {
      property: 'og:description',
      content: 'Hitne selidbe i urgentni prijevoz u Zagrebu. Brza reakcija i profesionalna usluga.',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://kombi-transport.com/hitne-selidbe',
    },
  ],
})
</script>
