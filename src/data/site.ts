const phoneE164 = '+385921372554'
const postalCode = '10090'
const locality = 'Zagreb'

export const site = {
  name: 'Kombi Transport',
  description: 'Kombi prijevoz, selidbe, dostava i odvoz otpada u Zagrebu i okolici.',
  phoneDisplay: '092 137 2554',
  phoneE164,
  phoneHref: `tel:${phoneE164}`,
  // WhatsApp is reachable only through the icon link; the number itself is never rendered.
  whatsappHref: 'https://wa.me/385989156061',
  facebookHref: 'https://www.facebook.com/share/1CT2LKegvb/',
  street: 'Trg Ivana Kukuljevića 5',
  postalCode,
  locality,
  city: `${postalCode} ${locality}`,
  geo: { latitude: 45.808, longitude: 15.8953 },
  hours: 'Svaki dan 0–24 h, uključujući praznike',
  hoursShort: 'svaki dan 0–24 h',
  yearsExperience: 30,
  serviceRadiusKm: 50,
  url: 'https://kombi-transport.com',
} as const

export const navLinks = [
  { to: '/kombi-prijevoz', label: 'Prijevoz robe' },
  { to: '/kombi-selidbe', label: 'Selidbe' },
  { to: '/kombi-dostava', label: 'Dostava' },
  { to: '/odvoz-otpada', label: 'Odvoz otpada' },
  { to: '/cjenik', label: 'Cjenik' },
  { to: '/kako-do-nas', label: 'Kako do nas' },
] as const

export const serviceAreas = [
  'Zagreb',
  'Velika Gorica',
  'Sesvete',
  'Zaprešić',
  'Samobor',
  'Dugo Selo',
  'Karlovac',
  'Krapina',
] as const
