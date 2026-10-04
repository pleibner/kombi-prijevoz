/**
 * Prices shown on the homepage, the price list (/cjenik), service pages and in structured data.
 * All prices exclude VAT (PDV); the site says so once, in vatNote (footer and price list).
 * Owner-confirmed rules: 1 hour minimum, no call-out fee, no surcharge for urgent, night or
 * holiday jobs; outside Zagreb driving is billed per km and loading per hour.
 */
export interface PriceAnchor {
  title: string
  from: number
  unit?: string
  /** UN/CEFACT unit code used in structured data, e.g. HUR for an hour. */
  unitCode?: string
  description: string
  /** Service page the price belongs to. */
  path: string
}

export interface PriceItem {
  title: string
  price: string
  description: string
  /** Page that describes the service. */
  path?: string
}

export const vatNote = 'Sve cijene su bez PDV-a.'

/** "25 €", "0,90 €"; the no-break space keeps the amount and the currency on one line. */
export const formatPrice = (value: number) =>
  `${value.toLocaleString('hr-HR', {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  })} €`

/** "60 € po m³" (without VAT, see vatNote) */
export const formatNetPrice = (value: number, unit?: string) =>
  [formatPrice(value), unit].filter(Boolean).join(' ')

/** "od 50 € po satu" */
export const formatAnchorPrice = (anchor: PriceAnchor) =>
  `od ${formatNetPrice(anchor.from, anchor.unit)}`

/** Helper added to a van-with-driver job, for transport and deliveries. */
export const extraWorker = { firstHour: 25, nextHour: 10 }

/** Moving crews, billed per hour. In the two smaller crews the driver is one of the workers. */
export const crewRates = [
  {
    crew: 'kombi i 2 radnika',
    perHour: 100,
    description: 'Vozač i pomoćnik nose, utovaruju, prevoze i istovaruju.',
  },
  {
    crew: 'kombi i 3 radnika',
    perHour: 150,
    description: 'Vozač i 2 pomoćnika nose, utovaruju, prevoze i istovaruju.',
  },
  {
    crew: 'vozač, nadzor i 4 radnika',
    perHour: 200,
    description:
      'Za veće selidbe: vozač, nadzor selidbe i 4 radnika koji nose, utovaruju i istovaruju.',
  },
] as const

export const pricePerKmOutsideZagreb = 0.9
export const twoRoomMoveFrom = 200
export const largeMoveFrom = 300
export const bulkyWastePerExtraM3 = 40
/** Rubble is priced per bag only, never per m³. */
export const rubblePerBag = 10

/** "25 € za prvi sat i 10 € za svaki sljedeći sat" */
export const extraWorkerText = `${formatNetPrice(extraWorker.firstHour)} za prvi sat i ${formatNetPrice(extraWorker.nextHour)} za svaki sljedeći sat`

/** "kombi i 2 radnika 100 €; kombi i 3 radnika 150 €; vozač, nadzor i 4 radnika 200 €" (per hour) */
export const crewRatesText = crewRates
  .map((rate) => `${rate.crew} ${formatNetPrice(rate.perHour)}`)
  .join('; ')

export const prices = {
  vanWithDriver: {
    title: 'Kombi s vozačem',
    from: 50,
    unit: 'po satu',
    unitCode: 'HUR',
    description:
      'Kombi, gorivo po Zagrebu i vozač koji pomaže pri utovaru i istovaru. Minimalno 1 sat, bez naplate dolaska.',
    path: '/kombi-prijevoz',
  },
  flatMove: {
    title: 'Selidba stana',
    from: 150,
    description:
      'Kombi i dva radnika za garsonijeru ili jednosobni stan unutar Zagreba, s nošenjem i prijevozom.',
    path: '/selidbe-stanova-i-kuca',
  },
  bulkyWaste: {
    title: 'Odvoz glomaznog otpada',
    from: 60,
    description: `Do 1 m³ (npr. kauč ili ormar), s utovarom i odvozom u reciklažno dvorište. Svaki dodatni m³ ${formatNetPrice(bulkyWastePerExtraM3)}.`,
    path: '/odvoz-glomaznog-otpada',
  },
} satisfies Record<string, PriceAnchor>

export const priceAnchors: PriceAnchor[] = Object.values(prices)

/** Every row of the price list page, in display order. */
export const priceList: PriceItem[] = [
  {
    title: prices.vanWithDriver.title,
    price: formatAnchorPrice(prices.vanWithDriver),
    description: prices.vanWithDriver.description,
    path: prices.vanWithDriver.path,
  },
  {
    title: 'Dodatni radnik uz prijevoz',
    price: formatNetPrice(extraWorker.firstHour, 'prvi sat'),
    description: `Svaki sljedeći sat ${formatNetPrice(extraWorker.nextHour)}. Pomoć pri nošenju, utovaru i istovaru uz prijevoz robe i dostave.`,
  },
  ...crewRates.map((rate) => ({
    title: `Selidba: ${rate.crew}`,
    price: formatNetPrice(rate.perHour, 'po satu'),
    description: rate.description,
    path: '/kombi-selidbe',
  })),
  {
    title: 'Selidba garsonijere ili jednosobnog stana',
    price: formatAnchorPrice(prices.flatMove),
    description: 'Kombi i dva radnika unutar Zagreba, s nošenjem i prijevozom.',
    path: prices.flatMove.path,
  },
  {
    title: 'Selidba dvosobnog stana',
    price: `od ${formatNetPrice(twoRoomMoveFrom)}`,
    description: 'Kombi i dva radnika unutar Zagreba, s nošenjem i prijevozom.',
    path: prices.flatMove.path,
  },
  {
    title: 'Selidba trosobnog stana ili kuće',
    price: `od ${formatNetPrice(largeMoveFrom)}`,
    description: 'Kombi i ekipa unutar Zagreba, s nošenjem i prijevozom.',
    path: prices.flatMove.path,
  },
  {
    title: 'Dostava iz trgovine',
    price: formatAnchorPrice(prices.vanWithDriver),
    description:
      'Namještaj i bijela tehnika iz IKEA-e, Lesnine, Pevexa i drugih trgovina, po satnoj cijeni kombija s vozačem: unos u stan, montaža namještaja, spajanje uređaja i odvoz starog komada.',
    path: '/dostava-namjestaja',
  },
  {
    title: prices.bulkyWaste.title,
    price: formatAnchorPrice(prices.bulkyWaste),
    description: 'Do 1 m³ (npr. kauč ili ormar), s utovarom i odvozom u reciklažno dvorište.',
    path: prices.bulkyWaste.path,
  },
  {
    title: 'Svaki dodatni m³ glomaznog otpada',
    price: formatNetPrice(bulkyWastePerExtraM3, 'po m³'),
    description: 'Za veće količine glomaznog otpada i starog namještaja.',
    path: '/odvoz-starog-namjestaja',
  },
  {
    title: 'Odvoz šute',
    price: `od ${formatNetPrice(rubblePerBag, 'po vreći')}`,
    description: 'Utovar i odvoz građevinskog otpada u reciklažno dvorište.',
    path: '/odvoz-sute',
  },
  {
    title: 'Vožnja izvan Zagreba',
    price: formatNetPrice(pricePerKmOutsideZagreb, 'po km'),
    description: 'Vožnju naplaćujemo po kilometru, a utovar i istovar po satu.',
  },
  {
    title: 'Hitni, noćni i blagdanski termini',
    price: 'Bez nadoplate',
    description:
      'Hitno radimo 0–24. U Zagrebu stižemo u roku od sat vremena ako imamo slobodan kombi.',
    path: '/hitne-selidbe',
  },
  {
    title: 'Procjena i ponuda',
    price: 'Besplatno',
    description: 'Neobvezujuće, telefonom, WhatsAppom ili putem obrasca.',
  },
]

export const pricingNotes = [
  'Procjena je besplatna i neobvezujuća',
  'Bez naplate dolaska',
  `Izvan Zagreba ${formatNetPrice(pricePerKmOutsideZagreb, 'po kilometru')}`,
  'Plaćanje gotovinom ili internet bankarstvom',
  'R1 račun na zahtjev',
]
