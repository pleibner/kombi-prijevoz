/**
 * Prices shown on the homepage, the price list (/cjenik) and in structured data.
 * Set to match the Zagreb market (van with driver 20–30 €/h after call-out,
 * crewed moves around 60 €/h, small bulky-waste pickups around 60 €).
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
}

/** "25 €", "0,90 €"; the no-break space keeps the amount and the currency on one line. */
export const formatPrice = (value: number) =>
  `${value.toLocaleString('hr-HR', { minimumFractionDigits: Number.isInteger(value) ? 0 : 2 })}\u00a0€`

/** "od 25 € po satu" */
export const formatAnchorPrice = (anchor: PriceAnchor) =>
  ['od', formatPrice(anchor.from), anchor.unit].filter(Boolean).join(' ')

export const extraWorkerPerHour = 10
export const pricePerKmOutsideZagreb = 0.9

export const prices = {
  vanWithDriver: {
    title: 'Kombi s vozačem',
    from: 25,
    unit: 'po satu',
    unitCode: 'HUR',
    description: `Kombi, gorivo po Zagrebu i vozač koji pomaže pri utovaru i istovaru. Dodatni radnik ${formatPrice(extraWorkerPerHour)} po satu.`,
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
    description:
      'Manja količina (kauč, ormar, bijela tehnika) s utovarom i odvozom na odlagalište. Veće količine po ponudi.',
    path: '/odvoz-glomaznog-otpada',
  },
} satisfies Record<string, PriceAnchor>

export const priceAnchors: PriceAnchor[] = Object.values(prices)

/** Rows the price list shows after the price anchors. */
export const extraPrices: PriceItem[] = [
  {
    title: 'Dodatni radnik',
    price: `${formatPrice(extraWorkerPerHour)} po satu`,
    description: 'Pomoć pri nošenju, utovaru i istovaru.',
  },
  {
    title: 'Vožnja izvan Zagreba',
    price: `${formatPrice(pricePerKmOutsideZagreb)} po km`,
    description: 'Za relacije izvan Zagreba. Po dogovoru vozimo po cijeloj Hrvatskoj.',
  },
  {
    title: 'Procjena i ponuda',
    price: 'Besplatno',
    description: 'Neobvezujuće, telefonom, WhatsAppom ili putem obrasca.',
  },
]

export const pricingNotes = [
  'Procjena je besplatna i neobvezujuća',
  `Izvan Zagreba ${formatPrice(pricePerKmOutsideZagreb)} po kilometru`,
  'Plaćanje gotovinom ili internet bankarstvom',
  'R1 račun na zahtjev',
]
