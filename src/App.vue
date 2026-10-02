<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import MobileActionBar from '@/components/MobileActionBar.vue'
import { useJsonLd } from '@/composables/useJsonLd'
import { businessSchema } from '@/utils/schema'

// unhead's server renderer defaults <html lang> to "en", overriding index.html.
useHead({ htmlAttrs: { lang: 'hr' } })
useJsonLd('ld-business', businessSchema)
</script>

<template>
  <a class="skip-link" href="#main">Preskoči na sadržaj</a>
  <SiteHeader />
  <main id="main">
    <RouterView />
  </main>
  <SiteFooter />
  <MobileActionBar />
</template>
