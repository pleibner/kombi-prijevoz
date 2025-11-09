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
import RedovneDostaveView from '../views/RedovneDostaveView.vue'
import { trackingService } from '../utils/tracking'

const routeMeta = {
  home: {
    title: 'Kombi Transport - Profesionalne usluge prijevoza Zagreb',
    description:
      'Profesionalne usluge prijevoza u Zagrebu - brzi transport, selidbe i dostava po najnižoj cijeni. Kontaktirajte nas za besplatnu procjenu.',
  },
  kontakt: {
    title: 'Kontakt - Kombi Transport Zagreb',
    description:
      'Kontaktirajte Kombi Transport za besplatnu procjenu prijevoza, selidbi i dostave. Zagreb i okolno područje.',
  },
  'kombi-prijevoz': {
    title: 'Kombi prijevoz - Brzi i siguran transport Zagreb',
    description:
      'Profesionalni kombi prijevoz u Zagrebu. Siguran transport robe, paketa i materijala po povoljnim cijenama.',
  },
  'kombi-prijevoz-zagreb': {
    title: 'Kombi prijevoz Zagreb - Lokalni transport',
    description:
      'Specijalizirani kombi prijevoz unutar Zagreba. Brza dostava i transport za sve vaše potrebe.',
  },
  'kombi-selidbe': {
    title: 'Kombi selidbe - Profesionalne usluge selidbe Zagreb',
    description:
      'Kompletne usluge selidbe s kombijem u Zagrebu. Sigurno i efikasno premještanje vašeg namještaja i stvari.',
  },
  'kombi-dostava': {
    title: 'Kombi dostava - Brza dostava paketa Zagreb',
    description:
      'Profesionalna kombi dostava u Zagrebu. Pouzdana dostava paketa, robe i materijala na vrijeme.',
  },
  'povoljan-kombi-prijevoz': {
    title: 'Povoljan kombi prijevoz - Jeftini transport Zagreb',
    description:
      'Najpovoljniji kombi prijevoz u Zagrebu. Kvalitetne usluge transporta po najnižim cijenama.',
  },
  'specijalni-prijevoz': {
    title: 'Specijalni prijevoz - Transport posebnih tereta',
    description:
      'Specijalizirani prijevoz posebnih tereta i robe. Profesionalne usluge transporta u Zagrebu.',
  },
  'selidbe-stanova-i-kuca': {
    title: 'Selidbe stanova i kuća - Kombi transport Zagreb',
    description:
      'Profesionalne selidbe stanova i kuća s kombijem. Potpuna usluga selidbe u Zagrebu.',
  },
  'selidbe-ureda': {
    title: 'Selidbe ureda - Poslovne selidbe Zagreb',
    description:
      'Selidbe ureda i poslovnih prostora s kombijem. Efikasne poslovne selidbe u Zagrebu.',
  },
  'hitne-selidbe': {
    title: 'Hitne selidbe - Urgentni transport Zagreb',
    description:
      'Hitne selidbe i urgentni prijevoz u Zagrebu. Brza reakcija i profesionalna usluga.',
  },
  'dostava-namjestaja': {
    title: 'Dostava namještaja - Transport pokućstva Zagreb',
    description:
      'Dostava namještaja i pokućstva s kombijem. Siguran transport vašeg namještaja u Zagrebu.',
  },
  'dostava-bijele-tehnike': {
    title: 'Dostava bijele tehnike - Transport uređaja',
    description:
      'Profesionalna dostava bijele tehnike u Zagrebu. Siguran transport kućanskih aparata.',
  },
  'redovne-dostave': {
    title: 'Redovne dostave - Redoviti transport Zagreb',
    description:
      'Redovne dostave i transport usluge u Zagrebu. Pouzdane usluge za redovite potrebe.',
  },
}

export function updateMetaTags(routeName: string) {
  const meta = routeMeta[routeName as keyof typeof routeMeta]
  if (!meta) return

  document.title = meta.title

  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', meta.description)
  }

  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) {
    ogTitle.setAttribute('content', meta.title)
  }

  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) {
    ogDescription.setAttribute('content', meta.description)
  }

  const canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) {
    const url =
      routeName === 'home'
        ? 'https://kombi-transport.com/'
        : `https://kombi-transport.com/${routeName}`
    canonical.setAttribute('href', url)
  }
}

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
      path: '/redovne-dostave',
      name: 'redovne-dostave',
      component: RedovneDostaveView,
    },
  ],
})

router.afterEach((to) => {
  if (to.name) {
    updateMetaTags(to.name as string)
    trackingService.trackPageView(to.name as string)
  } else if (to.path) {
    trackingService.trackPageView(to.path.split('/').pop() || '')
  }
})

export default router
