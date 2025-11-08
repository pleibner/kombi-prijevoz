import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import KombiPrijevozView from '../views/KombiPrijevozView.vue'
import KombiPrijevozZagrebView from '../views/KombiPrijevozZagrebView.vue'
import KombiSelidbeView from '../views/KombiSelidbeView.vue'
import KombiDostavaView from '../views/KombiDostavaView.vue'
import PovoljanKombiPrijevozView from '../views/PovoljanKombiPrijevozView.vue'
import { trackingService } from '../utils/tracking'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: ContactView,
    },
    {
      path: '/kombi-prijevoz',
      name: 'kombi-prijevoz',
      component: KombiPrijevozView,
    },
    {
      path: '/kombi-prijevoz-zagreb',
      name: 'kombi-prijevoz-zagreb',
      component: KombiPrijevozZagrebView,
    },
    {
      path: '/kombi-selidbe',
      name: 'kombi-selidbe',
      component: KombiSelidbeView,
    },
    {
      path: '/kombi-dostava',
      name: 'kombi-dostava',
      component: KombiDostavaView,
    },
    {
      path: '/povoljan-kombi-prijevoz',
      name: 'povoljan-kombi-prijevoz',
      component: PovoljanKombiPrijevozView,
    },
  ],
})

router.afterEach((to) => {
  if (to.name) {
    trackingService.trackPageView(to.name as string)
  } else if (to.path) {
    trackingService.trackPageView(to.path.split('/').pop() || '')
  }
})

export default router
