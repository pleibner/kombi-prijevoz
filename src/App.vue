<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import MobileActionBar from '@/components/MobileActionBar.vue'
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
