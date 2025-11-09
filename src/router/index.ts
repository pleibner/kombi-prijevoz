import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import KombiPrijevozView from '../views/KombiPrijevozView.vue'
import KombiPrijevozZagrebView from '../views/KombiPrijevozZagrebView.vue'
import KombiSelidbeView from '../views/KombiSelidbeView.vue'
import KombiDostavaView from '../views/KombiDostavaView.vue'
import PovoljanKombiPrijevozView from '../views/PovoljanKombiPrijevozView.vue'
import SpecijalniPrijevozView from '../views/SpecijalniPrijevozView.vue'
import SelidbeStanovaIKucaView from '../views/SelidbeStanovaIKucaView.vue'
import SelidbeUredaView from '../views/SelidbeUredaView.vue'
import HitneSelidbeView from '../views/HitneSelidbeView.vue'
import DostavaNamjestajaView from '../views/DostavaNamjestajaView.vue'
import DostavaBijeleTehnikeView from '../views/DostavaBijeleTehnikeView.vue'
import PonavljajuceDostaveView from '../views/PonavljajuceDostaveView.vue'
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
    {
      path: '/specijalni-prijevoz',
      name: 'specijalni-prijevoz',
      component: SpecijalniPrijevozView,
    },
    {
      path: '/selidbe-stanova-i-kuca',
      name: 'selidbe-stanova-i-kuca',
      component: SelidbeStanovaIKucaView,
    },
    {
      path: '/selidbe-ureda',
      name: 'selidbe-ureda',
      component: SelidbeUredaView,
    },
    {
      path: '/hitne-selidbe',
      name: 'hitne-selidbe',
      component: HitneSelidbeView,
    },
    {
      path: '/dostava-namjestaja',
      name: 'dostava-namjestaja',
      component: DostavaNamjestajaView,
    },
    {
      path: '/dostava-bijele-tehnike',
      name: 'dostava-bijele-tehnike',
      component: DostavaBijeleTehnikeView,
    },
    {
      path: '/ponavljajuce-dostave',
      name: 'ponavljajuce-dostave',
      component: PonavljajuceDostaveView,
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
