<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from '@/components/AppIcon.vue'
import { navLinks, site } from '@/data/site'
import { trackingService } from '@/utils/tracking'

const open = ref(false)
const route = useRoute()

watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)

const trackQuote = () => trackingService.trackClick('header_quote_button_click')
const trackPhone = () => trackingService.trackClick('header_phone_click')
</script>

<template>
  <header class="site-header">
    <div class="container site-header__bar">
      <RouterLink to="/" class="brand" aria-label="Kombi Transport, početna stranica">
        <span class="brand__mark"><AppIcon name="truck" :size="20" :stroke-width="2" /></span>
        <span class="brand__word">Kombi <span class="brand__accent">Transport</span></span>
      </RouterLink>

      <nav class="site-nav" aria-label="Glavna navigacija">
        <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" class="site-nav__link">
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="site-header__actions">
        <a :href="site.phoneHref" class="site-header__phone" @click="trackPhone">
          <AppIcon name="phone" :size="18" :stroke-width="2" />
          {{ site.phoneDisplay }}
        </a>
        <RouterLink
          to="/kontakt"
          class="btn btn-primary btn-sm site-header__cta"
          @click="trackQuote"
        >
          Zatraži ponudu
        </RouterLink>
        <button
          type="button"
          class="menu-btn"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          :aria-label="open ? 'Zatvori izbornik' : 'Otvori izbornik'"
          @click="open = !open"
        >
          <AppIcon :name="open ? 'close' : 'menu'" :size="22" :stroke-width="2" />
        </button>
      </div>
    </div>

    <div v-show="open" id="mobile-menu" class="mobile-menu">
      <nav class="container mobile-menu__nav" aria-label="Mobilna navigacija">
        <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" class="mobile-menu__link">
          {{ link.label }}
        </RouterLink>
        <a :href="site.phoneHref" class="mobile-menu__link" @click="trackPhone">
          <AppIcon name="phone" :size="18" :stroke-width="2" />
          Nazovite {{ site.phoneDisplay }}
        </a>
        <RouterLink to="/kontakt" class="btn btn-primary" @click="trackQuote"
          >Zatraži ponudu</RouterLink
        >
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--surface);
  border-bottom: 1px solid var(--line);
}

.site-header__bar {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--ink);
}

.brand__mark {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--accent);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand__word {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 26px;
  letter-spacing: 0.02em;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
}

.brand__accent {
  color: var(--accent);
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.site-nav__link {
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  white-space: nowrap;
  color: var(--ink);
  padding: 6px 0;
  border-bottom: 2px solid transparent;
  transition:
    color 0.15s,
    border-color 0.15s;
}

.site-nav__link:hover,
.site-nav__link.router-link-active {
  color: var(--accent);
  border-color: var(--accent);
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.site-header__phone {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.site-header__phone:hover {
  color: var(--accent);
}

.menu-btn {
  display: none;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border: 1.5px solid var(--line-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--ink);
  cursor: pointer;
}

.mobile-menu {
  display: none;
  border-top: 1px solid var(--line);
  background: var(--surface);
}

.mobile-menu__nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 12px;
  padding-bottom: 16px;
}

.mobile-menu__link {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 48px;
  padding: 8px 4px;
  text-decoration: none;
  font-weight: 500;
  font-size: 17px;
  border-bottom: 1px solid var(--line);
}

.mobile-menu__link.router-link-active {
  color: var(--accent);
}

.mobile-menu__nav .btn {
  margin-top: 12px;
}

/* Below this width the six nav links no longer fit on one line. */
@media (max-width: 1140px) {
  .site-nav,
  .site-header__phone {
    display: none;
  }

  .menu-btn {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }
}

@media (max-width: 760px) {
  .site-header__cta {
    display: none;
  }
}
</style>
