export const site = {
  name: 'Kombi Transport',
  phoneDisplay: '092 137 2554',
  phoneHref: 'tel:+385921372554',
  // WhatsApp is reachable only through the icon link; the number itself is never rendered.
  whatsappHref: 'https://wa.me/385989156061',
  facebookHref: 'https://www.facebook.com/share/1CT2LKegvb/',
  street: 'Trg Ivana Kukuljevića 5',
  city: '10090 Zagreb',
  hours: 'Ponedjeljak do nedjelja, 08 do 20 h',
  hoursShort: 'svaki dan 08 do 20 h',
  url: 'https://kombi-transport.com',
} as const

export const navLinks = [
  { to: '/kombi-prijevoz', label: 'Prijevoz robe' },
  { to: '/kombi-selidbe', label: 'Selidbe' },
  { to: '/kombi-dostava', label: 'Dostava' },
  { to: '/odvoz-otpada', label: 'Odvoz otpada' },
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
