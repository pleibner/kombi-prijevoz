import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
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
import RedovneDostaveView from '../views/RedovneDostaveView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: import.meta.env.SSR
    ? createMemoryHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),
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
      path: '/redovne-dostave',
      name: 'redovne-dostave',
      component: RedovneDostaveView,
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
  scrollBehavior() {
    return { left: 0, top: 0 }
  },
})

export default router
