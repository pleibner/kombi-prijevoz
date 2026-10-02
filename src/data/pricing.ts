/**
 * Prices shown on the homepage, the price list (/cjenik), service pages and in structured data.
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

/** "25 €", "0,90 €"; the no-break space keeps the amount and the currency on one line. */
export const formatPrice = (value: number) =>
  `${value.toLocaleString('hr-HR', { minimumFractionDigits: Number.isInteger(value) ? 0 : 2 })}\u00a0€`

/** "od 25 € po satu" */
export const formatAnchorPrice = (anchor: PriceAnchor) =>
  ['od', formatPrice(anchor.from), anchor.unit].filter(Boolean).join(' ')

export const extraWorkerPerHour = 10
export const pricePerKmOutsideZagreb = 0.9
export const twoRoomMoveFrom = 200
export const largeMoveFrom = 300
export const bulkyWastePerExtraM3 = 40
export const rubblePerM3 = 40

export const prices = {
  vanWithDriver: {
    title: 'Kombi s vozačem',
    from: 25,
    unit: 'po satu',
    unitCode: 'HUR',
    description: `Kombi, gorivo po Zagrebu i vozač koji pomaže pri utovaru i istovaru. Minimalno 1 sat, bez naplate dolaska. Dodatni radnik ${formatPrice(extraWorkerPerHour)} po satu.`,
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
    description: `Do 1 m³ (npr. kauč ili ormar), s utovarom i odvozom u reciklažno dvorište. Svaki dodatni m³ ${formatPrice(bulkyWastePerExtraM3)}.`,
    path: '/odvoz-glomaznog-otpada',
  },
} satisfies Record<string, PriceAnchor>

export const priceAnchors: PriceAnchor[] = Object.values(prices)

/** Every row of the price list page, in display order. */
export const priceList: PriceItem[] = [
  {
    title: prices.vanWithDriver.title,
    price: formatAnchorPrice(prices.vanWithDriver),
    description:
      'Kombi, gorivo po Zagrebu i vozač koji pomaže pri utovaru i istovaru. Minimalno 1 sat, bez naplate dolaska.',
    path: prices.vanWithDriver.path,
  },
  {
    title: 'Dodatni radnik',
    price: `${formatPrice(extraWorkerPerHour)} po satu`,
    description: 'Pomoć pri nošenju, utovaru i istovaru.',
  },
  {
    title: 'Selidba garsonijere ili jednosobnog stana',
    price: formatAnchorPrice(prices.flatMove),
    description: 'Kombi i dva radnika unutar Zagreba, s nošenjem i prijevozom.',
    path: prices.flatMove.path,
  },
  {
    title: 'Selidba dvosobnog stana',
    price: `od ${formatPrice(twoRoomMoveFrom)}`,
    description: 'Kombi i dva radnika unutar Zagreba, s nošenjem i prijevozom.',
    path: prices.flatMove.path,
  },
  {
    title: 'Selidba trosobnog stana ili kuće',
    price: `od ${formatPrice(largeMoveFrom)}`,
    description: 'Kombi i ekipa unutar Zagreba, s nošenjem i prijevozom.',
    path: prices.flatMove.path,
  },
  {
    title: 'Dostava iz trgovine',
    price: formatAnchorPrice(prices.vanWithDriver),
    description:
      'Namještaj i bijela tehnika iz IKEA-e, Lesnine, Pevexa i drugih trgovina, po satnoj cijeni: unos u stan, montaža namještaja, spajanje uređaja i odvoz starog komada.',
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
    price: `${formatPrice(bulkyWastePerExtraM3)} po m³`,
    description: 'Za veće količine glomaznog otpada i starog namještaja.',
    path: '/odvoz-starog-namjestaja',
  },
  {
    title: 'Odvoz šute',
    price: `${formatPrice(rubblePerM3)} po m³`,
    description: 'Utovar i odvoz građevinskog otpada u reciklažno dvorište.',
    path: '/odvoz-sute',
  },
  {
    title: 'Vožnja izvan Zagreba',
    price: `${formatPrice(pricePerKmOutsideZagreb)} po km`,
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
  `Izvan Zagreba ${formatPrice(pricePerKmOutsideZagreb)} po kilometru`,
  'Plaćanje gotovinom ili internet bankarstvom',
  'R1 račun na zahtjev',
]
