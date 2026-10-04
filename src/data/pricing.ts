/**
 * Prices shown on the homepage, the price list (/cjenik), service pages and in structured data.
 * All prices exclude VAT (PDV); the site says so once, in vatNote (footer and price list).
 * Owner-confirmed rules: the driver drives and coordinates but never carries; moves are billed
 * per hour (no fixed move prices); 1 hour minimum, no call-out fee, no surcharge for urgent, night
 * or holiday jobs; outside Zagreb driving is billed per km and loading per hour.
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

/** "25", "0,90" */
const formatAmount = (value: number) =>
  value.toLocaleString('hr-HR', {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  })

/** "25 €", "0,90 €"; the no-break space keeps the amount and the currency on one line. */
export const formatPrice = (value: number) => `${formatAmount(value)} €`

/** "60–100 €" */
export const formatPriceRange = ({ from, to }: { from: number; to: number }) =>
  `${formatAmount(from)}–${formatPrice(to)}`

/** "60 € po m³" (without VAT, see vatNote) */
export const formatNetPrice = (value: number, unit?: string) =>
  [formatPrice(value), unit].filter(Boolean).join(' ')

/** "od 50 € po satu" */
export const formatAnchorPrice = (anchor: PriceAnchor) =>
  `od ${formatNetPrice(anchor.from, anchor.unit)}`

/** Helper added to a van-with-driver job, for transport and deliveries. */
export const extraWorker = { firstHour: 25, nextHour: 10 }

/** A moving crew, billed per hour: a van with a driver who coordinates, and workers who carry. */
const movingCrew = (workers: number, perHour: number) => ({
  crew: `kombi i ${workers} radnika`,
  perHour,
  description: `Vozač koordinira selidbu, a ${workers} radnika nose, utovaruju i istovaruju.`,
})

export const crewRates = [movingCrew(2, 100), movingCrew(3, 150), movingCrew(4, 200)] as const

export const pricePerKmOutsideZagreb = 1
/** Delivery from a store (IKEA, Lesnina, Pevex…), a starting price per delivery. */
export const storeDeliveryFrom = 50
export const bulkyWastePerExtraM3 = 40
/** Removal of a bed or a wardrobe, depending on its weight and the floor. */
export const bedOrWardrobeRemoval = { from: 60, to: 100 }
/** Rubble is priced per bag only, never per m³. */
export const rubblePerBag = 10

/** "25 € za prvi sat i 10 € za svaki sljedeći sat" */
export const extraWorkerText = `${formatNetPrice(extraWorker.firstHour)} za prvi sat i ${formatNetPrice(extraWorker.nextHour)} za svaki sljedeći sat`

/** "kombi i 2 radnika 100 €, kombi i 3 radnika 150 €, kombi i 4 radnika 200 €" (per hour) */
export const crewRatesText = crewRates
  .map((rate) => `${rate.crew} ${formatNetPrice(rate.perHour)}`)
  .join(', ')

export const prices = {
  vanWithDriver: {
    title: 'Kombi s vozačem',
    from: 50,
    unit: 'po satu',
    unitCode: 'HUR',
    description:
      'Kombi, gorivo po Zagrebu i vozač koji koordinira utovar i istovar. Minimalno 1 sat, bez naplate dolaska.',
    path: '/kombi-prijevoz',
  },
  move: {
    title: 'Selidba',
    from: crewRates[0].perHour,
    unit: 'po satu',
    unitCode: 'HUR',
    description: `${crewRates[0].description} Veća ekipa od ${formatNetPrice(crewRates[1].perHour)} po satu.`,
    path: '/kombi-selidbe',
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
    title: 'Dostava iz trgovine',
    price: `od ${formatNetPrice(storeDeliveryFrom)}`,
    description:
      'Namještaj i bijela tehnika iz IKEA-e, Lesnine, Pevexa i drugih trgovina: unos u stan, montaža namještaja, spajanje uređaja i odvoz starog komada.',
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
    title: 'Odvoz kreveta ili ormara',
    price: formatPriceRange(bedOrWardrobeRemoval),
    description: 'Ovisno o težini i katu, s iznošenjem i odvozom u reciklažno dvorište.',
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
