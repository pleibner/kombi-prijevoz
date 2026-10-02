/**
 * Price anchors shown on the homepage and service pages.
 * Set to match the Zagreb market (van with driver 20–30 €/h after call-out,
 * crewed moves around 60 €/h, small bulky-waste pickups around 60 €).
 */
export interface PriceAnchor {
  title: string
  from: number
  unit?: string
  description: string
}

export const priceAnchors: PriceAnchor[] = [
  {
    title: 'Kombi s vozačem',
    from: 25,
    unit: 'po satu',
    description:
      'Kombi, gorivo po Zagrebu i vozač koji pomaže pri utovaru i istovaru. Dodatni radnik 10 € po satu.',
  },
  {
    title: 'Selidba stana',
    from: 150,
    description:
      'Kombi i dva radnika za garsonijeru ili jednosobni stan unutar Zagreba, s nošenjem i prijevozom.',
  },
  {
    title: 'Odvoz glomaznog otpada',
    from: 60,
    description:
      'Manja količina (kauč, ormar, bijela tehnika) s utovarom i odvozom na odlagalište. Veće količine po ponudi.',
  },
]

export const pricingNotes = [
  'Procjena je besplatna i neobvezujuća',
  'Izvan Zagreba 0,90 € po kilometru',
  'Plaćanje gotovinom ili internet bankarstvom',
  'R1 račun na zahtjev',
]

export const formatPrice = (value: number) => `${value.toLocaleString('hr-HR')} €`
